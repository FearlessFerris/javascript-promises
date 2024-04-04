// JavaScript Promises 


/* 
    Review: 
      1.) - What is the callback pattern for asynchronous code in JavaScript 
      2.) - What is a promise? 
      3.) - Use promises to manage asynchronous code 
      4.) - Compare and contrast promises with the callback pattern 
      5.) - Explore the Promise function in detail 
*/


/* 
    1.) 
      - A programming pattern where a function ( callback ) is passed as an argument 
        to another function to handle asynchronous operations. The callback is executed
        once the asynchronous task is completed allowing for non-blocking code execution
*/

// Example: 

function callback( message ) { console.log( message )};

function timedGreeting( callback ) {
    setTimeout( function() { return callback( 'Page has completed loading... YAY' )}, 3000 );
}

timedGreeting( callback );

/* 
    In this example: 
      - callback is defined as a callback function 
      - timedGreeting is called with the callback function passed in as an argument 
      - when the timedGreeting function completes the callback function is called and ran 
*/

/* 
    Another way for managing asynchronous code in JavaScript would be to use Async + Ajax 
    
*/



//------------------------------------------------------------------------------------------------
/* 
    2-3.) 
      - a promise is an object representing the eventul completion or failure of an asynchronous 
        allowing you to handle asynchronous code more cleanly using methods like .then() for a
        success and .catch() for errors 

*/

// Example: 




