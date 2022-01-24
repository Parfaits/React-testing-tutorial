import React, {useState} from 'react';
import './button.css';

const STATUS = {
    HOVERED: 'hovered',
    NOT_HOVERED: 'not hovered'
};

function CustomButton(props) {
    const [status, setStatus] = useState(STATUS.NOT_HOVERED);

    const onMouseLeave = () => {
        setStatus(STATUS.NOT_HOVERED);
        // setStatus(props.text);
    }

    const onMouseEnter = () => {
        setStatus(STATUS.HOVERED);
    }

    return (
        <div role='button' className="custom-button" onClick={() => {props.onClick()}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {status === STATUS.HOVERED ? STATUS.HOVERED : props.text}
        </div>
    );
}

export default CustomButton;