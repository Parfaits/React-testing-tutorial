// import testing libraries and dependencies
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// import components to test
import Text from '../text';
import Paragraph from '../paragraph';

// test('test name', () => {
    // Arrange - use render() to render elements into the DOM
    // Act - use fireEvent() to simulate user actions
    // Assert - use expect() to assert logic
// })

// check if element renders properly
test('should render without crashing', () => {
    render(<Text />);
    render(<Paragraph />);
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