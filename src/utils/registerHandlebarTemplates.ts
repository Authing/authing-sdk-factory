import Handlebars from 'handlebars/runtime';

import { HttpClient } from '../HttpClient';
import templateauthImports from '../templates/typescript/authImports.hbs';
import templateauthMethods from '../templates/typescript/authMethods.hbs';
import templateClient from '../templates/typescript/client.hbs';
import angularGetHeaders from '../templates/typescript/core/angular/getHeaders.hbs';
import angularGetRequestBody from '../templates/typescript/core/angular/getRequestBody.hbs';
import angularGetResponseBody from '../templates/typescript/core/angular/getResponseBody.hbs';
import angularGetResponseHeader from '../templates/typescript/core/angular/getResponseHeader.hbs';
import angularRequest from '../templates/typescript/core/angular/request.hbs';
import angularSendRequest from '../templates/typescript/core/angular/sendRequest.hbs';
import templateCoreApiError from '../templates/typescript/core/ApiError.hbs';
import templateCoreApiRequestOptions from '../templates/typescript/core/ApiRequestOptions.hbs';
import templateCoreApiResult from '../templates/typescript/core/ApiResult.hbs';
import axiosGetHeaders from '../templates/typescript/core/axios/getHeaders.hbs';
import axiosGetRequestBody from '../templates/typescript/core/axios/getRequestBody.hbs';
import axiosGetResponseBody from '../templates/typescript/core/axios/getResponseBody.hbs';
import axiosGetResponseHeader from '../templates/typescript/core/axios/getResponseHeader.hbs';
import axiosRequest from '../templates/typescript/core/axios/request.hbs';
import axiosSendRequest from '../templates/typescript/core/axios/sendRequest.hbs';
import templateCoreBaseHttpRequest from '../templates/typescript/core/BaseHttpRequest.hbs';
import templateCancelablePromise from '../templates/typescript/core/CancelablePromise.hbs';
import fetchGetHeaders from '../templates/typescript/core/fetch/getHeaders.hbs';
import fetchGetRequestBody from '../templates/typescript/core/fetch/getRequestBody.hbs';
import fetchGetResponseBody from '../templates/typescript/core/fetch/getResponseBody.hbs';
import fetchGetResponseHeader from '../templates/typescript/core/fetch/getResponseHeader.hbs';
import fetchRequest from '../templates/typescript/core/fetch/request.hbs';
import fetchSendRequest from '../templates/typescript/core/fetch/sendRequest.hbs';
import functionBase64 from '../templates/typescript/core/functions/base64.hbs';
import functionCatchErrorCodes from '../templates/typescript/core/functions/catchErrorCodes.hbs';
import functionGetFormData from '../templates/typescript/core/functions/getFormData.hbs';
import functionGetQueryString from '../templates/typescript/core/functions/getQueryString.hbs';
import functionGetUrl from '../templates/typescript/core/functions/getUrl.hbs';
import functionIsBlob from '../templates/typescript/core/functions/isBlob.hbs';
import functionIsDefined from '../templates/typescript/core/functions/isDefined.hbs';
import functionIsFormData from '../templates/typescript/core/functions/isFormData.hbs';
import functionIsString from '../templates/typescript/core/functions/isString.hbs';
import functionIsStringWithValue from '../templates/typescript/core/functions/isStringWithValue.hbs';
import functionIsSuccess from '../templates/typescript/core/functions/isSuccess.hbs';
import functionResolve from '../templates/typescript/core/functions/resolve.hbs';
import templateCoreHttpRequest from '../templates/typescript/core/HttpRequest.hbs';
import nodeGetHeaders from '../templates/typescript/core/node/getHeaders.hbs';
import nodeGetRequestBody from '../templates/typescript/core/node/getRequestBody.hbs';
import nodeGetResponseBody from '../templates/typescript/core/node/getResponseBody.hbs';
import nodeGetResponseHeader from '../templates/typescript/core/node/getResponseHeader.hbs';
import nodeRequest from '../templates/typescript/core/node/request.hbs';
import nodeSendRequest from '../templates/typescript/core/node/sendRequest.hbs';
import templateCoreSettings from '../templates/typescript/core/OpenAPI.hbs';
import templateCoreRequest from '../templates/typescript/core/request.hbs';
import xhrGetHeaders from '../templates/typescript/core/xhr/getHeaders.hbs';
import xhrGetRequestBody from '../templates/typescript/core/xhr/getRequestBody.hbs';
import xhrGetResponseBody from '../templates/typescript/core/xhr/getResponseBody.hbs';
import xhrGetResponseHeader from '../templates/typescript/core/xhr/getResponseHeader.hbs';
import xhrRequest from '../templates/typescript/core/xhr/request.hbs';
import xhrSendRequest from '../templates/typescript/core/xhr/sendRequest.hbs';
import templateExportModel from '../templates/typescript/exportModel.hbs';
import templateExportSchema from '../templates/typescript/exportSchema.hbs';
import templateExportService from '../templates/typescript/exportService.hbs';
import templateIndex from '../templates/typescript/index.hbs';
import partialBase from '../templates/typescript/partials/base.hbs';
import partialExportComposition from '../templates/typescript/partials/exportComposition.hbs';
import partialExportEnum from '../templates/typescript/partials/exportEnum.hbs';
import partialExportInterface from '../templates/typescript/partials/exportInterface.hbs';
import partialExportType from '../templates/typescript/partials/exportType.hbs';
import partialHeader from '../templates/typescript/partials/header.hbs';
import partialIsNullable from '../templates/typescript/partials/isNullable.hbs';
import partialIsReadOnly from '../templates/typescript/partials/isReadOnly.hbs';
import partialIsRequired from '../templates/typescript/partials/isRequired.hbs';
import partialParameters from '../templates/typescript/partials/parameters.hbs';
import partialParametersGet from '../templates/typescript/partials/parametersGet.hbs';
import partialParametersPost from '../templates/typescript/partials/parametersPost.hbs';
import partialResult from '../templates/typescript/partials/result.hbs';
import partialSchema from '../templates/typescript/partials/schema.hbs';
import partialSchemaArray from '../templates/typescript/partials/schemaArray.hbs';
import partialSchemaComposition from '../templates/typescript/partials/schemaComposition.hbs';
import partialSchemaDictionary from '../templates/typescript/partials/schemaDictionary.hbs';
import partialSchemaEnum from '../templates/typescript/partials/schemaEnum.hbs';
import partialSchemaGeneric from '../templates/typescript/partials/schemaGeneric.hbs';
import partialSchemaInterface from '../templates/typescript/partials/schemaInterface.hbs';
import partialType from '../templates/typescript/partials/type.hbs';
import partialTypeArray from '../templates/typescript/partials/typeArray.hbs';
import partialTypeDictionary from '../templates/typescript/partials/typeDictionary.hbs';
import partialTypeEnum from '../templates/typescript/partials/typeEnum.hbs';
import partialTypeGeneric from '../templates/typescript/partials/typeGeneric.hbs';
import partialTypeInterface from '../templates/typescript/partials/typeInterface.hbs';
import partialTypeIntersection from '../templates/typescript/partials/typeIntersection.hbs';
import partialTypeReference from '../templates/typescript/partials/typeReference.hbs';
import partialTypeUnion from '../templates/typescript/partials/typeUnion.hbs';
import { registerHandlebarHelpers } from './registerHandlebarHelpers';

export interface Templates {
    index: Handlebars.TemplateDelegate;
    client: Handlebars.TemplateDelegate;
    exports: {
        model: Handlebars.TemplateDelegate;
        schema: Handlebars.TemplateDelegate;
        service: Handlebars.TemplateDelegate;
        authMethods?: Handlebars.TemplateDelegate;
        authImports?: Handlebars.TemplateDelegate;
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
export const registerHandlebarTemplates = (root: {
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
            authImports: Handlebars.template(templateauthImports),
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
    Handlebars.registerHelper('convertSingleQuotesToDoubleQuotes', (str: string) => {
        return str.replace(/\'/g, '"');
    });
    Handlebars.registerHelper('replaceSingleQuotesToEmptyString', (str: string) => {
        return str.replace(/\'/g, '');
    });
    Handlebars.registerHelper('console', (data: any) => {
        console.log(data);
    });

    return templates;
};
