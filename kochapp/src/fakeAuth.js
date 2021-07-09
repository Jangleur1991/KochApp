//Temporaere fakeAuth solange noch kein Backend vorhanden ist!

const USERNAME = 'admin'
const PASSWORD = 'admin123!'

export const fakeAuth = {
    isAuthenticated: false,
    authenticate({username, password}, cb) {
        //Check Credentials
        if (checkCredentials({username, password})) {
            this.isAuthenticated = true
            setTimeout(cb, 1000)
        } else {
            alert("Benutzername oder Passwort sind nicht korrekt!")
        }
    },
    logOut(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 1000)
    }
}

const checkCredentials = ({username, password}) => (username === USERNAME && password === PASSWORD)
