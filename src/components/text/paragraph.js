function Paragraph(props) {
    return (
        <p role="dialog" aria-label="paragraph">
            {props.text}
        </p>
    );
}

export default Paragraph;