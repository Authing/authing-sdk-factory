import type { OperationParameter } from './OperationParameter';

export interface OperationParameters {
    imports: string[];
    parametersRaw?: {
        python?: Model[];
    };
    parameters: OperationParameter[];
    parametersPath: OperationParameter[];
    parametersQuery: OperationParameter[];
    parametersForm: OperationParameter[];
    parametersCookie: OperationParameter[];
    parametersHeader: OperationParameter[];
    parametersBody: OperationParameter | null;
    // for java
    parametersDto?: string;
}
