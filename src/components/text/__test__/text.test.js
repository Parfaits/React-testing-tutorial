import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactDOM from 'react-dom';

import Text from '../text';

test('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Text />, div);
});

test('should render with correct text', () => {
    const testText = 'hi';
    const textScreen = screen.getByRole('dialog', {hidden: 'true'});
    expect(textScreen).toHaveTextContent({text: testText});
});

