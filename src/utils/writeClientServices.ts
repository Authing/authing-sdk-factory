import * as path from 'path';

import type { Service } from '../client/interfaces/Service';
import type { HttpClient } from '../HttpClient';
import type { Indent } from '../Indent';
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
    lang?: 'ts' | 'java'
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
    }

    const templateResult = templates.exports.service({
        ...service,
        httpClient,
        useUnionTypes,
        useOptions,
        postfix,
        exportClient: isDefined(clientName),
    });
    await writeFile(file, formatIndentation(formatCode(templateResult), indent));
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
