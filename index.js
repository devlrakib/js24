// IIFEs and function expression

// IIFEs Full Meaning=> Immediateli Invokeable  Function Express

// Practice1
(function display(){
    console.log("Hello")
})();

//Practice2
(function display(message){
    console.log("message")
})("Hello Message");

// Function Expressions
 const express= function displayMessage(){
    console.log("This Is Function Express");
}
express();


