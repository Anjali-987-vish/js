class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Anjali`
    }

    set password(value){
        this._password = value
    }
}

const Anjali = new User("a@Anjali.ai", "abc")
console.log(Anjali.email);

