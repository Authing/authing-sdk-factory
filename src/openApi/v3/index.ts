import _ from 'lodash';

import type { Client } from '../../client/interfaces/Client';
import { camelToSnakeCase } from '../../utils';
import type { OpenApi } from './interfaces/OpenApi';
import { getModels, getModelByParameter, getModelByOperation } from './parser/getModels';
import { getServer } from './parser/getServer';
import { getServices } from './parser/getServices';
import { getServiceVersion } from './parser/getServiceVersion';
import { Model } from '../../client/interfaces/Model';
import { getPattern } from '../../utils/getPattern';
import { Enum } from '../../client/interfaces/Enum';
import { Operation } from '../../client/interfaces/Operation';

const pythonTypeMap: Record<string, any> = {
    string: 'str',
    number: 'int',
    boolean: 'bool',
    object: 'Object',
    array: 'list',
};

const phpTypeMap: Record<string, any> = {
    string: 'string',
    number: 'integer',
    boolean: 'boolean',
    object: 'object',
    array: 'array',
};

/**
 * Parse the OpenAPI specification to a Client model that contains
 * all the models, services and schema's we should output.
 * @param openApi The OpenAPI spec  that we have loaded from disk.
 */
export const parse = (openApi: OpenApi): Client => {
    const version = getServiceVersion(openApi.info.version);
    const server = getServer(openApi);
    const models = getModels(openApi);
    const services = getServices(openApi);
    services.forEach(service => {
        service.operations.forEach(op => {
            const { parameters, method } = op;
            if (parameters.length) {
                if (method === 'GET') {
                    // for java
                    let properties: Model[] = [];
                    parameters.forEach(p => {
                        p.type_python = pythonTypeMap[p.type] || '';
                        if (p.prop) {
                            p.prop_underscore = camelToSnakeCase(p.prop);
                        }
                        // for java ---- start ----
                        const propertiesModel = getModelByParameter(p);

                        properties.push(propertiesModel);
                        // for java ---- end ----
                    });

                    // for java ---- start ----
                    let addedJavaModel: Model = getModelByOperation(op);
                    addedJavaModel.properties = properties;
                    models.push(addedJavaModel);
                    op.parametersDto = addedJavaModel.name;
                    // for java ---- end ----
                } else if (method === 'POST') {
                    const type = parameters[0].type;
                    const model = _.find(models, (m: any) => m.name === type);
                    const properties = (model?.properties || []).sort(p => (p.isRequired ? -1 : 1));
                    properties.forEach(p => {
                        p.name_underscore = camelToSnakeCase(p.name);
                        if (p.export === 'generic') {
                            p.type_python = pythonTypeMap[p.type] || '';
                            p.type_php = phpTypeMap[p.type] || '';
                        } else if (p.export === 'array') {
                            p.type_python = 'list';
                            p.type_php = 'array';
                        } else if (p.export === 'enum') {
                            p.type_python = 'str';
                            p.type_php = 'string';
                        } else if (p.export === 'interface') {
                            p.type_python = 'dict';
                            p.type_php = 'array';
                        } else if (p.export === 'all-of') {
                            p.type_python = 'dict';
                            p.type_php = 'array';
                        } else {
                            p.type_python = pythonTypeMap[p.type] || '';
                            p.type_php = phpTypeMap[p.type] || '';
                        }
                    });
                    op.parametersRaw = {
                        python: properties,
                        php: properties,
                    };
                }
            }
        });
    });
    return { version, server, models, services };
};
