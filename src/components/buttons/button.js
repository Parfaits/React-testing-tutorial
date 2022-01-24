function Button(props) {
    return (
        <button onClick={() => {
            props.onClick();
        }}>
            click
        </button>
    );
}

export default Button;