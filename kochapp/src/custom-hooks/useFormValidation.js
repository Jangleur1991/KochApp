//TODO: Refactoring und erweitern!
export function useFormValidation({validations}) {

    _checkParameter({validations})

    function validateField(name, value) {
        const rules = validations[name]

        if (rules && rules.required) {
            return typeof rules.required === 'string'
                ? rules.required
                : 'Field is required!'
        }

        if (rules && rules.pattern) {
            if (!new RegExp(rules.pattern.value).exec(value)) {
                return rules.pattern.message || 'Field value is invalid!'
            }
        }
    }

    return {
        validateField
    }

}

function _checkParameter({validations}) {
    if (!validations) {
        throw new Error('The prop `validations` is required!')
    }

    if (typeof validations !== 'object') {
        throw new Error('The prop `validations` has to be an object!')
    }
}