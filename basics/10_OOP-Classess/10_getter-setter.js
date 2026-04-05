class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    get email() {
        return this._email;
    }

    set email(val) {
        return this._email = val
    }
}

const usr = new User('hrishi', 'ihf3478rh43')
console.log(usr.email); // getter
// usr.email = 'sdfghriu' //setter
