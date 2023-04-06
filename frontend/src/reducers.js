import { combineReducers } from 'redux';
import serverFilesReducer from './serverFiles/serverFiles.reducer';

const rootReducer = combineReducers({
  serverFiles: serverFilesReducer
});

export default rootReducer;