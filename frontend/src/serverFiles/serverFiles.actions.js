import { getServerFilesList, getServerFileDetail } from './serverFiles.api';

export const FETCH_SERVER_FILES_REQUEST = 'FETCH_SERVER_FILES_REQUEST';
export const FETCH_SERVER_FILES_SUCCESS = 'FETCH_SERVER_FILES_SUCCESS';
export const FETCH_SERVER_FILES_FAILURE = 'FETCH_SERVER_FILES_FAILURE';

export const FETCH_SERVER_FILE_DETAIL_REQUEST = 'FETCH_SERVER_FILE_DETAIL_REQUEST';
export const FETCH_SERVER_FILE_DETAIL_SUCCESS = 'FETCH_SERVER_FILE_DETAIL_SUCCESS';
export const FETCH_SERVER_FILE_DETAIL_FAILURE = 'FETCH_SERVER_FILE_DETAIL_FAILURE';

export const fetchServerFilesRequest = () => ({
  type: FETCH_SERVER_FILES_REQUEST,
});

export const fetchServerFilesSuccess = (files) => ({
  type: FETCH_SERVER_FILES_SUCCESS,
  payload: files,
});

export const fetchServerFilesFailure = (error) => ({
  type: FETCH_SERVER_FILES_FAILURE,
  payload: error,
});

export const fetchServerFileDetailRequest = () => ({
  type: FETCH_SERVER_FILE_DETAIL_REQUEST,
});

export const fetchServerFileDetailSuccess = (fileDetail) => ({
  type: FETCH_SERVER_FILE_DETAIL_SUCCESS,
  payload: fileDetail,
});

export const fetchServerFileDetailFailure = (error) => ({
  type: FETCH_SERVER_FILE_DETAIL_FAILURE,
  payload: error,
});

export const fetchServerFiles = () => async (dispatch) => {
  dispatch(fetchServerFilesRequest());
  try {
    const files = await getServerFilesList();
    dispatch(fetchServerFilesSuccess(files));
  } catch (error) {
    dispatch(fetchServerFilesFailure(error));
  }
};

export const fetchServerFileDetail = (filename) => async (dispatch) => {
  console.log('actions', filename);
  dispatch(fetchServerFileDetailRequest());
  try {
    const fileDetail = await getServerFileDetail(filename);
    dispatch(fetchServerFileDetailSuccess(fileDetail));
  } catch (error) {
    dispatch(fetchServerFileDetailFailure(error));
  }
};
