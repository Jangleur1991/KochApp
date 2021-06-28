import {useState} from "react"

export function useFormValidation({validations, initialValues}) {

    _checkParameter(validations, initialValues)

    const [values, setValues] = useState(initialValues || {})
    const [errors, setErrors] = useState({})

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

    function bindField(name) {
        _checkBindFieldParameter(name)
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
        bindField
    }
}

function _checkParameter(validations, initialValues) {
    if (!validations)
        throw new Error('The prop `validations` is required!')

    if (typeof validations !== 'object')
        throw new Error('The prop `validations` has to be an object!')

    if (initialValues && typeof initialValues !== 'object')
        throw new Error('The prop `initialValues` should be an object')
}

function _checkBindFieldParameter(name) {
    if (!name)
        throw new Error('The field name parameter is required!')

    if (typeof name !== 'string')
        throw new Error('The field name should be a string')
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