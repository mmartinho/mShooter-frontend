import { Local } from './local.interface';

export interface LocalPaginated {
    model: string;
    rows: Local[];
    total: number;
}