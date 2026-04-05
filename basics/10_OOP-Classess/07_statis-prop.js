class User {
    constructor(username) {
        this.username = username
        this.id = createId()
    }

    static createId(){
        return `your id is: ${Math.round(Math.random() * 10000)}`
    };
}

const garud = new User('garud101')
console.log(garud.createId());
