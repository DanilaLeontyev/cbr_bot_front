export interface ImageDialogState {
  isOpen: boolean;
}

export const OPEN_DIALOG = 'OPEN_DIALOG';

interface OpenDialogAction {
  type: typeof OPEN_DIALOG;
  payload: boolean;
}

export type ImageDialogActions = OpenDialogAction;
