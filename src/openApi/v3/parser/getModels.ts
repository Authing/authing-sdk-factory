import type { Model } from '../../../client/interfaces/Model';
import { camelizeAndFirstCharUpperCase } from '../../../utils/camelize';
import type { OpenApi } from '../interfaces/OpenApi';
import { getModel } from './getModel';
import { getType } from './getType';

const javaTypeMap: any = {
    string: 'String',
    number: 'Integer',
    boolean: 'Boolean',
};

export const getModels = (openApi: OpenApi): Model[] => {
    const models: Model[] = [];
    if (openApi.components) {
        for (const definitionName in openApi.components.schemas) {
            if (openApi.components.schemas.hasOwnProperty(definitionName)) {
                const definition = openApi.components.schemas[definitionName];
                const definitionType = getType(definitionName);
                const model = getModel(openApi, definition, true, definitionType.base);

                if (model.properties.length) {
                    model.properties.forEach(p => {
                        const { name, base } = p;
                        p.name_java_get = `get${camelizeAndFirstCharUpperCase(name)}`;
                        p.name_java_set = `set${camelizeAndFirstCharUpperCase(name)}`;
                        if (javaTypeMap[base]) {
                            p.base_java = javaTypeMap[base];
                        } else {
                            p.base_java = base;
                        }
                    });
                }

                models.push(model);
            }
        }
    }
    return models;
};
