
import { combineReducers, createStore } from 'redux';
import { mainMenuReducer } from './mainMenu/reducers';
import { imageDialogReducer } from './imageDialog/reducers';

const rootReducer = combineReducers({
  mainMenu: mainMenuReducer,
  imageDialog: imageDialogReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
