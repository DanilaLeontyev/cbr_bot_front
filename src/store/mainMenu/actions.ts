import { OPEN_MENU, MainMenuActions } from './types';

export function openMenu(isOpen: boolean): MainMenuActions {
  return {
    type: OPEN_MENU,
    payload: isOpen,
  };
}
