
// singleton--This pattern ensures that a class has only one instance and provides a global point of access to that instance.
// const Singleton = (function() {
//   let instance; // Private variable to hold the single instance

//   function init() {
//     // Private methods and properties of the singleton
//     function privateMethod() {
//       console.log("I am a private method");
//     }

//     let privateVariable = "I am a private variable";
// Object.create

// object literals-- is a concise way to create an object and define its properties and methods directly within curly braces {}.

const mySym = Symbol("key1")


const JsUser = {
    name: "sujoy",
    "full name": "sujoy manna",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "sujoy@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "sujoy@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sujoy@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
