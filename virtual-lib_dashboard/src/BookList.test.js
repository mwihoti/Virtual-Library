import React from 'react';
import { render } from '@testing-library/react';
import BookList from './BookList';

test('renders book list component', () => {
  const { getByText } = render(<BookList />);
  const linkElement = getByText(/Book List/i);
  expect(linkElement).toBeInTheDocument();
});
