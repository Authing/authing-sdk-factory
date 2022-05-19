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
export const writeManagementClient = async (
    services: Service[],
    templates: Templates,
    outputPath: string,
    httpClient: HttpClient,
    useUnionTypes: boolean,
    useOptions: boolean,
    indent: Indent,
    postfix: string,
    clientName?: string,
    lang?: string
): Promise<void> => {
    const service = {
        name: 'ManagementClient',
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
    }

    if (lang === 'python') {
        service.operations = service.operations.map(op => {
            op.name = camelToSnakeCase(op.name);
            return op;
        });
    }

    const templateResult = templates.exports.service({
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
        execSync('python3 -m black ' + file);
    } else {
        await writeFile(file, formatIndentation(formatCode(templateResult), indent));
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
