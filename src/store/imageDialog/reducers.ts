import {
  ImageDialogState,
  ImageDialogActions,
  OPEN_DIALOG,
} from './types';

const initialState: ImageDialogState = {
  isOpen: false,
};

export function imageDialogReducer(
  state: ImageDialogState = initialState,
  action: ImageDialogActions,
): ImageDialogState {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        isOpen: action.payload,
      };
    default:
      return state;
  }
}
