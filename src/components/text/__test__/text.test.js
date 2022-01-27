// run with 'npm test' or 'yarn test'
// with coverage 'yarn test --coverage --watchAll'

// import testing libraries and dependencies
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Enzyme, { shallow, enzymeRender, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

// import components to test
import Text from '../text';
import Paragraph from '../paragraph';

Enzyme.configure({ adapter: new Adapter() });

// template of how to test a unit
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

// note: querying by text or byRole is better than querying by any other method like id.
// using byRole logs entire DOM for a list of roles for you if it cannot find what your looking for.
// byRole is the goto query to use. It can look through the childrens to match the text using the name prop
// even though the texts may be split

// check text for Paragraph (child of Text) with 'dialog' role that has 'hello' as text
test('should render paragraph with text', () => {
    render(<Paragraph text='hello'/>);
    // name option allows to specify elements by their 'Accessible Name' https://www.w3.org/TR/accname-1.1/
    // Accessible Names are what the user reads from the screen when the screen renders
    // Accepts regular expressions: /pattern/flag
    // const textScreen = screen.getByRole('dialog', {name: /hello world/i});
    const textScreen = screen.getByRole('dialog');
    expect(textScreen).toHaveTextContent('hello');
});

// get and check all text that have 'hi' from the element and it's children
test('should render normal text container without crashing', () => {
    render(<Text text='hi'/>);
    // const textScreen = screen.getByRole('dialog');
    const textScreen = screen.getAllByText('hi');

    // const snap = shallow(Text text='hi'/>);
    // expect(toJson(snap)).toMatchSnapshot();
});

// enzyme has a bit better syntax but does the same thing as react-test-renderer
// but react-test-renderer is more lightweight and is more focused on testing
// the components rather than the implementation details.

// snapshot testing takes a 'photo' of your component, then later on, you can test again to
// see of that photo changed or not. If it was intentional, then we can update our photo to
// the new one, or if we see that the change was not intended, then that's a bug.

// snapshot testing with enzyme
test('should render correctly with enzyme', () => {
    const snap = shallow(<Text text='john'/>);

    expect(toJson(snap)).toMatchSnapshot();
});
