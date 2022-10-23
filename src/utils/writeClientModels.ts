import { resolve } from 'path';

import type { Model } from '../client/interfaces/Model';
import type { HttpClient } from '../HttpClient';
import type { Indent } from '../Indent';
import { writeFile } from './fileSystem';
import { formatCode as f } from './formatCode';
import { formatIndentation as i } from './formatIndentation';
import type { Templates } from './registerHandlebarTemplates';

/**
 * Generate Models using the Handlebar template and write to disk.
 * @param models Array of Models to write
 * @param templates The loaded handlebar templates
 * @param outputPath Directory to write the generated files to
 * @param httpClient The selected httpClient (fetch, xhr, node or axios)
 * @param useUnionTypes Use union types instead of enums
 * @param indent Indentation options (4, 2 or tab)
 */
export const writeClientModels = async (
    models: Model[],
    templates: Templates,
    outputPath: string,
    httpClient: HttpClient,
    useUnionTypes: boolean,
    indent: Indent,
    lang: string
): Promise<void> => {
    for (const model of models) {
        if (lang === 'ts' && model.name.startsWith('/')) {
            continue;
        }
        let file;
        if (lang === 'ts') {
            file = resolve(outputPath, `${model.name}.ts`);
        } else if (lang === 'java') {
            file = resolve(outputPath, `${model.name}.java`);
        } else if (lang === 'csharp') {
            file = resolve(outputPath, `${model.name}.cs`);
        } else if (lang === 'go') {
            file = resolve(outputPath, `${model.name}.go`);
        } else if (lang === 'php') {
            file = resolve(outputPath, `${model.name}.php`);
        } else if (lang === 'web') {
            file = resolve(outputPath, `${model.name}.ts`);
        } else {
            throw new Error('unsupported lang');
        }
        const templateResult = templates.exports.model({
            ...model,
            httpClient,
            useUnionTypes,
        });
        await writeFile(file, i(f(templateResult), indent));
    }
};
