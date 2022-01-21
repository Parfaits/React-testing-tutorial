import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactDOM from 'react-dom';

import Text from '../text';
import Paragraph from '../paragraph';

// check if element renders properly
test('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Text />, div);
});

// get and check all text that have 'hi' from the element and it's children
test('should render normal text container without crashing', () => {
    render(<Text text='hi'/>);
    // const textScreen = screen.getByRole('dialog');
    const textScreen = screen.getAllByText('hi');
    // expect(textScreen).toHaveTextContent('hi');
});

// check text for Paragraph (child of Text) with 'dialog' role that has 'hello' as text
test('should render paragraph with text', () => {
    render(<Paragraph text='hello'/>);
    const textScreen = screen.getByRole('dialog');
    expect(textScreen).toHaveTextContent('hello');
});