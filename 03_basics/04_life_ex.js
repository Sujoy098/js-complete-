// Immediately Invoked Function Expressions (IIFE)
//An IIFE (Immediately Invoked Function Expression) is an idiom in which a JavaScript function runs as soon as it is defined.
//  It is also known as a self-executing anonymous function.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('sujoy')