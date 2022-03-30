import {useState} from "react"

export function useFormValidation({validations, initialValues}) {

    _checkParameter(validations, initialValues)

    const [values, setValues] = useState(initialValues || {})
    const [errors, setErrors] = useState({})

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
                    [name]: _validateField(name, value)
                }))
            }
        }
    }

    function isValid() {
        return !Object.keys(validations).some(name => Boolean(_validateField(name, values[name])))
    }

    function _validateField(name, value) {
        const rules = validations[name]
        if (rules) {
            const {required, pattern, validateFunc} = rules
            return [
                required && _checkRequired({required, value}),
                pattern && _checkPattern(pattern, value),
                validateFunc && _checkValidateFunc(validateFunc, value)
            ].find(m => m) || ''
        }
    }

    return {
        values,
        errors,
        bindField,
        isValid
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

//TODO: Refactoring. '' benoetigt?
function _checkRequired({required = 'Eingabe ist erforderlich', value = ''}) {
    return _isNullUndefinedOrWhitspace(value)
        ? required
        : ''
}

function _isNullUndefinedOrWhitspace(value) {
    return ['', null, undefined].includes(value)
}

//TODO: Refactoring. Was ist wenn pattern kein value enthaelt?
function _checkPattern(pattern, value) {
    if (!new RegExp(pattern.value).exec(value))
        return pattern.message || 'Eingabe ist ungültig!'
}

function _checkValidateFunc(validateFunc, value) {
    if (typeof validateFunc === 'function' && validateFunc(value))
        return validateFunc(value)
}