// // STEP1.   Make sure to create a repo called "My Javascript Journey" and link this folder with that repository.
// //          You should not have any issues, if you are having issues, go back to the git note or ask your friend 
// //          before asking your lecturer for help.(You cannot forget git commands)
// // STEP2.   Every push to github must be to a branch and a pull request has to be made to merge the branch with main. 
// //          Any pushes to main will result in you having to restart from the beginning(from creating a repo).
// // STEP3.   Follow the order : 1 create repo, 2 run all commands necessary to link these to folders, 
// //          3 create and work on branch, 4 push branch and use a pull request to merge. 5 PULL YOUR CODE TO LOCAL REPO BEFORE CREATING ANOTHER BRANCH
// // STEP4.   You must link this javascript file to an index.html page, taking FOLDER STRUCTURE into consideration.

// //INTO TO JAVASCRIPT EXERCISE

// // A. TASK 1:VARIABLES and OPERATORS
// // 1. Create a variable called “language” and assign it the value “JavaScript”. Then create
// // a variable called “score” and assign it the value “10”.
//  let language = 'Javascript';
//  let score = 10;
// // 2.Create two variables called “length” and “width”. Assign each variable a value of 10 and 5 respectfully. Use
// // the variables to calculate the area of a rectangle with the length and width specified (remember area = length x width).
// let length = 10;
// let width = 5;
// let area = 10*5;
// // Write the following to the console using CONCATENATION and BACKTICKS: 
// // “The area of the rectangle is …” where … is the area you calculated.
// console.log(`The area of the rectangle is ` + ( area));
// console.log(`The area of the rectangle is ${area}`)
// // 3.Create two variables called “num1” and “num2.” Assign each variable a value of 10 and 4 respectfully.
// let num1 = 10;
// let num2 = 4;
// // Calculate and display in the console what the remainder is if num1 is divided by num2.
// console.log(10 % 4);
// console.log(num1 / num2);
// // 4.Using the variables you created in the previous step, output the results
// // of the division in the following format: “num1 / num2 = x remainder y.” HINT: Backticks
// let x = num1 / num2;
// let y = num1 % num2;

// console.log((x) + ' remainder ' + (y));
// let answer = Math.floor(10/4) //floor rounds it to the lowest ceil rounds it to the highest
// console.log(`${num1} / ${num2} = ${answer} remainder${10%4}`);

// // B. Task 2:Data Types
// // 1. Define the following data types with your own contents[ 'integer', 'decimal', 'string', 'array'(minimum: 3 items), 'Object'(minimum: 4 values)]
// let integer4 = 1
// let decimal3 = 4.5 //referred to as a float
// let string2 = 'Alexander'
// let array1 = [ 'Toyota' , 'Honda', 'Golf'  ];

// let oboject = { //can use let,var and const to declare an object
//     name: 'Jeff',
//     ages:21,
//     city: 'Johannesburg',
//     country: 'Southyafrica'
// }
// let {name,ages,city,country} = oboject;// same thing no values added

// // 2. Once you’ve created the variables, display them to the console
//     console.log(integer4)
//     console.log(decimal3)
//     console.log(string2)
//     console.log(array1)
//     console.log(oboject)
// // 3. Use the ‘typeof’ function to check each variable
// console.log(typeof integer4)
// console.log(typeof decimal3)
// console.log(typeof string2)
// console.log(typeof array1)
// console.log(typeof oboject)
// // 4. Create an array with numbers and strings. Comment what data type you expect this tobe. Then use the ‘typeof’ function on this array
// let Stringynum = ['i am', 30, 'years old', 21, 'is the twenty first number']
// console.log(typeof Stringynum)
// // 5. Create a null variable and an undefined variable
// let children = null;
// let age;

// console.log()
// // ***********C. Task 3. functions and contional statements************
// // N.B. READ WITH UNDERSTANDING!!!
// //  1.  Create 3 functions to convert R1000 into dollars, euros and pounds. Take function naming into consideration!

// function rand_to_dollars(r1000){
//     return r1000 / 18,47
// }
// function rand_to_pounds(r1000){
//     return r1000 / 22,64
// }
// function rand_to_euro(r1000){
//     return r1000 / 19,71
// }
// let r1000 = 1000
// let dollars = rand_to_dollars(r1000)
// let pounds = rand_to_pounds(r1000)
// let euro = rand_to_euro(r1000)
// console.log(dollars)
// console.log(pounds)
// console.log(euro)

