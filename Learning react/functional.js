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
    canWrite: false
 }

 const selfEducate = person =>
 ({
    ...person,
    canRead: true,
    canWrite: true
 })

console.log(selfEducate(frederick));
console.log(frederick)

output:
//{name: "Frederick Douglass", canRead: true, canWrite: true}
// {name: "Frederick Douglass", canRead: false, canWrite: false}

Explanation: This version of selfEducate is a pure function as it computes a value based on 
the argument that was sent to it. It also returns a new person object without mutating the arguments sent
to it hence no side effects.

// Example of an impure function:

const frederick = {
     name: "Frederick Douglass",
    canRead: false,
    canWrite: false
}

const selfEducate = (person) => {
 person.canRead = true;
 person.canWrite = true;
 return person
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
 canWrite: false
}

function selfEducate() {
 frederick.canRead = true;
 frederick.canWrite = true;
 return frederick;
}
selfEducate();
console.log( frederick );

Output
// {name: "Frederick Douglass", canRead: true, canWrite: true}

Explanation: Here selfEducate is also impure as it does not take any arguments and does not
return a value or a function. It also changes the variable outside of its scope.


C]] Data Transformation

Functional Programming is all about transforming data from one form to another.
These copies are transformed using functions, hence making cose less imperative and complex.
>. To be proficient with functional programming you must master two core functions thats is;
  
i) Array.map  

  >. This array function is essential to functional programming.
  >. Rather than use a predicate, the Array.map takes a function as its argument.

  // Example: const highSchools = schools.map(schools => `$[school] High School`)
  console.log(highSchools.join("\n"))

  output:
  // Yorktown High School
  // Washington & Lee High School
  // Wakefield High School
  
  Explanation: In the above the map function has been used to append "High school"
  
  // Example 1: Creating a new array of objects based on the original.
   const editName = (oldName, name, arr) =>
   arr.map(item => {
    if (item.name === oldName) {
        return {
            ...item,
            name
        }
    } else {
        return item
    }
   })

   //Example 2: Can also be written as so:
   const editName = (oldName, name, arr) =>
   arr.map(item=>(item.name === oldName) ?
   ({...item,name}) :
   item
   )

// Example 3: We can also transform an array into an object by combining Object.keys with Array.map which returns an array
of keys from an object using Array.map and Object.keys

const schools = {
    "Yorktown": 10,
    "Washington & Lee": 2
    "Wakefield": 5
}

const schoolArray = Object.keys(schools).map(key =>
    ({
        name: key,
        wins: schools[key]
    })
    )
    console.log(schoolArray)

   output //
   [
    {
    name: "Yorktown",
    wins: 10
   },
   {
    name: "Washington & Lee",
    wins: 2
   },
   {
    name: "Wakefield",
    wins: 5
   }
]

  ii) Array.reduce

  >. The reduce and reduceRight functions can be used to transform an array into any value, including a number, string,
  Boolean, object or even a function.
  >. The array.reduceRight works the same as reduce, the key difference is that the Array.reduceRight starts reducing from the end rather than from the beginning.

  // Example:  We can transform arrays into completely different arrays using reduce.
  const colors = ["red", "red", "green", "blue", "green"];

  const distinctColors = colors.reduce(
    (distinct, color) =>
        (distinct.indexOf(color) !== -1)?
        distinct :
        [...distinct, color],
    []    
  )

  console.log(distinctColors)

  //output ["red","green","blue"]

  Explanation: In the above the colors is reduced to an array of distinct values.
  The second argument sent to the reduce function is an empty array. This will be the initial value for distinct.
  When the distinct array does not already contain a specific color, it will be added.
  Otherwise it will be skipped, and the current distinct array will be returned.

