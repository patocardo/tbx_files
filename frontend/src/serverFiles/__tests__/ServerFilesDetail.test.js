import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LoadingSpinner from '../../shared/LoadingSpinner';
import { fetchServerFileDetail } from '../serverFiles.actions';
import ServerFilesDetail from '../ServerFilesDetail';

const mockStore = configureStore([]);

describe('ServerFilesDetail', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      serverFiles: {
        fileDetail: null,
        loading: false,
        error: null,
      },
    });

    // Mock the fetchServerFileDetail action
    jest.spyOn(require('../serverFiles.actions'), 'fetchServerFileDetail').mockImplementation(() => ({
      type: 'FETCH_SERVER_FILE_DETAIL',
    }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('displays <LoadingSpinner /> when loading is true', () => {
    store.getState().serverFiles.loading = true;

    render(
      <Provider store={store}>
        <ServerFilesDetail />
      </Provider>,
    );

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('displays "Error" when error is not null', () => {
    const errorMessage = 'Something went wrong';
    store.getState().serverFiles.error = new Error(errorMessage);

    render(
      <Provider store={store}>
        <ServerFilesDetail />
      </Provider>,
    );

    expect(screen.getByRole('alert').textContent).toMatch(new RegExp(errorMessage));
  });

  it('displays fileDetail when it has a value', () => {
    const fileDetail = {
      file: 'test1.csv',
      lines: [
        { text: 'line 1', number: 1, hex: '0x01' },
        { text: 'line 2', number: 2, hex: '0x02' },
        { text: 'line 3', number: 3, hex: '0x03' }
      ]
    };
    store.getState().serverFiles.fileDetail = fileDetail;

    render(
      <Provider store={store}>
        <ServerFilesDetail />
      </Provider>,
    );
    const { lines } = fileDetail;
 
    expect(document.body.textContent).toContain('test1.csv Detail');
  
    for (let i = 0; i < lines.length; i++) {
      const { text, number, hex } = lines[i];
  
      expect(document.body.textContent).toContain(text);
      expect(document.body.textContent).toContain(number.toString());
      expect(document.body.textContent).toContain(hex);
    }
  });
});