// //matthews method other methods
// let a = 1000
// //function convertEuros()
// function convertEuros(a, b){
//     let answer = 1000*0.050
//     return answer
//     //console.log(answer);
// }
// convertEuros(a,0.050)  // to call the variable must be outside the block whatever is left will show first 

// function convertPounds(a,b){
//     let answer = a/b
//     return answer 
// }
// convertPounds(a, 22.84)

// function convertDollars(a,b){
//     let answer = a*b
//     return answer 
// }
// convertDollars(a, 0.054)


// //  2.  Create a function that takes a value and calculates the amount entered including VAT (15%), amount entered should be R400.
// let moneyAmount = 400
// let vatAmount = 15
// let vatmoneyAmount =  moneyAmount * vatAmount / 100
// let finalAmount = moneyAmount + vatmoneyAmount

// //matthews method

// function VAT(){
//     let answer = 400 * 115 / 100
//     let answer2 = 400*0.15
//     return answer2 + 400
// }
// //      Then display the message in the console, "The amount after tax is ...".
// console.log(`The amount after tax is ` + finalAmount)
// console.log(`the amount after tax is ${answer2}`);
// //  3.  Declare 3 variables 1stNum, 2ndNum, 3rdNum and assign values of 8, 20 and 14 respectfully. Now write a function that compares “num1” and “num2” and 
// //      displays the larger value.
//     let num1st = 8
//     let num2nd = 20 
//     let num3rd = 14

//     if(num1st>num2nd){
//         console.log( 'num1st is better and bigger')
//     } else{
//         console.log('num2nd is bigger and better')
//     }

// //matthewss method
// display(num1st,num2nd)
// function display(num1st,num2nd){
//     if (num1st>num2nd){
//         console.log(num1st);
//     }else{
//         console.log(num2nd);
//     }
// }
// //  4.  Write a function that determines whether “num1” is odd or even and displays the
// //      result. (Tip: remember the modulus operator %)
//  if (num1st%2==0) {
//     console.log('this is even')    
//  } else {
//     console.log('this is odd')
//  }
//  //matthews method
//  function oddOrEven(){
//     if(num1st%2==0){
//         console.log('even');

//     }else{
//         console.log('odd');

//     }
//  }
//  oddOrEven()

// //  5.  Next, write a JavaScript conditional statement to sort the three numbers(1stNum, 2ndNum, 3rdNum) from largest to smallest.

// if (num1st>num2nd && num1st>num3rd) {
//     if (num2nd>num3rd){
//         console.log(num1st + "," + num2nd + "," + num3rd);
//     }else{
//         console.log(num1st + ","+ num3rd + "," + num2nd);
//     }
// } 
// else if (num2nd>num1st && num2nd>num3rd){
//     if(num1st>num3rd){
//         console.log(num2nd + "," + num1st + "," + num3rd);
//     }
//     else{
//         console.log(num2nd + "," + num3rd + "," + num1st);
//     }
// }
// else  (num3rd>num1st && num3rd>num2nd)
// {
//         if (num1st>num2nd)
//         {
//             console.log(num3rd + ", " + num1st + ", " + num2nd);
//         }
//         else
//         {
//             console.log(num3rd + ", " + num2nd + ", " + num1st);
//         }
// } 

// //matthews method

// console.log(`${num1st},${num2nd},${num3rd}`);

//arrays

let array = ['daanyaal', 'niyaaz', 'joel', 'jodi', 'chad']
//defer hmtl loads first
//array.length displays how long the array is
array.at(-1)
//shows the last name in the list
array[1] = 'daanyaal'
//to change the array 
array.pop()
//to removes the last item 
array.push()
//to add item
array.splice(array.indexOf('jodi'),1)
//to remove specific
splice
array.splice(2,0,'joel', 'unity')
array[2]='6'
//replaces  where do you want to delete it , how many do you want to delete, this is what youre replacing it with
array.slice(0,3)
//makes it into a new array
array.shift()
//to returns the first item by removing it
array.unshift()
//to bring it back
array.reverse()
//to reverse the order of the items arrays
array.join('')
//returns everything as a string without commas takes it out of array
array.join('').split('')
//makes an array at the point that we declare it 
array.join('').split('').reverse()
//to reverse
let string = " diesal "
string.trim()
//removes white spaces on both sides 
trim()
//to trim alles
string.toUpperCase()
//capital letters
array.concat(string)
//can use to bring another array and string 

