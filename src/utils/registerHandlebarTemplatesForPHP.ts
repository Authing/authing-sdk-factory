import Handlebars from 'handlebars/runtime';

import { HttpClient } from '../HttpClient';
import templateClient from '../templates/php/client.hbs';
import templateauthMethods from '../templates/php/authMethods.hbs';
import angularGetHeaders from '../templates/php/core/angular/getHeaders.hbs';
import angularGetRequestBody from '../templates/php/core/angular/getRequestBody.hbs';
import angularGetResponseBody from '../templates/php/core/angular/getResponseBody.hbs';
import angularGetResponseHeader from '../templates/php/core/angular/getResponseHeader.hbs';
import angularRequest from '../templates/php/core/angular/request.hbs';
import angularSendRequest from '../templates/php/core/angular/sendRequest.hbs';
import templateCoreApiError from '../templates/php/core/ApiError.hbs';
import templateCoreApiRequestOptions from '../templates/php/core/ApiRequestOptions.hbs';
import templateCoreApiResult from '../templates/php/core/ApiResult.hbs';
import axiosGetHeaders from '../templates/php/core/axios/getHeaders.hbs';
import axiosGetRequestBody from '../templates/php/core/axios/getRequestBody.hbs';
import axiosGetResponseBody from '../templates/php/core/axios/getResponseBody.hbs';
import axiosGetResponseHeader from '../templates/php/core/axios/getResponseHeader.hbs';
import axiosRequest from '../templates/php/core/axios/request.hbs';
import axiosSendRequest from '../templates/php/core/axios/sendRequest.hbs';
import templateCoreBaseHttpRequest from '../templates/php/core/BaseHttpRequest.hbs';
import templateCancelablePromise from '../templates/php/core/CancelablePromise.hbs';
import fetchGetHeaders from '../templates/php/core/fetch/getHeaders.hbs';
import fetchGetRequestBody from '../templates/php/core/fetch/getRequestBody.hbs';
import fetchGetResponseBody from '../templates/php/core/fetch/getResponseBody.hbs';
import fetchGetResponseHeader from '../templates/php/core/fetch/getResponseHeader.hbs';
import fetchRequest from '../templates/php/core/fetch/request.hbs';
import fetchSendRequest from '../templates/php/core/fetch/sendRequest.hbs';
import functionBase64 from '../templates/php/core/functions/base64.hbs';
import functionCatchErrorCodes from '../templates/php/core/functions/catchErrorCodes.hbs';
import functionGetFormData from '../templates/php/core/functions/getFormData.hbs';
import functionGetQueryString from '../templates/php/core/functions/getQueryString.hbs';
import functionGetUrl from '../templates/php/core/functions/getUrl.hbs';
import functionIsBlob from '../templates/php/core/functions/isBlob.hbs';
import functionIsDefined from '../templates/php/core/functions/isDefined.hbs';
import functionIsFormData from '../templates/php/core/functions/isFormData.hbs';
import functionIsString from '../templates/php/core/functions/isString.hbs';
import functionIsStringWithValue from '../templates/php/core/functions/isStringWithValue.hbs';
import functionIsSuccess from '../templates/php/core/functions/isSuccess.hbs';
import functionResolve from '../templates/php/core/functions/resolve.hbs';
import templateCoreHttpRequest from '../templates/php/core/HttpRequest.hbs';
import nodeGetHeaders from '../templates/php/core/node/getHeaders.hbs';
import nodeGetRequestBody from '../templates/php/core/node/getRequestBody.hbs';
import nodeGetResponseBody from '../templates/php/core/node/getResponseBody.hbs';
import nodeGetResponseHeader from '../templates/php/core/node/getResponseHeader.hbs';
import nodeRequest from '../templates/php/core/node/request.hbs';
import nodeSendRequest from '../templates/php/core/node/sendRequest.hbs';
import templateCoreSettings from '../templates/php/core/OpenAPI.hbs';
import templateCoreRequest from '../templates/php/core/request.hbs';
import xhrGetHeaders from '../templates/php/core/xhr/getHeaders.hbs';
import xhrGetRequestBody from '../templates/php/core/xhr/getRequestBody.hbs';
import xhrGetResponseBody from '../templates/php/core/xhr/getResponseBody.hbs';
import xhrGetResponseHeader from '../templates/php/core/xhr/getResponseHeader.hbs';
import xhrRequest from '../templates/php/core/xhr/request.hbs';
import xhrSendRequest from '../templates/php/core/xhr/sendRequest.hbs';
import templateExportModel from '../templates/php/exportModel.hbs';
import templateExportSchema from '../templates/php/exportSchema.hbs';
import templateExportService from '../templates/php/exportService.hbs';
import templateIndex from '../templates/php/index.hbs';
import partialBase from '../templates/php/partials/base.hbs';
import partialExportComposition from '../templates/php/partials/exportComposition.hbs';
import partialExportEnum from '../templates/php/partials/exportEnum.hbs';
import partialExportInterface from '../templates/php/partials/exportInterface.hbs';
import partialExportType from '../templates/php/partials/exportType.hbs';
import partialHeader from '../templates/php/partials/header.hbs';
import partialIsNullable from '../templates/php/partials/isNullable.hbs';
import partialIsReadOnly from '../templates/php/partials/isReadOnly.hbs';
import partialIsRequired from '../templates/php/partials/isRequired.hbs';
import partialParameters from '../templates/php/partials/parameters.hbs';
import partialParametersGet from '../templates/php/partials/parametersGet.hbs';
import partialParametersPost from '../templates/php/partials/parametersPost.hbs';
import partialResult from '../templates/php/partials/result.hbs';
import partialSchema from '../templates/php/partials/schema.hbs';
import partialSchemaArray from '../templates/php/partials/schemaArray.hbs';
import partialSchemaComposition from '../templates/php/partials/schemaComposition.hbs';
import partialSchemaDictionary from '../templates/php/partials/schemaDictionary.hbs';
import partialSchemaEnum from '../templates/php/partials/schemaEnum.hbs';
import partialSchemaGeneric from '../templates/php/partials/schemaGeneric.hbs';
import partialSchemaInterface from '../templates/php/partials/schemaInterface.hbs';
import partialType from '../templates/php/partials/type.hbs';
import partialTypeArray from '../templates/php/partials/typeArray.hbs';
import partialTypeDictionary from '../templates/php/partials/typeDictionary.hbs';
import partialTypeEnum from '../templates/php/partials/typeEnum.hbs';
import partialTypeGeneric from '../templates/php/partials/typeGeneric.hbs';
import partialTypeInterface from '../templates/php/partials/typeInterface.hbs';
import partialTypeIntersection from '../templates/php/partials/typeIntersection.hbs';
import partialTypeReference from '../templates/php/partials/typeReference.hbs';
import partialTypeUnion from '../templates/php/partials/typeUnion.hbs';
import { registerHandlebarHelpers } from './registerHandlebarHelpers';

