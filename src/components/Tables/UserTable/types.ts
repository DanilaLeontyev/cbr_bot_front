import { TableState } from '../types';

export interface User {
  fio: string;
  birthYear: Date;
  position: string;
  role: string;
  gender: 'M' | 'Ж';
}

export type Table = TableState<User>;
