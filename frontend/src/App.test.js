import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders the navbar', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('renders the home page by default', () => {
    render(<App />);
    expect(screen.getByText('Welcome to the Files App')).toBeInTheDocument();
  });

  test('renders the server files list page when the path is /server-files', () => {
    render(<App />);
    expect(screen.getByText('Server Files List')).toBeInTheDocument();
  });
});
