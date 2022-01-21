import Paragraph from "./paragraph";

function Text(props) {
    return (
        <div role='dialog' aria-label="text" className="text">
            <Paragraph text={props.text}/>
        </div>
    );
}

export default Text;