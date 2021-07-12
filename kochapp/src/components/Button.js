import React from "react"
import PropTypes from "prop-types";

function Button(props) {
    return (
        <>
            <button
                name={props.name}
                className={props.className || 'button'}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.text}
            </button>
        </>
    )
}


Button.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool
}

export default Button