// document object model manipulation

let clickMe = document.querySelector('[data-clickMe]')
clickMe.addEventListener('click',alert())

function alert(){
    alert('this was pushed')
}

// //objects
// //key and value
// //key  = property (something about an object)
// //objects set to a variable have to use braces{}
// //object literals / declaration
// let car = {
//     name : 'Toyota',
//     type : 'sprint',
//     engineSize : '1.5 litre'
// }

// new keyword
// overwrites
let person = new Object
person.name = 'Matthew'
person.lastName = 'Brown'
person.age = 23
person.favFood = 'anything'
//only use if youre working with others
delete person.favFood

// //object.create

// // let blank = {
// //     name: null,
// //     surname: null,
// //     age: null
// // }

// // let newBlank = Object.create(blank)
// // newBlank.name = 'matthew'

// //delete - use only on objects

// //nested objects

// const desktop = {
//     cpu: 'Ryzen 5',
//     ram: '8 gigs',
//     hard_drive: {
//         first: '1000gigs',
//         second: '500gigs'
//     }
// }
// // desktop.hard_drive.first to access the first object within the object

// //nested objects in arrays

// const myObj = {
//     name: 'John',
//     age: 60,
//     cars: [
//         {
//             name:'Ford',
//             models: ['fiesta','focus','mustang']
//         },
//         {
//             name:'BMW',
//             models:['320','X3','X5']
//         },
//         {
//             name: 'Fiat',
//             models:['500','Panda']
//         }
//     ]
// }

//object method - function inside the object
//function inside of an object is a method
// const person = {
//     firstName: 'Johna',
//     lastName: 'doee',
//     id: 445,
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// };
// //this is a keyword in javascript that tells your function that you want to use this first name this last name (global scoping) (only works within objects)

// //will print info to the page

// const person = {
//     firstName: 'Johna',
//     lastName: 'doee',
//     id: 445,
//     fullName: function(){
//         return (this.firstName + " " + this.lastName)
//         .toUpperCase();
//     }
// };
// document.querySelector('h1').innerText = person.fullName();

// //for in loop
// //have to use object expression where p is used as index with [], square brackets
// // for (let p in person){
// //     console.log(person[p])
// // }

// //nested loop to access information in the cars

// for(i in myObj.cars){
//     console.log(myObj.cars[i].name)
//     for(x in myObj.cars[i].models){
//         console.log(myObj.cars[i].models[x]);
//     }
// }

// //factory function object RETURN an object

// function createPerson(firstName, lastName, age){
//     let myObjeje={
//          firstName: firstName,
//         lastName: lastName,
//         age: age,
       
//     }
//     return myObjeje
//     //still works both ways
//     // return {
//     //     firstName: firstName,
//     //     lastName: lastName,
//     //     age: age,
//     // }
// }
// // function createPerson(){
// //     let myObjeje={
// //          firstName: 'namename',
// //         lastName: 'surname',
// //         age: 21,
       
// //     }
// //     return myObjeje

// //you dont need the [new] keyword

// let person4 =createPerson('danny','idk',32)
// let personActions= {
//     getfullName(){
//         return this.firstName + ''+this.lastName
//     }
// }
// let person3 =createPerson('matthew', 'brown', 23,personActions.getfullName())
// // [this] is a constructer function 


// function carDescription(brand,year,model,colour){
//     this.brand = brand
//     this.year = year;
//     this.model = model;
//     this.colour = colour;
// }

// let car1= new carDescription('porsche','GT3',2013,'white')


//switch statement cont.
//to check multiple values
let mark = 100
let condition = true
switch(condition){
    case 100:
        console.log('This is full marks');
            break
    case(mark>80):
        console.log('this is great');
             break
    case (mark>70):
            console.log('This is good');
            break
            default:
            console.log('This is low ');
}

//while loop
let result = ''
let i = 0
// while (i <= 10){
//     console.log("The number is " + i);
//     i++
// }

//do while loop

do{
    i = i + 1;
    result = result + i
} while (i < 5)

console.log(result);

let laptop = {
    name: 'something',
    battery: '3999'
};

let (name, battery) = laptop