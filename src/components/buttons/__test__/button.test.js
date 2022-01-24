import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactDOM from 'react-dom';

import Button from '../button';
import CustomButton from '../customButton';

test('should render without crashing', () => {
    render(<Button />);
    render(<CustomButton text='hit me'/>);
});

test('should expect button to be active', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
});

test('should fire click event', () => {
    const onClick = jest.fn(); // mock function
    render(<Button onClick={onClick}/>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClick).toBeCalled();
});