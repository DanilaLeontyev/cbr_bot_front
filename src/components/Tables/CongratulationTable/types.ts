import { TableState } from '../types';

export interface Congratulation {
  congratulation: string;
}

export type Table = TableState<Congratulation>;
