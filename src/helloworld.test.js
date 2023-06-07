import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HelloWorld from './helloworld';
import '@testing-library/jest-dom/extend-expect';


test('displays "Hello, World!" after clicking the button', () => {
  render(<HelloWorld />);
  const button = screen.getByText('Click Me');

  fireEvent.click(button);

  const message = screen.getByText('Hello, World!');
  expect(message).toBeInTheDocument();
});
