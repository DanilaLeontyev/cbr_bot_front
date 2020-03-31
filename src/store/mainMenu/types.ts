export interface MainMenuState {
  isOpen: boolean;
}

export const OPEN_MENU = 'OPEN_MENU';

interface OpenMenuAction {
  type: typeof OPEN_MENU;
  payload: boolean;
}

export type MainMenuActions = OpenMenuAction;
