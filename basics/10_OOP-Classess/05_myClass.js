// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
}

const chai = new User('chai', 'hdusjdh', 'udh7834g')

console.log(chai.encryptPassword());
