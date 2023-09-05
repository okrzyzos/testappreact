import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cycle from './Cycle';

describe('Cycle component', () => {
  it('should render the initial count as 0', () => {
    const { getByText } = render(<Cycle />);
    const countElement = getByText('Count: 0');
    expect(countElement).toBeInTheDocument();
  });

  it('should increment the count when the "Click Me!" button is clicked', () => {
    const { getByText } = render(<Cycle />);
    const buttonElement = getByText('Click Me!');
    const countElement = getByText('Count: 0');
    fireEvent.click(buttonElement);
    expect(countElement.textContent).toBe('Count: 1');
  });

  it('should decrement the count when the "deremente" button is clicked', () => {
    const { getByText } = render(<Cycle />);
    const buttonElement = getByText('deremente');
    const countElement = getByText('Count: 0');
    fireEvent.click(buttonElement);
    expect(countElement.textContent).toBe('Count: -1');
  });
});
