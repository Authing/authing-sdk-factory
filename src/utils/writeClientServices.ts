import { execSync } from 'child_process';
import * as path from 'path';

import type { Service } from '../client/interfaces/Service';
import type { HttpClient } from '../HttpClient';
import type { Indent } from '../Indent';
import { camelToSnakeCase } from '.';
import { writeFile } from './fileSystem';
import { formatCode } from './formatCode';
import { formatIndentation } from './formatIndentation';
import { isDefined } from './isDefined';
import type { Templates } from './registerHandlebarTemplates';
import { removeDuplicates } from './unique';

/**
 * Generate Services using the Handlebar template and write to disk.
 * @param services Array of Services to write
 * @param templates The loaded handlebar templates
 * @param outputPath Directory to write the generated files to
 * @param httpClient The selected httpClient (fetch, xhr, node or axios)
 * @param useUnionTypes Use union types instead of enums
 * @param useOptions Use options or arguments functions
 * @param indent Indentation options (4, 2 or tab)
 * @param postfix Service name postfix
 * @param clientName Custom client class name
 */
export const writeManagementClient = async (params: {
    services: Service[];
    templates: Templates;
    outputPath: string;
    httpClient: HttpClient;
    useUnionTypes: boolean;
    useOptions: boolean;
    indent: Indent;
    postfix: string;
    clientName?: string;
    lang?: string;
    isAuthClient?: boolean;
}): Promise<void> => {
    const {
        services,
        templates,
        outputPath,
        httpClient,
        useUnionTypes,
        useOptions,
        indent,
        postfix,
        clientName,
        lang,
        isAuthClient = false,
    } = params;
    const service = {
        name: isAuthClient ? 'AuthenticationClient' : 'ManagementClient',
        operations: services.map(s => s.operations).flat(),
        imports: removeDuplicates(services.map(s => s.imports).flat()),
    };
    let file = '';
    if (lang === 'ts') {
        file = path.resolve(outputPath, `ManagementClient.ts`);
    } else if (lang === 'java') {
        file = path.resolve(outputPath, `ManagementClient.java`);
    } else if (lang === 'python') {
        file = path.resolve(outputPath, `ManagementClient.py`);
    } else if (lang === 'csharp') {
        file = path.resolve(outputPath, `ManagementClient.cs`);
    } else if (lang === 'php') {
        file = path.resolve(outputPath, `ManagementClient.php`);
    } else if (lang === 'go') {
        file = path.resolve(outputPath, `management_client.go`);
    }

    if (lang === 'python') {
        service.operations = service.operations.map(op => {
            op.name = camelToSnakeCase(op.name);
            return op;
        });
    }

    if (isAuthClient) {
        if (lang === 'ts') {
            const authMethodsTemplateResult = templates.exports.authMethods!({
                ...service,
                httpClient,
                useUnionTypes,
                useOptions,
                postfix,
                exportClient: isDefined(clientName),
            });
            const authImportsTemplateResult = templates.exports.authImports!({
                ...service,
                httpClient,
                useUnionTypes,
                useOptions,
                postfix,
                exportClient: isDefined(clientName),
            });
            await writeFile(
                path.resolve(outputPath, `AuthMethods.ts`),
                formatIndentation(formatCode(authMethodsTemplateResult), indent)
            );
            await writeFile(
                path.resolve(outputPath, `AuthImports.ts`),
                formatIndentation(formatCode(authImportsTemplateResult), indent)
            );
        } else if (lang === 'web') {
            const authMethodsTemplateResult = templates.exports.authMethods!({
                ...service,
                httpClient,
                useUnionTypes,
                useOptions,
                postfix,
                exportClient: isDefined(clientName),
            });
            const authImportsTemplateResult = templates.exports.authImports!({
                ...service,
                httpClient,
                useUnionTypes,
                useOptions,
                postfix,
                exportClient: isDefined(clientName),
            });
            await writeFile(
                path.resolve(outputPath, `AuthMethods.ts`),
                formatIndentation(formatCode(authMethodsTemplateResult), indent)
            );
            await writeFile(
                path.resolve(outputPath, `AuthImports.ts`),
                formatIndentation(formatCode(authImportsTemplateResult), indent)
            );
        } else if (lang === 'python') {
            const authImportsTemplateResult = templates.exports.authMethods!({
                ...service,
                httpClient,
                useUnionTypes,
                useOptions,
                postfix,
                exportClient: isDefined(clientName),
            });
            await writeFile(path.resolve(outputPath, `AuthMethods.py`), authImportsTemplateResult);
        } else if (lang === 'go') {
            const authImportsTemplateResult = templates.exports.authMethods!({
                ...service,
                httpClient,
                useUnionTypes,
                useOptions,
                postfix,
                exportClient: isDefined(clientName),
            });
            await writeFile(path.resolve(outputPath, `AuthMethods.go`), authImportsTemplateResult);
        } else if (lang === 'java') {
            const authMethodsTemplateResult = templates.exports.authMethods!({
                ...service,
                httpClient,
                useUnionTypes,
                useOptions,
                postfix,
                exportClient: isDefined(clientName),
            });
            await writeFile(
                path.resolve(outputPath, `AuthMethods.java`),
                formatIndentation(formatCode(authMethodsTemplateResult), indent)
            );
        } else if (lang === 'csharp') {
            const authMethodsTemplateResult = templates.exports.authMethods!({
                ...service,
                httpClient,
                useUnionTypes,
                useOptions,
                postfix,
                exportClient: isDefined(clientName),
            });
            await writeFile(
                path.resolve(outputPath, `AuthMethods.cs`),
                formatIndentation(formatCode(authMethodsTemplateResult), indent)
            );
        } else if (lang === 'php') {
            const authMethodsTemplateResult = templates.exports.authMethods!({
                ...service,
                httpClient,
                useUnionTypes,
                useOptions,
                postfix,
                exportClient: isDefined(clientName),
            });
            await writeFile(
                path.resolve(outputPath, `AuthMethods.php`),
                formatIndentation(formatCode(authMethodsTemplateResult), indent)
            );
        }
    } else {
        const templateService = templates.exports.service;
        const templateResult = templateService!({
            ...service,
            httpClient,
            useUnionTypes,
            useOptions,
            postfix,
            exportClient: isDefined(clientName),
        });
        if (lang === 'ts') {
            await writeFile(file, formatIndentation(formatCode(templateResult), indent));
        } else if (lang === 'python') {
            await writeFile(file, templateResult.replace(/\t/g, '    '));
            // execSync('python3 -m black ' + file, { encoding: 'utf-8' });
        } else {
            await writeFile(file, formatIndentation(formatCode(templateResult), indent));
        }
    }

    // for (const service of services) {
    //     const file = resolve(outputPath, `${service.name}${postfix}.ts`);
    //     const templateResult = templates.exports.service({
    //         ...service,
    //         httpClient,
    //         useUnionTypes,
    //         useOptions,
    //         postfix,
    //         exportClient: isDefined(clientName),
    //     });
    //     await writeFile(file, i(f(templateResult), indent));
    // }
};
