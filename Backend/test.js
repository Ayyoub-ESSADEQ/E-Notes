let a = "Hello";

class user{
    #name;
    #lastName;
    constructor(name,lastName){
        this.#name = name;
        this.#lastName = lastName;
    }
    #getName(){
        return this.#name;
    }

    getLastName(){
        return this.#lastName + this.#getName();
    }
}

let b = new user("Ayyoub","ESSADEQ");

console.log(b.getName());
