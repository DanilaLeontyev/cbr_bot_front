import { Column } from 'material-table';

export interface TableState<T extends object> {
  columns: Column<T>[];
  data: T[];
}
