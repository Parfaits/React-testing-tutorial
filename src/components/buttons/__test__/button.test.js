import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer, { act } from 'react-test-renderer';

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

    // wait until the `get` request promise resolves and
    // the component calls setState and re-renders.
    // `waitFor` waits until the callback doesn't throw an error
    // (Promise) retry the function within until it stops throwing or times out
    // await waitFor(() =>
    // // getByRole throws an error if it cannot find an element
    //     screen.getByRole('heading'),
    // )
});

// Snapshot testing with button
test('should change text when mouse hovered', () => {
    // create initial snapshot
    const component = renderer.create(<CustomButton text='click meeee'/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // snapshot when mouse hovers over button; should change text to 'hovered'
    act(() => {
        tree.props.onMouseEnter();
    });
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // snapshot when mouse leaves button; should change text back to original text
    act(() => {
        tree.props.onMouseLeave();
    });
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });