console.log("helloworld")

//comments are written like this 
/* multi line 
   comment*/


//declaig variable - no need to explicitly mention the type of 
let a = 2 
var b = 3
console.log(a+b)


// // for loop 
// let k =0 
// for(let k=0;k<=10;k=k+2)
// {
//    console.log(k)
// }


//arrays
var marks = [10,20,30,40]

console.log(marks[0])
console.log(marks.length)


//reduce method to accumalate sum
let sum = marks.reduce((sum,mark)=>sum +mark,0)

console.log(sum)

let filter = marks.filter(num=> num%3==0)
console.log(filter)

//map 
let mapped_Array = marks.map(scpre=>scpre*4)
console.log(mapped_Array) //[ 40, 80, 120, 160 ]

overall_maped =mapped_Array.reduce((sum,mrk)=> sum+mrk,0)

console.log(overall_maped)

let [c, b] = [10,20]