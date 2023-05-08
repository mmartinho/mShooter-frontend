import { Pce } from './pce.interface';

export interface PcePaginated {
    model: string;
    rows: Pce[];
    total: number;
}