>. Other core functions that transform data from one type to another include:

   iii) Array.join function : this is an inbuilt JavaScript method which we can use to extract a delimited string from our array.
       // Example:

       const schools = [
        "Yorktown",
        "Washington & Lee",
        "Wakefield"
       ]

       console.log(schools.join(",")) // "Yorktown, Washington & Lee, Wakefield"


     iv) Array.filter 
     >. This is a JavaScript function which produces a new array from a source array.
     This function takes a predicate as its only argument.
     A predicate is a function that always returns a Boolean value: true or false.
     The Array.filter invokes this predicate once for every item in the array.
     That item is then passed to the predicate as an argument and the return value is used to decide is that item shall be added
     to the new array.
     
     // Example: The filter is used below in checking if every school begins with"W"
     const wSchools = schools.filter(school => schools[0] === "W");
     console.log(wSchools) // ["Washington & Lee", "Wakefield"]


    >. When its time to remove an item from an array we should use Array.filter over Array.pop or Array.splice because Array.filter is immutable.
    // Example:
    Below the cutSchool function returns new arrays that filter out specific school names
    
          const cutSchool = (cut, list) =>
         list.filter(school => school! == cut);

        console.log(cutSchool("Washington & Lee", schools).join("*"));
        output//"Yorktown * Wakefield"

Note: map and reduce are the main weapons of any functional programmer, hence to be a proficient JS Engineer, you must
master these function.

 D]] Higher-Order Functions

 >. Higher-order functions are functions that manipulate other functions.
 >. They can take functions in as argument, or return functions or both.
 >. The first category of higher-order functions are functions that expect other functions as arguments.
 
 // Example of a higher-order function :
 In the Example below invokeIf callback function will test a condition and invoke on callback function when it is true and another callback
 function when the condition is false.;

     const invokeIf = (condition, fnTrue, fnFalse) =>
     (condition) ? fnTrue() : fnFalse()

     const showWelcome = () =>
     console.log("Welcome!!!")

     const showUnauthorized = () =>
     console.log("Unauthorized!!!")

     invokeIf(true, showWelcome, showUnauthorized) //"Welcome"
     invokeIf(false,showWelcome, showUnauthorized ) // "unauthorized"
        

    Explanation: invokeIf expects two functions; one for true and one for false.
    This is demonstrated by sending both showWelcome and showUnauthorized to invokeIf.
    When the condition is true, showWelcome is invoked. When the condition is false, show unauthorized is invoked.
 
 >. Such include Array.map, Array.filter and Array.reduce which all take functions as arguments.
 >. Higher-order functions that return other functions can help us handle the complexities associated with asynchronicity in Javascript
 >. They can help us create functions that can be used or reused at our convenience.

 >. Currying is a functional technique that involves the use of higher-order functions.
 >.  It is a practice of holding on to some of the values needed to complete an operation, until the rest can be supplied at a later point in time.
 >. This is achieved through the use of a function that returns another function, the curried function.

 // Example of currying :
       const userLogs = userName => message =>
       console.log(`${userName} -> ${message}`)

       const log = userLogs("grandpa23")
       
       log("attempted to load 20 fake members")
       getFakeMembers(20).then(
        members =>log(`successfully loaded ${members.length} members`),
        error => log("encountered an error loading members")
       )

      // grandpa23 -> attempted to load 20 fake members
      // grandpa23 -> successfully loaded 20 members
     // grandpa23 -> attempted to load 20 fake members
    // grandpa23 -> encountered an error loading members

         Explanation: the userLogs is the higher-order function. The log function is produced from userLogs, and 
         every time the log function is used, "grandpa23" is prepended to the message.

 E]] Recursion

 >. Recursion is a technique that involves creating functions that recall themselves.
 >. Often we are faced with a challenge that involves a loop, a recursive function can be used instead.
 >. Recursion is a powerful functional technique, hence use recursion over looping whenever possible.
     
         // Example: Task of counting down from 10.
    Solution: rather than use s for loop, we can alternatively use a recursive function. As seen below
             const countdown = (value, fn) => {
                fn(value)
                return (value > 0) ? countdown(value-1, fn) : value
             }
             countdown(10, value => console.log(value));

             //10
             // 9
             // 8
             // 7
             // 6
             // 5
             // 4
            // 3
            // 2
            // 1
            // 0

            Explanation: countdown expects a number and a function as arguments. Above this is
            invoked with the value 10 and a callback function. When countdown is invoked, the callback is invoked, which logs the current value.
            Next, countdown checks the value to see if it greater than o.
            If it is, countdown recalls itself with a decremented value.
            Eventually, the value will be 0 and the countdown will return that value all the way back up the call stack.
     
            !!!Important !!!
 Browser Call Stack Limitations:
 >. Recursion should be used over loops wherever possible, but not all JS engines are optimized for a large amount of recursion.
 >. Too much recursion can cause Javascript errors.
 >. These errors can be avoided by implementing advanced techniques to clear the call stack and flatten out recursive calls.
 >. Future Javascript engines plan to eliminate call stack limitations entirely.      

