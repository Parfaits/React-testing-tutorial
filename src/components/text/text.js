import Paragraph from "./paragraph";

function Text(props) {
    return (
        <div role='dialog' className="text">
            <Paragraph text={props.text}/>
        </div>
    );
}

export default Text;