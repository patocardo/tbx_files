import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import ErrorBoundary from './shared/ErrorBoundary';
import Navbar from './layout/Navbar';
import Home from './layout/Home';
import LoadingSpinner from './shared/LoadingSpinner';
const ServerFilesList = lazy(() => import('./serverFiles/ServerFilesList')) ;
const ServerFilesDetail = lazy(() => import('./serverFiles/ServerFilesDetail')) ;

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <header>
            <Navbar />
          </header>
          <main>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/server-files" element={<ServerFilesList />} />
                <Route path="/server-file/:filename" element={<ServerFilesDetail />} />
              </Routes>
            </Suspense>
          </main>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
