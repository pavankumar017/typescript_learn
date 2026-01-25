let person = {
    firstname : 'Pavan',
    secondname :"kumar",

    fullname : function(){
        console.log(this.firstname+this.secondname)
    }
}

console.log(person['firstname'])

//iterate through it 

for (let key in person){
    
    console.log(key ,person[key])
}


//calling functiion inside object 
console.log(person.fullname())