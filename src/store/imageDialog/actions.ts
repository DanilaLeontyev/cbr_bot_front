import { OPEN_DIALOG, ImageDialogActions } from './types';

export function openDialog(isOpen: boolean): ImageDialogActions {
  return {
    type: OPEN_DIALOG,
    payload: isOpen,
  };
}
