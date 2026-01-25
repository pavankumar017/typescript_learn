const Person = require("./class")

class Pet extends Person {


    constructor(firstname , lastname) {
        super(firstname, lastname)
        }

        // fullname(){
        //     return this.firstname + this .lastname
        // }
}

const pet =  new Pet("SAN", "JOSE")
console.log(pet.fullname())