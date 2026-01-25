

module.exports =class Person{

    constructor(firstname , lastname)
    {
        this.firstname = firstname
        this.lastname = lastname
    }
    age = 20
    fullname(){
        return this.firstname +  this.lastname
    }
}

// let person_created = new Person('Andy ' , 'More')

// console.log(person_created.fullname() + " is of " + person_created.age)