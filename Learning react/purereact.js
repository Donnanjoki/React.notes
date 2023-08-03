// Chapter 4: PURE REACT BOOK: LEARNING REACT

/*
  ### Page Setup ###

  In order to work with React in the browser, one needs two libraries: React and ReactDOM.
  >. React is the library for creating views.
  >. ReactDOM is the library used to actually render the UI in the browser.

  ### The Virtual DOM ###

>. HTML is a set of instructions that a browser follows when constructing the DOM. The elements that make up a HTML document become
DOM elements when the browser loads HTML and renders the user interface.
>. In a single-page application (SPA), the browser initially loads one HTML document. As users navigate through the site, they actually stay on the same page. 
Javascript destroys and creates a new user interface as the user interacts with the application.
>. Even though you may feel like you are jumping from page to page, in reality you are still on the same HTML page and Javascript is doing the heavy lifting.
>. The DOM API is a collection of objects that Javascript can use to interact with the browser to modify the DOM.
> Managing DOM changes with JavaScript can be very complicated and time-consuming, which may require more time and advanced knowledge of Javascript to work efficiently with DOM API, 
a solution to this is REACT.

>. React library is designed to update the browser DOM for us.
>. With React we do not interact with DOM API directly, rather we interact with a virtual DOM, or a set of instructions that React will use to construct the UI and interact with the browser.

// Example: This example showcases a HTML hierarchy for a recipe
The example will subsequently be used throughout the chapter.
<section id="baked-salmon">
   <h1>Baked Salmon</h1>
   <ul class="ingredients">
       <li>1 lb Salmon</li>
       <li>1 cup Pine Nuts</li>
       <li>2 cups Butter Lettuce</li>
       <li>1 Yellow Squash</li>
       <li>1/2 cup Olive Oil</li>
       <li>3 cloves of Garlic</li>
 </ul>
 <section class="instructions">
    <h2>Cooking Instructions</h2>
    <p>Preheat the oven to 350 degrees.</p>
    <p>Spread the olive oil around a glass baking dish.</p>
    <p>Add the salmon, garlic, and pine nuts to the dish.</p>
    <p>Bake for 15 minutes.</p>
    <p>Add the yellow squash and put back in the oven for 30 mins.</p>
    <p>Remove from oven and let cool for 15 minutes.
    Add the lettuce and serve.</p>
 </section>
</section>

### React Elements ###

>.The browser DOM is made up of DOM elements, similarly, the React DOM is made up of React elements.
>. A React element is a description of what the actual DOM element should look like., React elements are instructions for how the browser DOM should be created.
 
// Example: using React.createElement to create a React element to represent h1

        React.createElement("h1", null, "Baked Salmon")
    Breakdown:  The first argument defines the type of element that we wish to create.
    Above we are creating a heading-one element. The third argument represents the element's children, any nodes that are inserted between the opening and closing tag.
    The second argument represents the element's properties. Currently h1 does not have any properties.

    >. During rendering, React will convert this element to an actual DOM element.
    <h1>Baked Salmon</h1>


Continuity...
>> When an element has attributes, they can be described with properties.

// Example: Below the HTML h1 tag has id and data-type attributes.
React.createElement("h1",
    {id:"recipe-0", 'data-type': "title"},
    "Baked Salmon"
)

<h1 data-reactroot id="recipe-0" data-type="title">Baked Salmon</h1>

Breakdown: The properties in the React.createElement are added to the tag as attributes, and the child text is added as text within the element.
The data-reactroot above identifies that this is the root element of your React component.


>>>> data-reactroot <<<<

>. The data-reactroot will always appear as an attribute of the root element of your React component. 
    Prior to version 15, React IDs were added to each node that was a part of your component.
    This helped with rendering and keeping track of which elements needed to be updated.
    Now there is only one attribute added to the root, and rendering is kept track of based on the hierarchy of elements.

Continuity...

>. Hence a React element is just a Javascript literal that tells React how to construct the DOM element.
 // Example a react element.
 $$typeof: Symbol(React.element),
 "type": "h1",
 "key": null,
 "ref": null,
 "props": {"children": "Baked Salmon"},
 "_owner": null,
 "_store": {}

 Explanation: The type property of the React element tells React what type of HTML or SVG element to create.
 The props property represents the data and child elements required to construct a DOM element.
 The children property is for displaying other nested elements as text.


 >>>> Note for Creating Element <<<<
>. There is never a case where you would create elements by hand-typing literals as in the above example.
You must always create React elements with thr React.createElement function or factories as further discussed.


 #### REACT DOM ####
>. The ReactDOM contains tools that are necessary for rendering React elements in the browser.
>. ReactDOM is where to find the render method as well the renderToString and renderToStaticMarkup methods that are used on the server.
>. We can render  a React element, including its children to the DOM with ReactDOM.render.
>. The element that we wish to render is passed as the first argument and the second argument is the target node, where we should render the element:

// Example:
var dish = React.createElement("h1", null, "Baked Salmon")
ReactDOM.render(dish, document.getElementById('react-container'))

Breakdown: Rendering the title element to the DOM would add a heading-one element to the div with the is of react-container, which would already be defined in our HTML.

// Example:
Below we build this div inside the body tag. Here the React added the h1 element to the target: react-container.
<body>
    <div id = "react-container">
         <h1>Baked Salmon</h1>
    </div>
</body>

  !!!! Important !!!
>. All the DOM rendering functionality in React has been moved to ReactDOM 
because we can use REACT to build native applications as well. The browser is just one target for React.


#### Children ####
>. ReactDOM allows you to render a single element to the DOM.
>. All other React elements are composed into a single element using nesting.
>. React renders child elements using props.children.
>. Component tree is a tree of elements containing react elements and its children. The tree has one root component from which many branches grow.

//Example: Ingredients list
<ul>
   <li>1 lb Salmon</li>
   <li>1 cup Pine Nuts</li>
   <li>2 cups Butter Lettuce</li>
   <li>1 Yellow Squash</li>
   <li>1/2 cup Olive Oil</li>
   <li>3 cloves of Garlic</li>
</ul>

Explanation: In the above sample, the unordered list is the root element and it has 6 children.

// Example: The above example has been represented with React.createElement. It shows the unordered list as react element
React.createElement(
    "ul",
    null,
    React.createElement("li", null, "1lb Salmon"),
    React.createElement("li", null, "1 cup Pine Nuts"),
    React.createElement("li", null, "2 cups Butter Lettuce"),
    React.createElement("li", null, "1 Yellow Squash"),
    React.createElement("li", null, "1/2 cup Olive Oil"),
    React.createElement("li", null, "3 cloves of Garlic"),
)

>. Note every argument sent to the createElement function is another child element. 
>. React creates an array of these child elements and sets the value of props.children to that array.

// Example: In this example the resulting React element is inspected, which showcases
 a list of items represented by React element and added to an array called props.children.

 {
    "type":"ul",
    "props": {
        "children": [
            {"type": "li", "props": {"children":"1 lb Salmon"}...},
            {"type": "li", "props": {"children":"1 cup Pine Nuts"}...},
            {"type": "li", "props": {"children":"2 cups Butter Lettuce"}...},
            {"type": "li", "props": {"children":"1 Yellow Squash"}...},
            {"type": "li", "props": {"children":"1/2 cup Olive Oil"}...},
            {"type": "li", "props": {"children":"3 cloves of Garlic"}...}       
        ]
        ...
    }
 }

 // Example: Below shows the React Element Tree
 React.createElement("section", {id: "baked-salmon"},
     React.createElement("h1", null, "Baked Salmon"),
     React.createElement("ul",{"className": "ingredients"},
        React.createElement("li", null, "1lb Salmon"),
        React.createElement("li", null, "1 cup Pine Nuts"),
        React.createElement("li", null, "2 cups Butter Lettuce"),
        React.createElement("li", null, "1 Yellow Squash"),
        React.createElement("li", null, "1/2 cup Olive Oil"),
        React.createElement("li", null, "3 cloves of Garlic"),  
    ),
    React.createElement("section",{"className": "instructions"},
        React.createElement("h2", null, "Cooking Instructions"),
        React.createElement("p", null, "Preheat the oven to 350 degrees."),
        React.createElement("p", null, "Spread the olive oil around a glass baking dish."),
        React.createElement("p", null, "Add the salmon, garlic, and pine..."),
        React.createElement("p", null, "Bake for 15 minutes."),
        React.createElement("p", null, "Add the yellow squash and put..."),
        React.createElement("p", null, "Remove from oven and let cool for 15 ....")
    )  
)

>>>> className in React <<<<
>. Any element that has a HTML class attribute is using className for that property instead of class.
Since class is a reserved word in Javascript. Hence we can use className to define the class attribute of an HTML element.

// The above sample is what pure React looks like. Ultimately pure react is what runs in the browser.
The virtual DOM is a tree of React elements all stemming from a single root element.
React elements are instructions that REACT will use to build a UI in the browser.



#### Constructing Elements with Data ####

>. A merit to using React is its ability to separate data from UI elements.
>. You can always use Javascript logic to help you build the React component tree.

// Example: The below example shows an unordered list.

React.createElement("ul",{"className": "ingredients"},
        React.createElement("li", null, "1lb Salmon"),
        React.createElement("li", null, "1 cup Pine Nuts"),
        React.createElement("li", null, "2 cups Butter Lettuce"),
        React.createElement("li", null, "1 Yellow Squash"),
        React.createElement("li", null, "1/2 cup Olive Oil"),
        React.createElement("li", null, "3 cloves of Garlic"),  

>. Similarly the data used in this ingredient list can be easily represented using Javascript array.

Example:
    var items = [
         "1 lb Salmon",
         "1 cup Pine Nuts",
         "2 cups Butter Lettuce",
         "1 Yellow Squash",
         "1/2 cup Olive Oil",
         "3 cloves of Garlic"
    ]
>. To construct a virtualDOM around this data  we will use Array.map function

// Example Breakdown: When we build a list of child elements by iterating through an array, React likes each of those
elements to have a key property. The key property is used by React to help it update the DOM effectively.

React.createElement("ul",{className: "ingredients"},
      items.map((ingredients, i)=> 
      React.createElement("li",{key:i}, ingredients))
)



#### REACT COMPONENTS ####
>. Components allow us to reuse the same DOM structure for different recipes or different sets of data.
>.  When considering a user interface that you want to build, look for opportunities to break down your elements into reusable pieces.
>. The three ways to create components include;
   i] createClass
   ii] ES6 classes
   iii] stateless functional components.

          i]] React.createClass
>. On first introduction to React in 2013, the only way to create a component was through the createClass function.
>. Note the React team has indicated that the createClass may be deprecated in the future.

// Example: Ingredients list as a React Component
>> Below we are creating a React Component, which uses React.createClass that returns a single unordered list element
that contains a child list item for each ingredients in an array.

       const IngredientsList = React.createClass({
        displayName: "Ingredients",
        render() {
            return React.createElement("ul", {"className": "ingredients"},
               React.createElement("li", null, "1 lb Salmon"),
               React.createElement("li", null, "1 cup Pine Nuts"),
               React.createElement("li", null, "2 cups Butter Lettuce"),
               React.createElement("li", null, "1 Yellow Squash"),
               React.createElement("li", null, "1/2 cup Olive Oil"),
               React.createElement("li", null, "3 cloves of Garlic")
            )
        }
       })

       const list = React.createElement(IngredientsList, null, null)
       ReactDOM.render(
        list,
        document.getElementById('react-container')
       )

>. Components allow us to use data to build reusable UI. 
>. In render function, we use the "this" keyword to refer to the component instance, and properties can be accessed on that 
instance with this.props.

// Example:
Below we have created an element using our component and named it IngredientsList.
   <IngredientsList>
        <ul className="ingredients">
           <li>1 lb Salmon</li>
           <li>1 cup Pine Nuts</li>
           <li>2 cups Butter Lettuce</li>
           <li>1 Yellow Squash</li>
           <li>1/2 cup Olive Oil</li>
           <li>3 cloves of Garlic</li>
        </ul>
    </IngredientsList>

>. Data can be passed to React Components as properties.
>. Hence we can create a reusable list of ingredients by passing the data to the list as an array.
   
    // Example:
         const IngredientsList = React.createClass({
            displayName: "IngredientsList",
            render() {
                return React.createElement("ul", {className: "I=ingredients"}
                    this.props.items.map((ingredient, i) =>
                    React.createElement("li", {key:i}, ingredient)
                    )
                 
                )            
            }
         })

         const items = [
            "1 lb Salmon",
            "1 cup Pine Nuts",
            "2 cups Butter Lettuce",
            "1 Yellow Squash",
            "1/2 cup Olive Oil",
            "3 cloves of Garlic"
         ]

        ReactDOM.render(
            React.createElement(IngredientsList, {items}, null),
            document.getElementById('react-container')
        )

>>> In the ReactDOM. Above the data property items is an array with six ingredients.
Because we made the li tags using loop, we were able to add a unique key using the index loop.
   // Example: 
      <IngredientsList items=[...]>
         <ul className="ingredients">
            <li key="0">1 lb Salmon</li>
            <li key="1">1 cup Pine Nuts</li>
            <li key="2">2 cups Butter Lettuce</li>
            <li key="3">1 Yellow Squash</li>
            <li key="4">1/2 cup Olive Oil</li>
           <li key="5">3 cloves of Garlic</li>
        </ul>
     </IngredientsList>   

>. The components are objects. They can be used to encapsulate code just like classes.

// Example: Below we are creating a method that renders a single list item and use that to build out the list.

     const IngredientsList = React.createClass({
        display: "IngredientsList",
        renderListItem(ingredient, i) {
          return React.createElement("li", {key: i}, ingredients)  
        },
        render() {
            return React.createElement("ul",{className: "ingredients"},
               this.props.items.map(this.reduceListItem)
            )
        }
     })


     !!!! Important !!!
>. When rendering HTML or SVG elements, we use strings. When creating elements with components,
we use the component class directly. React will create an instance of our component with this class and manage it for us.


>. Using the IngredientsList component with this data, would render the following unordered list to the DOM.
    <ul data-react-root class="ingredients">
       <li>1 lb Salmon</li>
       <li>1 cup Pine Nuts</li>
       <li>2 cups Butter Lettuce</li>
       <li>1 Yellow Squash</li>
       <li>1/2 cup Olive Oil</li>
       <li>3 cloves of Garlic</li>
    </ul>

ii]] React.Component

>. React.Component is an abstract class included in the ES6 spec, that can be used to build
new React Components. We can create custom components through inheritance by extending this class with ES6 syntax.
// Example: 

class IngredientsList extends React.Component {
    renderListItem(ingredient, i) {
        return React.createElement("li", {key: i}, ingredient)
    }
    render() {
        return React.createElement("ul", {className: "ingredients"},
           this.props.items.map(this.renderListItem)
        )
    }
}


iii]] Stateless functional Components
>. These are not particularly objects but functions, thus they do not have a "this" scope.
>. Because they are simple, pure functions, we'll use them as much as possible in our applications.

>.To note, they may come a time the stateless functional component isn't robust enough and hence we may have to fallback to using class and createClass.
>. Stateless functional components are functions which take in properties and return a DOM element.
>. They are a good way of practicing the rules of functional programming.
>. You should strive to make each stateless functional component a pure function.
>. They should take in props and return a DOM element without causing side-effects.
>. This encourages simplicity and makes the codebase extremely testable.

>. Stateless functional components will keep your application architecture simple, and ups the performance too.
>. Caveat: If you need to encapsulate functionality or have a this scope, you can't use them.

  // Example: Creating a stateless functional Component.
  Below we combine the functionality of renderListItem and render into a single function.
   
         const IngredientsList = props =>
             React.createElement("ul", {className: "ingredients"},
                props.items.map((ingredient, i)) =>
                   React.createElement("li", {key: i}, ingredient)
             )

>. Similar to how we render components with createClass or ES6 class syntax, we would render this component with renderDOM.
>. This is just a function. The function collects data through the props arguments and returns an 
unordered list for each item that is sent to the props data.

// as seen below:

      ReactDOM.render(
        React.createElement(IngredientsList, {items}, null),
        document.getElementById('react-container')
      )


Continuity ...
>. We can improve the above stateless functional component through  destructuring the properties arguments.
 
// Example: Destructuring the properties Argument
>>> Using the ES6 destructuring syntax, we can scope the list property directly to this function,
consequently reducing the repetitive dot syntax.

   const IngredientsList = ({items}) =>
       React.createElement("ul", {className: "ingredients"},
           items.map((ingredient, i) => 
              React.createElement("li", { key:i }, ingredient)
           )
       )


>>> Note <<<
Const with stateless functional Components
 >. While its not a necessity to use const, rather its common practice, as const declares this function as a constant.
 and prevent us from redefining that variable later.

  !!! Important !!!

  >. Aside from being slightly cleaner syntax, Facebook has hinted that in the future, stateless functional components might
  be faster than createClass or ES6 class syntax.



        ### DOM RENDERING ###
>. Due to our ability to pass data to our components as props we can thus separate our application's data
from the logic that is used to create the UI.
>. This gives us an isolated set of data that is much easier to work with and manipulate than the DOM.
>. When we change the values in this isolated dataset, we change the state of our application.

>. In order for React to work in a reasonable amount of time, ReactDOM.render has to work smart, and it does this by emptying and reconstructing
the entire DOM, ReactDOM.render leaves the current DOM in place and only applies the minimal amount of changes required to mutate the DOM.

>. If we change the UI by erasing and rebuilding the DOM, we are creating and inserting new DOM elements. And inserting an element into the DOM is the most'costly 
DOM API operations- in addition its slow.
>. In contrast, updating DOM elements that are already in place performs much more quickly than inserting new ones.


>. If new DOM  elements need to be inserted, ReactDOM will insert them, but it tries to keep DOM insertions (
    the most costly operation) to a minimum.

>. This smart DOM rendering is necessary for React to work in a reasonable amount of time because our application state changes a lot.
>. Hence every time we change that state, we are going to rely on ReactDOM.render to efficiently rerender the UI.



     #### Factories ####

>. Another way of creating React elements, is by using factories.
>. A factory is a special object that can be used to abstract away details of instantiating objects.
>. In React we use factories to help us create React element instances.
>. You can use the React.createFactory function to build your own factories around specific components.

// Example: Creating a React Element using a built-in factory
           <h1>Baked Salmon</h1>

           //using createFactory to create an h1
           React.DOM.h1(null, "Baked Salmon")

           Breakdown: The first argument is for properties and the second arguments is for the children.

    
    Example: Using an unordered list with DOM factories
    
    React.DOM.ul({"className": "ingredients"},
        React.DOM.li(null, "1 lb Salmon"),
        React.DOM.li(null, "1 cup Pine Nuts"),
        React.DOM.li(null, "2 cups Butter Lettuce"),
        React.DOM.li(null, "1 Yellow Squash"),
        React.DOM.li(null, "1/2 cup Olive Oil"),
        React.DOM.li(null, "3 cloves of Garlic")
    )

    // Breakdown: Above the first argument is for the properties, where that className has been defined.
    Additional elements are elements that will be added to the children array of the unordered list.


Example: Using map with factories
below we separate the ingredients data and improve the proceeding using factories.
     var items = [
         "1 lb Salmon",
         "1 cup Pine Nuts",
         "2 cups Butter Lettuce",
         "1 Yellow Squash",
         "1/2 cup Olive Oil",
         "3 cloves of Garlic"
     ]

     var list = React.DOM.ul(
        { className: "ingredients" },
        items.map((ingredient, key) =>
            React.DOM.li( {key}, ingredient)
        )
     )

     ReactDOM.render(
        list,
        document.getElementById('react-container')
     )


>>> Using Factories with Components <<<

>. If you would like to simplify your code by calling components as functions then you need to explicitly create a factory.

// Example: Creating a factory with IngredientsList

const { render } = ReactDOM;
const IngredientsList = ({ list }) =>
    React.createElement('ul', null,
       list.map((ingredient, i) =>
          React.createElement('li', {key:i}, ingredient)
       )
    )

const Ingredients = React.createFactory(IngredientsList)

const list = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
]

render(
    Ingredients({list}),
    document.getElementById('react-container')
)

Final Note:
>. If you are not working with JSX you may find using factories preferable to numerous React.createElement calls.
>. However, the easiest way and most common to define React Elements is with JSX tags.
>. If you use JSX with React, chances are you will never use a factory

*/