continuity....,

>. Recursion is another  functional technique that works well with asynchronous processes.
Functions can recall themselves when they are ready.
   // Example:
   Below the countdown function has been modified to count down with a delay.
   This modified version of the countdown can be used to create a countdown clock.

   const countdown = (value, fn, delay = 1000) => {
    fn(value)
    return (value > 0) ?
       setTimeout(() => countdown(value-1, fn), delay) :
       value
   }

   const log = value => console.log(value)
   countdown(10, log)

   Explanation: Above we create a 10-second countdown by initially invoking countdown once with the number 10 in a function that logs countdown.
   Instead of recalling itself right away, the countdown function waits one second before recalling itself, thus creating a clock.

>. Recursion is a good technique for searching data structures. YOU can use recursion to iterate through subfolders until a folder containing only files 
is identified. You can also use recursion to iterate through the HTML DOM until you find an element that does not contain any children.

// Example: check example in the book.

 f]] Composition

>. Functional programs break up their logic into small, pure functions that are focused on specific tasks.
>. Eventually you will need to pull these smaller functions together, combine them, call them in series or parallel or compose them into larger functions 
until you have an application.

>. Composition has varying implementations, patterns and techniques.
           >>>>Chaining
>. An example is chaining, whereby Javascript functions can be chained together using dot notation to act on the return value of the previous function.

// Example: Below we're chaining together replace methods with dot notation to transform a string.
          const template = "hh:mm:ss:tt"
          const clockTime = template.replace("hh", "03")
          .replace("mm", "33")
          .replace("ss", "33")
          .replace("tt","PM")

          console.log(clockTime)

          //"03:33:33 PM"
    
          Explanation: Above the template is a string. By chaining replace methods to the end of the template string, we replace
          hours, minutes, seconds and time of day in the string with new values.
          >. The template itself remains intact and can be reused to create more clock time displays.

>. The goals of composition is to generate a higher order of function by combining simpler functions.
      
// Example:
      const both = compose(
        civilianHours,
        appendAMPM
      )
      both(new Date())

      Explanation: The above approach is not only cleaner but easier to scale.
      Because we can add more functions at any point. It also makes it easy to change the order of composed functions.

>.The composed function is a higher order function. It takes functions as arguments and returns a single value.
       
      // Example: 
      const compose =
      (...fns) =>
      (arg) =>
       fns.reduce((composed, f) => f(composed), arg);


      Explanation: Above the compose function takes in functions as arguments and returns a single function.
      Above the spread operator is used to turn those function arguments into an array called fns.
      A function is then returned that expects one argument, arg. When this function is invoked, the fns array is piped starting with the argument we want
      to send through the function. The argument becomes the initial value for composed and then each iteration of the reduced callback returns.

      The callback takes 2 arguments that is composed and a function f. Each function is invoked with compose which is the result of the previous function output.
      Eventually the last function will be invoked and the last result returned.


*/
