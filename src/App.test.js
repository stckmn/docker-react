import { render, screen } from '@testing-library/react';
import {act} from 'react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/I was changed on the feature branch/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/I was changed on the feature branch/i);
  expect(linkElement).toBeInTheDocument();
});