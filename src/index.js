// string
var first_name = "Shivam";
//number 
var age = 21;
//boolean 
var isFetching = true;
// array
var arr = [1, 2, 3, 4];
// array of strings
var arraysofStrings = ["Masai", "School"];
// Tuple 
var tuple;
tuple = ["hello", 10, true];
// enum 
var Members;
(function (Members) {
    Members["User"] = "u";
    Members["SuperUser"] = "su";
    Members["Admin"] = "a";
    Members["SuperAdmin"] = "sa";
})(Members || (Members = {}));
var mem = Members.SuperAdmin;
// console.log('mem:', mem)
// function 
var products = function (x, y) {
    return x * y;
};
// console.log(products(10,10))
var divide = function (x, y) {
    return x / y;
};
// console.log(divide(10,10))
// create a function that takes a name and prints it without returning anything
var print_Name = function (user) {
    // console.log(user)
};
print_Name("Shivam");
var item1 = {
    title: "FSD",
    status: true,
    id: 3
};
var getName = function (_a) {
    var first_name = _a.first_name, last_name = _a.last_name, age = _a.age, isWorking = _a.isWorking;
    if (last_name) {
        // console.log( `${first_name}_${last_name}`)
    }
    else {
        //    console.log(`${first_name}`)
    }
};
var person1 = {
    first_name: "Shivam",
    last_name: "Sharma",
    age: 21,
    isWorking: true
};
getName(person1);
var user_data = {
    prefix: "Mr",
    phone: [9, 9, 9, 9, 9, 8, 8, 8, 8, 8],
    address: ["Sector 21", "Gurgaon"],
    email: "shivam@gmail.com",
    first_name: "Shivam",
    last_name: "Sharma"
};
// console.log(typeof user_data)
// create a function PhoneBook
// it should accept PersonDetails type argument
// it should push into an array containing all persons
var persons = [];
function PhoneBook(user_data) {
    persons.push(user_data);
    return persons;
}
var dummyAdmin = {
    type: 'admin',
    name: "shivam",
    age: 21,
    role: "FSD"
};
var dummyUser = {
    type: 'user',
    name: "shivam",
    age: 21,
    occupation: "DEveloper"
};
function checktype(fn) {
    return (fn.type);
}
console.log(checktype(dummyUser));
