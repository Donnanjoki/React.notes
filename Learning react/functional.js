/*                              ***** Chapter Three *****
>. A function is declared a first-class member or first-class citizens when it is declared as a variable and sent to function
as an argument. These functions can even be returned from functions. 
>. Functions can be sent to functions as arguments or returned from the the function as results. More complex functions are able to manipulate and use these functions as either arguments or results or both.
>. These are called higher-order functions.



            ### What it means to be Functional ###

>. JavaScript supports functional programming because Javascript functions are first-class citizens.
>. Meaning that functions can do the same things that variables can do.
>. ES6 beefs up this functional programming techniques through arrow functions, promises and the spread operator.

A]

>. In JavaScript functions are variables hence we can add them to the objects.
 // Example: 
 const log = message => console.log(message);

 //they can also be added to objects like variables
Example: const obj = {
    message: "They can be added to objects like variables",
    log(message) {
        console.log(message);
    }
}
obj.log(obj.message)

B] 
>. We can also add functions to arrays in JavaScript:
 // Example: const messages = [
    "They can be inserted into arrays",
    message => console.log(message);
    "like variables"
    message => console.log(message);
 ]

messages[1](messages[0]) //They can be inserted into arrays
messages[3](messages[2]) // like variables

C]
>. Functions can be sent to other functions as arguments, just like other variables
 // Example
 const insideFn = logger =>
 logger("They can be sent to other functions as arguments");

 insideFn(message => console.log(message))

 D] 
 >. They can also be returned from other functions just like variables
//Example
var createScream = function(logger) {
    return function(message) {
        logger(message.toUpperCase() + "!!!")
    }
}

const scream = createScream(message => console.log(message))

scream('functions can be returned from other functions')
scream('createScream returns a function')
scream('scream invokes that returned function')

  // FUNCTIONS CAN BE RETURNED FROM OTHER FUNCTIONS!!!
  // CREATESCREAM RETURNS A FUNCTION!!!
  // SCREAM INVOKES THAT RETURNED FUNCTION!!!

By using ES6 syntax we could describe the same createScream higher-order function with arrows.

const createScream = logger => message =>
logger(message.toUpperCase() + !!!)

//Note: more that one arrow means we have a higher-order function.

Hence we can say JavaScript is a functional language, as its functions are first-class citizens and serve as data, ultimately they can be saved,
retrieved or flow through your application just like variables.



               ### Imperative Versus Declarative ###

>.Declarative programming is a style of programming where applications are structured in a ways that prioritizes describing what should happen over defining
how it should happen. While imperative programming focuses on how to achieve results with code.
>. Imperative programs require a lot of comments in order to understand what is going on. While in a declarative program, the syntax itself describes what should happen and 
the details of how things should happen are abstracted away, hence making it easier to reason about as the code describes itself.
>. Essentially declarative programming produces applications which are easier to reason about, and when it is easier to reason about an application becomes easier to scale.
>. React is declarative

// Example
Task: Building a document object model(DOM) by using an imperative approach and declarative approach

i) Imperative approach 

var target = document.getElementById('target');
var wrapper = document.createElement('div');
var headline = document.createElement('hi');

wrapper.id = "welcome";
headline.innerText = "Hello World";

wrapper.appendChild(headline);
target.appendChild(wrapper);

>>> The above code is concerned with creating elements, setting elements and adding them to the document.
 It would be hard to therefore make changes, add features or scale 10,000 lines of code where the DOM is constructed imperatively.


 ii) Declarative Approach

 const { render } = ReactDOM

 const Welcome = () => (
    <div id = "welcome">
        <h1> Hello World </h1>
    </div>
 )

 render(
    <welcome />,
    document.getElementById('target')
 )

>>> Above the Welcome component describes the DOM that should be rendered.
The render function uses the instructions declared in the component to build the DOM, and abstracting the details of how the DOM should be rendered. 
We can clearly see that we want to render our welcome component into the element with the ID of target.



                                ### Functional Concepts ###
Here an intro in core concepts of functional programming, which include immutability, purity, data transformation, higher-order functions and recursion.
      
         A]] IMMUTABILITY

>. To mutate is to change, so to be immutable is be unchangeable. In a functional program data is immutable, hence never changes.
>. In an application, instead of changing the original data structures, we build changed copies of those data structures 
and use them instead. 

// Example: 
Consider an object that represents the color lawn
Task: is to change the rating of the color object without changing or mutating the original color object,


let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0;
}

>>> Solution 1: We can rewrite the rate color function so that it does not harm the original goods (the color object)

var rateColor = function(color, rating) {
    return Object.assign({}, color, {rating:rating})
}
console.log(rateColor(color_lawn, 5).rating) // 5
console.log(color_lawn.rating) // 4

Breakdown: in the above the Object.assign is the copy machine, it takes the blank object, copies the color to that object
and overwrites the rating on the copy. Now we can have a newly rated color object without having to change the original.

>>> Solution 2: This solution will utilize ES6 arrow function along with ES7 object spread operator
The rateColor uses the spread operator to copy the color into a new object and then overwrite its rating.

const rateColor = (color, rating) => 
({
    ...color,
    rating
})

Breakdown: The second solution does not only utilize less syntax but also makes the code look cleaner.
Notice that the returned object is wrapped in parentheses. With arrow functions, this is a required step since the arrow can't just point to an object's curly braces.


         B]] PURE FUNCTIONS
>. A pure function is a function that returns a value that is computed based on its arguments.
>. Pure functions take at least one argument and always return a value or another function.
>. They do not cause side effects, set global variables or change anything about application state.
>. They treat arguments as immutable data.
>. Pure functions are naturally testable. They do not change anything about their environment, hence do not require a complicated test setup or teardown.
>. Everything a pure function needs to operate is access via arguments.
>. When testing a pure function, you control the arguments, hence can estimate the outcome.

>. Pure functions are another core concept of functional programming. They will make life much easier as they will not affect your application's state.
When writing function, do try to follow these three rules.

1. The function should take in at least one argument.
2. The function should return a value or another function.
3. The function should not change or mutate any of its arguments

// Example of a pure function:

 const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false;
 }

 const selfEducate = person =>
 ({
    ...person,
    canRead: true,
    canWrite: true;
 })

console.log(selfEducate(frederick));
console.log(frederick)

output:
//{name: "Frederick Douglass", canRead: true, canWrite: true}
// {name: "Frederick Douglass", canRead: false, canWrite: false}


// Example of an impure function:

const frederick = {
     name: "Frederick Douglass",
    canRead: false,
    canWrite: false;
}

const selfEducate = (person) => {
 person.canRead = true;
 person.canWrite = true;
 return person;
}
console.log( selfEducate(frederick) );
console.log( frederick );

output
// {name: "Frederick Douglass", canRead: true, canWrite: true}
// {name: "Frederick Douglass", canRead: true, canWrite: true}

Explanation: The selfEducate function is impure, hence causes side effects.
Invoking this function mutates the objects that are sent to it.


//Example of another impure function:
 
var frederick = {
 name: "Frederick Douglass",
 canRead: false,
 canWrite: false;
}

function selfEducate() {
 frederick.canRead = true;
 frederick.canWrite = true;
 return frederick;
}
selfEducate()
console.log( frederick )

Output
// {name: "Frederick Douglass", canRead: true, canWrite: true}

*/
