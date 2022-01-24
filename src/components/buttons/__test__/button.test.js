import { render, screen } from '@testing-library/react';
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
    const allbuttons = screen.getByRole('button');
    expect(allbuttons).not.toBeDisabled();
});