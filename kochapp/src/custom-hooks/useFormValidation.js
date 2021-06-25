//TODO: Refactoring und erweitern!
export function useFormValidation({validations}) {

    _checkParameter({validations})

    function validateField(name, value) {
        const rules = validations[name]
        if (rules) {
            const {required, pattern, validateFunc} = rules
            return [
                required && _checkRequired(required),
                pattern && _checkPattern(pattern, value),
                validateFunc && _checkValidateFunc(validateFunc, value)
            ].find(m => m)
        }
    }

    return {
        validateField
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

function _checkRequired(required) {
    return (typeof required === 'string')
        ? required
        : 'Eingabe ist erforderlich!'
}

function _checkPattern(pattern, value) {
    if (!new RegExp(pattern.value).exec(value))
        return pattern.message || 'Eingabe ist ungültig!'
}

function _checkValidateFunc(validateFunc, value) {
    if (typeof validateFunc === 'function' && validateFunc(value))
        return validateFunc(value)
}