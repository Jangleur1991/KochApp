export const validations = {
    username: {
        required: 'Bitte geben Sie ihren Benutzernamen ein!'
    },
    password: {
        required: 'Bitte geben Sie ihr Passwort ein!',
        pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/gi,
            message: 'Ihr Passwort entspricht nicht dem erfoderlichen Format!'
        }
    },
    age: {
        required: true,
        validateFunc: (age) => age < 18 ? 'You are not able to get a drive permission' : ''
    }
}