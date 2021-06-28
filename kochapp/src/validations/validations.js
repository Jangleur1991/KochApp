export const validations = {
    username: {
        required: 'Bitte geben Sie Ihren Benutzernamen ein.'
    },
    password: {
        required: 'Bitte geben Sie Ihr Passwort ein.',
        pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/gi,
            message: 'Falsches Format!'
        }
    },
    age: {
        required: true,
        validateFunc: (age) => age < 16 ? 'Sie dürfen noch nicht Auto fahren.' : ''
    }
}