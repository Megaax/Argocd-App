import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TODO LIST', () => {
  render(<App />);
  const todoListElement = screen.getByText(/TODO LIST/i);
  expect(todoListElement).toBeInTheDocument();
});