export interface Templates {
    index: Handlebars.TemplateDelegate;
    client: Handlebars.TemplateDelegate;
    exports: {
        model: Handlebars.TemplateDelegate;
        schema: Handlebars.TemplateDelegate;
        service: Handlebars.TemplateDelegate;
        authMethods:  Handlebars.TemplateDelegate;
    };
    core: {
        settings: Handlebars.TemplateDelegate;
        apiError: Handlebars.TemplateDelegate;
        apiRequestOptions: Handlebars.TemplateDelegate;
        apiResult: Handlebars.TemplateDelegate;
        cancelablePromise: Handlebars.TemplateDelegate;
        request: Handlebars.TemplateDelegate;
        baseHttpRequest: Handlebars.TemplateDelegate;
        httpRequest: Handlebars.TemplateDelegate;
    };
}

/**
 * Read all the Handlebar templates that we need and return on wrapper object
 * so we can easily access the templates in out generator / write functions.
 */
export const registerHandlebarTemplatesForPHP = (root: {
    httpClient: HttpClient;
    useOptions: boolean;
    useUnionTypes: boolean;
}): Templates => {
    registerHandlebarHelpers(root);

    // Main templates (entry points for the files we write to disk)
    const templates: Templates = {
        index: Handlebars.template(templateIndex),
        client: Handlebars.template(templateClient),
        exports: {
            model: Handlebars.template(templateExportModel),
            schema: Handlebars.template(templateExportSchema),
            service: Handlebars.template(templateExportService),
            authMethods: Handlebars.template(templateauthMethods),
        },
        core: {
            settings: Handlebars.template(templateCoreSettings),
            apiError: Handlebars.template(templateCoreApiError),
            apiRequestOptions: Handlebars.template(templateCoreApiRequestOptions),
            apiResult: Handlebars.template(templateCoreApiResult),
            cancelablePromise: Handlebars.template(templateCancelablePromise),
            request: Handlebars.template(templateCoreRequest),
            baseHttpRequest: Handlebars.template(templateCoreBaseHttpRequest),
            httpRequest: Handlebars.template(templateCoreHttpRequest),
        },
    };

    // Partials for the generations of the models, services, etc.
    Handlebars.registerPartial('exportEnum', Handlebars.template(partialExportEnum));
    Handlebars.registerPartial('exportInterface', Handlebars.template(partialExportInterface));
    Handlebars.registerPartial('exportComposition', Handlebars.template(partialExportComposition));
    Handlebars.registerPartial('exportType', Handlebars.template(partialExportType));
    Handlebars.registerPartial('header', Handlebars.template(partialHeader));
    Handlebars.registerPartial('isNullable', Handlebars.template(partialIsNullable));
    Handlebars.registerPartial('isReadOnly', Handlebars.template(partialIsReadOnly));
    Handlebars.registerPartial('isRequired', Handlebars.template(partialIsRequired));
    Handlebars.registerPartial('parameters', Handlebars.template(partialParameters));
    Handlebars.registerPartial('parametersGet', Handlebars.template(partialParametersGet));
    Handlebars.registerPartial('parametersPost', Handlebars.template(partialParametersPost));
    Handlebars.registerPartial('result', Handlebars.template(partialResult));
    Handlebars.registerPartial('schema', Handlebars.template(partialSchema));
    Handlebars.registerPartial('schemaArray', Handlebars.template(partialSchemaArray));
    Handlebars.registerPartial('schemaDictionary', Handlebars.template(partialSchemaDictionary));
    Handlebars.registerPartial('schemaEnum', Handlebars.template(partialSchemaEnum));
    Handlebars.registerPartial('schemaGeneric', Handlebars.template(partialSchemaGeneric));
    Handlebars.registerPartial('schemaInterface', Handlebars.template(partialSchemaInterface));
    Handlebars.registerPartial('schemaComposition', Handlebars.template(partialSchemaComposition));
    Handlebars.registerPartial('type', Handlebars.template(partialType));
    Handlebars.registerPartial('typeArray', Handlebars.template(partialTypeArray));
    Handlebars.registerPartial('typeDictionary', Handlebars.template(partialTypeDictionary));
    Handlebars.registerPartial('typeEnum', Handlebars.template(partialTypeEnum));
    Handlebars.registerPartial('typeGeneric', Handlebars.template(partialTypeGeneric));
    Handlebars.registerPartial('typeInterface', Handlebars.template(partialTypeInterface));
    Handlebars.registerPartial('typeReference', Handlebars.template(partialTypeReference));
    Handlebars.registerPartial('typeUnion', Handlebars.template(partialTypeUnion));
    Handlebars.registerPartial('typeIntersection', Handlebars.template(partialTypeIntersection));
    Handlebars.registerPartial('base', Handlebars.template(partialBase));

    // Generic functions used in 'request' file @see src/templates/core/request.hbs for more info
    Handlebars.registerPartial('functions/catchErrorCodes', Handlebars.template(functionCatchErrorCodes));
    Handlebars.registerPartial('functions/getFormData', Handlebars.template(functionGetFormData));
    Handlebars.registerPartial('functions/getQueryString', Handlebars.template(functionGetQueryString));
    Handlebars.registerPartial('functions/getUrl', Handlebars.template(functionGetUrl));
    Handlebars.registerPartial('functions/isBlob', Handlebars.template(functionIsBlob));
    Handlebars.registerPartial('functions/isDefined', Handlebars.template(functionIsDefined));
    Handlebars.registerPartial('functions/isFormData', Handlebars.template(functionIsFormData));
    Handlebars.registerPartial('functions/isString', Handlebars.template(functionIsString));
    Handlebars.registerPartial('functions/isStringWithValue', Handlebars.template(functionIsStringWithValue));
    Handlebars.registerPartial('functions/isSuccess', Handlebars.template(functionIsSuccess));
    Handlebars.registerPartial('functions/base64', Handlebars.template(functionBase64));
    Handlebars.registerPartial('functions/resolve', Handlebars.template(functionResolve));

    // Specific files for the fetch client implementation
    Handlebars.registerPartial('fetch/getHeaders', Handlebars.template(fetchGetHeaders));
    Handlebars.registerPartial('fetch/getRequestBody', Handlebars.template(fetchGetRequestBody));
    Handlebars.registerPartial('fetch/getResponseBody', Handlebars.template(fetchGetResponseBody));
    Handlebars.registerPartial('fetch/getResponseHeader', Handlebars.template(fetchGetResponseHeader));
    Handlebars.registerPartial('fetch/sendRequest', Handlebars.template(fetchSendRequest));
    Handlebars.registerPartial('fetch/request', Handlebars.template(fetchRequest));

    // Specific files for the xhr client implementation
    Handlebars.registerPartial('xhr/getHeaders', Handlebars.template(xhrGetHeaders));
    Handlebars.registerPartial('xhr/getRequestBody', Handlebars.template(xhrGetRequestBody));
    Handlebars.registerPartial('xhr/getResponseBody', Handlebars.template(xhrGetResponseBody));
    Handlebars.registerPartial('xhr/getResponseHeader', Handlebars.template(xhrGetResponseHeader));
    Handlebars.registerPartial('xhr/sendRequest', Handlebars.template(xhrSendRequest));
    Handlebars.registerPartial('xhr/request', Handlebars.template(xhrRequest));

    // Specific files for the node client implementation
    Handlebars.registerPartial('node/getHeaders', Handlebars.template(nodeGetHeaders));
    Handlebars.registerPartial('node/getRequestBody', Handlebars.template(nodeGetRequestBody));
    Handlebars.registerPartial('node/getResponseBody', Handlebars.template(nodeGetResponseBody));
    Handlebars.registerPartial('node/getResponseHeader', Handlebars.template(nodeGetResponseHeader));
    Handlebars.registerPartial('node/sendRequest', Handlebars.template(nodeSendRequest));
    Handlebars.registerPartial('node/request', Handlebars.template(nodeRequest));

    // Specific files for the axios client implementation
    Handlebars.registerPartial('axios/getHeaders', Handlebars.template(axiosGetHeaders));
    Handlebars.registerPartial('axios/getRequestBody', Handlebars.template(axiosGetRequestBody));
    Handlebars.registerPartial('axios/getResponseBody', Handlebars.template(axiosGetResponseBody));
    Handlebars.registerPartial('axios/getResponseHeader', Handlebars.template(axiosGetResponseHeader));
    Handlebars.registerPartial('axios/sendRequest', Handlebars.template(axiosSendRequest));
    Handlebars.registerPartial('axios/request', Handlebars.template(axiosRequest));

    // Specific files for the angular client implementation
    Handlebars.registerPartial('angular/getHeaders', Handlebars.template(angularGetHeaders));
    Handlebars.registerPartial('angular/getRequestBody', Handlebars.template(angularGetRequestBody));
    Handlebars.registerPartial('angular/getResponseBody', Handlebars.template(angularGetResponseBody));
    Handlebars.registerPartial('angular/getResponseHeader', Handlebars.template(angularGetResponseHeader));
    Handlebars.registerPartial('angular/sendRequest', Handlebars.template(angularSendRequest));
    Handlebars.registerPartial('angular/request', Handlebars.template(angularRequest));

    // Helpers
    Handlebars.registerHelper('convertFirstCharToUpperCase', (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });

    Handlebars.registerHelper('getEnumMemeber', (str: string) => {
        return str.replace("'", '"').replace("'", '"');
    });

    Handlebars.registerHelper('convertSingleQuotesToDoubleQuotes', (str: string) => {
        return str.replace(/\'/g, '"');
    });
    Handlebars.registerHelper('console', (data: any) => {
        console.log(data);
    });

    Handlebars.registerHelper('LessThan', function (options) {
        return '<';
    });

    const javaTypeMap: any = {
        string: 'string',
        number: 'long',
        boolean: 'bool',
        any: 'object',
    };
    Handlebars.registerHelper('convertGenericType', (item: any) => {
        return javaTypeMap[item] || item;
    });

    Handlebars.registerHelper('reverse', (data: any) => {
        let paramStr = '';

        let myArray = SortParams(data);

        for (var i = 0; i < myArray.length; i++) {
            paramStr += GetParamString(myArray[i]);

            if (i + 1 < myArray.length) {
                paramStr += ',';
            }
        }
        return paramStr;
    });

    /**
     * 将参数列表进行排序，有默认值的排到最后
     * @param data 参数
     * @returns
     */
    function SortParams(data: any) {
        let myArray = new Array();

        let ss = '';
        for (var i = 0; i < data.length; i++) {
            if (data[i].default != null || data[i].isRequired == false) {
                myArray.push(data[i]);
            } else {
                myArray.unshift(data[i]);
            }
        }
        return myArray;
    }

    /**
     * 根据参数信息，生成参数的字符串
     * @param obj 每个参数
     * @returns
     */
    function GetParamString(obj: any) {
        let param = '';

        param += javaTypeMap[obj.type] + ' ';

        if (obj.name === 'namespace') {
            param += 'nameSpace';
        } else {
            param += obj.name;
        }

        if (obj.default != null) {
            if (obj.type === 'string') {
                param += '=' + obj.default.replace("'", '"').replace("'", '"');
            } else if (obj.type === 'boolean') {
                param += '=' + obj.default;
            } else {
                param += '=' + obj.default;
            }
        } else {
            if (obj.isRequired == false) {
                if (obj.type === 'string') {
                    param += '=null';
                } else if (obj.type === 'number') {
                    param += '=0';
                }
            }
        }

        return param;
    }

    return templates;
};
