// Book: Learning React

/* Chapter one:
Built: By Facebook, 2013
Built to cater to large-scale, data-driven websites.

***Obstacles and Roadblocks with using react***
1. React is a library
The react library is small hence only used to cater to a part of the job. In addition to this 
new tools keep emerging hence leaving the developer with a plethora of libraries that may make it impossible to keep up.

2. New ECMAScript Syntax

3. Popularity of Functional Javascript
Though Javascript is not necessarily a functional language, functional techniques can be utilized.
React emphasizes functional programming over object-oriented programming.

4. Javascript Tooling Fatigue
You might love React, but now you also need to be a webpack
expert, handling code splitting, compression, testing, and on and on.

*** React Developer Tools ***
 
1. react-detector 
 Which lets you know which sites are using react and which are not.

2. React Developer Tools 
This is a plugin that can extend the functionality of the browser’s developer tools.
It creates a new tab in the developer tools where you can view React elements.

*/

/* Chapter 2: Emerging Javascript

                         **** A] Declaring variables in ES6  ****
Prior to ES6 the only way to declare variables was with var keyword. But with the recent updates
you can declare variables with;

a] const ; Constant is a variable that cannot be changed unlike variables in the past which could be overwritten.
b] let ; with the let keyword we can scope a variable to any code block
by using let we are able to protect the value of the global variable.

                          **** B] Template String ****

This provide us with an alternative to string concatenation.
They also allow us to insert variables into a string.
>>>> unlike traditional string concatenation of string composition;
console.log(lastName + "," + firstName + "" + middleName)
>>>with template strings we can create one string and add on the variables by surrounding them with $
console.log(`${lastName}, ${firstName} ${middleName}`)

Template strings honor whitespaces, which make it easier to draft up email templates, code examples or anything that has white spaces.


                         **** C] Default Parameters ***

Note::; Default parameters enable you to initialize a function with default values if arguments are not supplied to the function call. This way it makes ones functions easier to read and less error-prone.
Hence avoiding errors that step from passing in undefined arguments and destructuring objects that don't exist.

**Arrow Functions**
By using the arrow functions you can create functions without using the function keyword.
You also don't need to use the return keyword.

### Traditional Function ###
var lordify = function(firstName) {
    return `${firstName} of Canterbury`
}

console.log(lordify("Dale")) // Dale of Canterbury


### Arrow Function ###
var lordify = firstName => `${firstName} of Canterbury`

>>> With the arrow we have an entire function declaration on one line and the arrow points to what should be returned.


                             **** D] Transpiling ES6 ****
This involves converting ES5 code tto ES6 code to ensure that it is running in the browser.
A popular tool for this is Babel.


                               **** E] ES6 Objects and Arrays*****
ES6 offers us new ways of working with object and arrays for scoping variables within these datasets. These features include;
  i) Destructuring
  ii) Object Literal Enhancement
  iii) The spread operator

              i) Destructuring Assignment
This assignment allows you to locally scope fields within an object and declare which values will be used.
Destructuring is more declarative, meaning that our code is more descriptive about what we are trying to accomplish.
//Example: destructuring incoming function arguments
...this function logs a person's name as a lord.....
var lordify = regularPerson => {
    console.log(`${regularPerson.firstName}` of Canterbury)

}
var regularPerson = {
    firstName = "Bill"
    lastName = "Wilson"
}

lordify(regularPerson) ///Bill of Canterbury

//destructuring the values we need out of the regular person

var lordify = ({firstName}) => {
    console.log(`${firstname} of Canterbury`)
}

lordify(regularPerson) //Bill of Canterbury

>>>> Values can also be destructured from arrays.
 // Example: var [firstResort] = ["Kirkwood", "Squaw", "Alpine"]
            console.log(firstResort) //Kirkwood

>> We can also pass unnecessary values with list matching commas. List matching occurs when commas take the place of elements that should be skipped.
// Example: var [,,thirdResort] = ["Kirkwood", "Squaw", "Alpine"]
console.log(thirdResort) //Alpine

                    ii) Object Literal Enhancement 
This is the opposite of destructuring. It involves putting back together, that is restructuring.
We can also create object methods with object literal enhancement or restructuring.

var name = "Tallac"
var elevation = 9738


*/
