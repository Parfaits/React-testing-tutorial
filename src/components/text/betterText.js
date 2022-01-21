import Paragraph from "./paragraph";

function BetterText(props) {
    return (
        <div>
            <Paragraph text={props.text}/>
        </div>
    );
}

export default BetterText;