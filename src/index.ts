// string
let first_name:string = "Shivam"

//number 
let age:Number = 21

//boolean 
let isFetching:boolean = true

// array
let arr:number[] =[1,2,3,4]

// array of strings
let arraysofStrings: string[] = ["Masai", "School"]

// Tuple 
let tuple:[string,number,boolean]
tuple = ["hello", 10, true]

// enum 

enum Members {
    User="u",
    SuperUser="su",
    Admin = "a",
    SuperAdmin="sa"
}
let mem = Members.SuperAdmin
// console.log('mem:', mem)

// function 

const products = (x:number,y:number) :number => 
{
    return x*y
}
// console.log(products(10,10))
const divide = (x:number,y:number) :number => 
{
    return x/y
}
// console.log(divide(10,10))

// create a function that takes a name and prints it without returning anything

const print_Name =(user:string):void => 
{
    // console.log(user)
}
print_Name("Shivam")


// create an interface for an object
// it should accept a title string
// it should accept a status boolean
// it should accept an id number

interface item {

    title:string;
    status:boolean;
    id:number;
  }

const item1 : item = {
   title:"FSD",
   status:true,
    id:3
             }


// create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname
// make a interface for it


interface person  {
    first_name:string; last_name?:string ;
     age:number;
     isWorking: boolean
    }
const getName = ({first_name,last_name, 
        age,isWorking}:person): void=> 
      
    {
        if(last_name) {
            // console.log( `${first_name}_${last_name}`)
        }
        else 
        {
        //    console.log(`${first_name}`)
        }
   
    }
   
    let person1: person = 
    {
        first_name: "Shivam",
        last_name:"Sharma",
        age:21,
        isWorking:true,
    }
    getName(person1)

// create a PersonDetails interface
// it should have
// Prefix optional
// phones array of numbers
// addresses array of Addresses
// email optional
// firstname
// lastname
// middlename optional

interface PersonDetails {
    prefix:string;
    phone:number[];
    address:string[];
    email:string;
    first_name:string;
    last_name:string;

}
const user_data : PersonDetails = {
    prefix:"Mr",
    phone:[9,9,9,9,9,8,8,8,8,8],
    address:["Sector 21","Gurgaon"],
    email:"shivam@gmail.com",
    first_name: "Shivam",
    last_name:"Sharma",
}
// console.log(typeof user_data)

// create a function PhoneBook
// it should accept PersonDetails type argument
// it should push into an array containing all persons

let persons :PersonDetails[] =[]

function PhoneBook (user_data:PersonDetails) 
{
     persons.push(user_data)
     return persons

}
// console.log(PhoneBook(user_data))
// persons.push(user_data)
// console.log('persons:', persons)

// Write a function to retrieve the type of the user or admin

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

const dummyAdmin : Admin =
{
    type: 'admin',
    name: "shivam",
    age: 21,
    role: "FSD",
}
const dummyUser : User =
{
    type: 'user',
    name: "shivam",
    age: 21,
    occupation:"DEveloper",
}

function checktype(Obj:(User|Admin)):string {
   
    return(Obj.type)
}
console.log(checktype(dummyUser))

