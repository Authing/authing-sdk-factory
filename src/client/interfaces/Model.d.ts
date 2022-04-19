import type { Enum } from './Enum';
import type { Schema } from './Schema';

export interface Model extends Schema {
    name: string;
    name_underscore?: string;
    export: 'reference' | 'generic' | 'enum' | 'array' | 'dictionary' | 'interface' | 'one-of' | 'any-of' | 'all-of';
    type: string;
    type_python?: string;
    base: string;
    template: string | null;
    link: Model | null;
    description: string | null;
    default?: string;
    imports: string[];
    enum: Enum[];
    enums: Model[];
    properties: Model[];
}
