//TODO: Refactoring und erweitern!
import {useState} from "react";

export function useFormValidation({validations}) {

    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})

    _checkParameter({validations})

    function validateField(name, value) {
        const rules = validations[name]
        if (rules) {
            const {required, pattern, validateFunc} = rules
            return [
                required && _checkRequired(required, value),
                pattern && _checkPattern(pattern, value),
                validateFunc && _checkValidateFunc(validateFunc, value)
            ].find(m => m) || ''
        }
    }

    function bindfield(name) {
        if (!name)
            throw new Error('The field name parameter is required!')

        if (typeof name !== 'string')
            throw new Error('The field name should be a string')

        return {
            value: values[name] || '',
            onChange: ({target}) => {
                const {value} = target

                setValues(state => ({
                    ...state,
                    [name]: value
                }))

                setErrors(state => ({
                    ...state,
                    [name]: validateField(name, value)
                }))
            }
        }
    }

    return {
        validateField,
        values,
        errors,
        bindfield
    }

}

//Helper Functions
function _checkParameter({validations}) {
    if (!validations) {
        throw new Error('The prop `validations` is required!')
    }

    if (typeof validations !== 'object') {
        throw new Error('The prop `validations` has to be an object!')
    }
}

//TODO: Refactoring
function _checkRequired(required, value) {
    if (!value.trim()) {
        return (typeof required === 'string')
            ? required
            : 'Eingabe ist erforderlich!'
    }
    return ''
}

function _checkPattern(pattern, value) {
    if (!new RegExp(pattern.value).exec(value))
        return pattern.message || 'Eingabe ist ungültig!'
}

function _checkValidateFunc(validateFunc, value) {
    if (typeof validateFunc === 'function' && validateFunc(value))
        return validateFunc(value)
}