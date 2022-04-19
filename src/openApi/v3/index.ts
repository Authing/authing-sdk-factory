import _ from 'lodash';

import type { Client } from '../../client/interfaces/Client';
import { camelToSnakeCase } from '../../utils';
import type { OpenApi } from './interfaces/OpenApi';
import { getModels } from './parser/getModels';
import { getServer } from './parser/getServer';
import { getServices } from './parser/getServices';
import { getServiceVersion } from './parser/getServiceVersion';

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
            const { parameters } = op;
            if (parameters.length) {
                const type = parameters[0].type;
                const model = _.find(models, (m: any) => m.name === type);
                const properties = (model?.properties || []).sort(p => (p.isRequired ? -1 : 1));
                properties.forEach(p => {
                    p.name_underscore = camelToSnakeCase(p.name);
                });
                op.parametersRaw = {
                    python: properties,
                };
            }
        });
    });
    return { version, server, models, services };
};
