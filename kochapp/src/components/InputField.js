import React from "react"
import PropTypes from 'prop-types'

const displayError = (error, classNameError) =>
    error && <div className={classNameError ||'error'}>{error}</div>
const borderColor = (error) => error && 'red'

function InputField(props) {

    const {errors, bindField} = props.validation

    return (
        <>
            <input
                type={props.type || "text"}
                name={props.name}
                placeholder={props.placeholder}
                {...bindField(props.name)}
                className={props.className || 'input'}
                style={{borderColor: borderColor(errors[props.name])}}
            />
            {displayError(errors[props.name], props.classNameError)}
        </>
    )
}

InputField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    validation: PropTypes.shape({
        values: PropTypes.object,
        errors: PropTypes.object.isRequired,
        bindField: PropTypes.func.isRequired,
        isValid: PropTypes.func
    }),
    className: PropTypes.string,
    classNameError: PropTypes.string
}

export default InputField