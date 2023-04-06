import {
  FETCH_SERVER_FILES_REQUEST,
  FETCH_SERVER_FILES_SUCCESS,
  FETCH_SERVER_FILES_FAILURE,
  FETCH_SERVER_FILE_DETAIL_REQUEST,
  FETCH_SERVER_FILE_DETAIL_SUCCESS,
  FETCH_SERVER_FILE_DETAIL_FAILURE,
} from './serverFiles.actions';

const initialState = {
  files: [],
  fileDetail: null,
  loading: false,
  error: null,
};

const serverFilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVER_FILES_REQUEST:
    case FETCH_SERVER_FILE_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SERVER_FILES_SUCCESS:
      return {
        ...state,
        files: action.payload,
        loading: false,
      };
    case FETCH_SERVER_FILE_DETAIL_SUCCESS:
      return {
        ...state,
        fileDetail: action.payload,
        loading: false,
      };
    case FETCH_SERVER_FILES_FAILURE:
    case FETCH_SERVER_FILE_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default serverFilesReducer;
