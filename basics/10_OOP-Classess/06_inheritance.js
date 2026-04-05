class User {
    constructor(username) {
        this.username = username
    }
}

class updateUser extends User {
    constructor(username, email, password) {
        super(username); // apne aap username le ayga extended class se 
        this.email = email;
        this.password = password;
    }
}

const papu = new updateUser('papu101', 'papui101@zohomail.in', 'wuhfg7834br86')

console.log(papu);
