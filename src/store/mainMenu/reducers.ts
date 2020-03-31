import {
  MainMenuActions,
  MainMenuState,
  OPEN_MENU,
} from './types';

const initialState: MainMenuState = {
  isOpen: false,
};

export function mainMenuReducer(
  state: MainMenuState = initialState,
  action: MainMenuActions,
): MainMenuState {
  switch (action.type) {
    case OPEN_MENU:
      return {
        isOpen: action.payload,
      };
    default:
      return state;
  }
}
