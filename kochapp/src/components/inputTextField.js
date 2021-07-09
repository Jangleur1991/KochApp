import React from "react"
import PropTypes from 'prop-types'

const displayError = (error) => error && <div className='error'>{error}</div>
const borderColor = (error) => error && 'red'

function InputTextField(props) {

    const {errors, bindField} = props.validation

    return (
        <>
            <input
                type="text"
                name={props.name}
                placeholder={props.placeholder}
                {...bindField(props.name)}
                className={props.className ? props.className : 'input'}
                style={{borderColor: borderColor(errors[props.name])}}
            />
            {displayError(errors[props.name])}
        </>
    )
}

InputTextField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    validation: PropTypes.shape({
        values: PropTypes.object,
        errors: PropTypes.object.isRequired,
        bindField: PropTypes.func.isRequired,
        isValid: PropTypes.func
    }).isRequired,
    className: PropTypes.string
}

export default InputTextField