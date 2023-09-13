/*

>. This mini project is from Chapter 5 of Learning React.
>. The project involves creating a recipe app.
>. This first recipe breakdown takes on the example from the subheading recipes as JSX.

*/

// Array of recipes

/*

var data = [
  {
    name: "Baked Salmon",
    ingredients: [
      { name: "Salmon", amount: 1, measurement: "1 lb" },
      { name: "Pine Nuts", amount: 1, measurement: "cup" },
      { name: "Butter Lettuce", amount: 2, measurement: "cups" },
      { name: "Yellow Squash", amount: 1, measurement: "med" },
      { name: "Olive Oil", amount: 0.5, measurement: "cup" },
      { name: "Garlic", amount: 3, measurement: "cloves" },
    ],
    steps: [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 minutes.",
      "Add the yellow squash and put back in the oven for 30 mins.",
      "Remove from oven and let cool for 15 minutes. Add the lettuce and serve.",
    ],
  },
  {
    name: "Fish Tacos",
    ingredients: [
      { name: "Whitefish", amount: 1, measurement: "1 lb" },
      { name: "Cheese", amount: 1, measurement: "cup" },
      { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
      { name: "Tomatoes", amount: 2, measurement: "large" },
      { name: "Tortillas", amount: 3, measurement: "med" },
    ],
    steps: [
      "Cook the fish on the grill until hot.",
      "Place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes, and cheese.",
    ],
  },
];

*/

/* --- Breakdown ---
>. The data is expressed in an array of two Javascript objects. Each object has the name of the recipe, a list of ingredients required and 
a list of the necessary steps to cook the recipe.

>. Below we will create a UI for these recipes with two components, a Menu component for the recipes and a Recipe component that describes the UI for
 each recipe. It is the Menu component that we will render to the DOM.
>. Later on we will pass our data to the Menu component as a property called recipes.
*/

// Recipe app code structure

/*
The data, an array of Recipe objects
      var data = [ ... ];

A stateless functional component for an individual Recipe
      const Recipe = (props) => (
        ...
      )
A call to  ReadDOM.render to render our Menu into the current DOM
    ReactDOM.render(
        <Menu recipes={data} title="Delicious Recipes" />,
        document.getElementById("react-container")
    )

*/

/* Menu Component Structure

Breakdown: The React elements within the menu component are expressed as JSX. 
>. Everything is contained within the article element. The header element, h1 element and the div.recipes 
element are used to describe the DOM for our menu.

const Menu = (props) =>
   <article>
      <header>
         <h1>{props.title}</h1>
      </header>
      <div className="recipes">
      </div>
    </article>

// Mapping the recipe data (inside the div.recipes, we add a component for each recipe.)

<div className="recipes">
   {props.recipes.map((recipe, i) =>
       <Recipe key={i} name={recipe.name}
          ingredients={recipe.ingredients}
          steps={recipe.steps}
    )}
</div>

Using the JSX spread operator can aid in improving the code significantly. The JSX spread operator works like the object spread operator

Example: Enhancement JSX spread operator
   {props.recipes.map((recipe, i) =>
        <Recipe key={i} {...recipe} />
    )}

Another ES6 improvement we can make to our Menu component is to take in the props argument, and use object destructuring to scope the variables to the function.
Hence allowing us access to the title and recipes variables directly, hence no need to prefix them with props.

  Example: Refactored Menu Component

const Menu = ({ title, recipes }) => (
  <article>
      <header>
          <h1>{title}</h1>
      </header>
      <div className="recipes">
           {recipes.map((recipe, i) =>
               <Recipe key={i} {...recipe} />
            )}
      </div>
  </article>
)


Example: Complete Recipe Component

   const Recipe = ({ name, ingredients, steps }) =>
      <section id={name.toLowerCase().replace(/ /g, "-")}>
         <h1>{name}</h1>
         <ul className="ingredients">
            {ingredients.map((ingredient, i) =>
                 <li key={i}>{ingredient.name}</li>
              )}
          </ul>
          <section className="instructions">
              <h2>Cooking Instructions</h2>
              {steps.map((step, i) =>
                    <p key={i}>{step}</p>
                )}
          </section>
      </section>
    

Recipe Breakdown - using the webpack approach.

>. We breakdown the recipe component to a more functional approach, that wold break it up into smaller, more focused
stateless functional components and compose the together.
 
// Example: Instruction Component

const instructions = ({ title, steps }) =>
      <section className = "instructions">
          <h2>{title}</h2>
          {steps.map((s,i) =>
            <p key={i}>{s}</p>
            )}
      </section>
export default instructions

>. Explanation: By doing this we can reuse the new component called instructions for "Cooking Instructions",
"Baking Instructions", "Prep Instructions" or anything which has steps.


>. While in the recipe component we can only display the ingredients names, but each ingredient in the data for the recipe has an amount 
and measurement, hence we create a stateless functional component to represent a single ingredient.
    //Example: Ingredients Component

const Ingredient = ({ amount, measurement, name }) =>
   <li>
      <span className="amount">{amount}</span>
      <span className="measurement">{measurement}</span>
      <span className="name">{name}</span>
   </li>
export default Ingredient



>. Additionally using the Ingredient component, we can construct an IngredientsList component that can be used
any time we need to display a list of ingredients.

    //Example:IngredientsList using Ingredient component
    
       import Ingredient from './Ingredient'

       const IngredientsList = ({ list }) =>
           <ul className="ingredients">
             {list.map((ingredient, i) =>
                   <Ingredient key={i} {...ingredient} />
              )}
           </ul>
        export default IngredientsList

        Breakdown: Above we first import the Ingredient component because we are going to use it for each ingredient
      >. The Ingredients are passed to this component as an array in a property called list.
      Each ingredient in the list array will be mapped to the ingredient component. The JSX spread operator is used to pass all of the 
      data to the ingredient component as props.


// using the spread operator example:

 <Ingredient {..ingredient} />

  is another way of expressing

  <Ingredient amount={ingredient.amount}
              measurement={ingredient.measurement}
              name={ingredient.name} />

>>>>with an example it would be
    let ingredient = {
      amount: 1,
      measurement: 'cup',
      name: 'sugar'
    }

    >>>>we get;

    <Ingredient amount= {1}
                measurement="cup"
                name="sugar" />

Example: Refactored Recipe Component

import IngredientsList from './IngredientsList'
import Instructions from './Instructions'

const Recipe = ({ name, ingredients, steps }) =>
     <section id={name.toLowerCase().replace(/ /g, '-')}>
         <h1>{name}</h1>
         <IngredientsList list={ingredients} />
         <Instructions title="Cooking Instructions"
                        steps={steps} />
     </section>

export default Recipe


// create-react app

>. This represents a command-line tool that autogenerates autogenerates a React project.
>. It aids developers to get started with React projects quickly without the manual configuration
 of webpack, Babel, ESLint and associated tools.

 :>>>> To get started with using React or another library use;

             npx create-react-app my-app

.>>>> When new versions of Create React App are released, you can upgrade using a single command:

npm install react-scripts@latest

   // Explanation: the create-react app tool aids in creating a React project in the directory with just 
three dependencies; React, ReactDOM, and react-scripts.
>. react-scripts instals, ESLint, webpack, babel and more so you don't have to configure them manually.
>. Within the generated project folder is the src folder which contains an App.js, here you can edit the root component and import other 
component files.
>. You can run tests with npm test or yarn test. this runs all of the test files in the project
in an interactive mode.

>. You can run the npm run build command, using the yarn, run yarn build - this will start your application on port 3000.
>. This will create a production-ready bundle that has been transpiled and minified.


// Updates 2023: Create-React-App is Deprecated and alternatives
From:

https://blog.bitsrc.io/the-future-of-react-why-create-react-app-is-deprecated-and-hooks-are-the-future-83e8a087a325

https://hackernoon.com/create-react-app-is-dead-here-are-some-alternatives


>. As of 2023 Create React App(CRA) was largely used as the go-to tool for creating new React projects as it provided a simple and easy-to-use command-line Interface(CLI)
for setting up new React codebases, complete with a development server, automatic transpilation, and more.

>. Subsequently alternatives have cropped up, which offer advanced features, more flexible and customizable development experience
while being actively maintained.

>. These alternatives can help improve the performance and scalability of your React application,
hence making it a better choice for production use.

>. React home and its documentation: https://react.dev/
>. react.dev incorporates various diagrammatic illustrations, which will aid devs to visualize and form mental models of how React works.
>. Another feature update in the new documentation is the adoption of hooks as the default way of building components.
>. Note while CRA is still functional, developers are now encouraged to use alternative tools like Next.js, Remix or Vite.

>. Hooks are now the default: in the old documentation, it was assumed that readers were familiar with class components, which made it challenging for new readers to learn React twice, once with class components 
and the second with hooks. With the new docs you'll be able to speed up the learning process for  React 

*** CRA alternatives ****


   a]] Vite

   >. Unlike Next.js and Remix, Vite does not support server-side rendering.
   >. Rather it focuses on providing a fast and efficient development experience.
   >. Vite uses a build tool called esbuild(a Javascript bundler written in GO- which bundles dependencies 10-100 times faster than JS-based bundlers) to compile JavaScript code incredibly quickly, making it ideal for large-scale projects.
   >. It also includes features such as hot module replacement and fast development server, which makes it easy to build React applications quickly and efficiently.
   >. It offers superior performance and faster development time unlike CRA, which experiences progressive speed and performance deterioration as an application grows in size and complexity.
   >. Vite also provides extensive plugin compatibility and support for absolute imports and environment variables, hence making it even more powerful and flexible as an option for building React applications.

# Create Vite + React app using npm
npm create vite@latest vite-react-app -- --template react-ts

# Create Vite + React app using yarn
yarn create vite --template react-ts

# Create Vite + React app using pnpm
pnpm create vite --template react-ts




   b]]Next.js

   >. Next.js is a frontend framework that is built on top of React and is designed to improve the performance, user experience and SEO of web applications.
   >. It provides an out-of the box solution for server-side rendering(SSR) of React components, which allows for simple indexable HTML to be sent to the user,
   making it easier for web crawlers to read the text content of the applications, thereby improving its visibility in search engines.
   >. Next also offers features for incremental static regeneration(ISR) and static site generation(SSG), which can improve the speed of a website but is less suitable for interactive web applications that take a lot of user input.
   >. Another advantage of Next.js is that it provides a simple, easy-to-use development environment that allows developers to focus on the code rather than on the configuring building tools.
   >. Its production-ready and enables developers to create server-rendered React applications that load quickly and provide great user experience.

   >. Next.js includes features like automatic code splitting, optimized image loading and built-in support for Typescript and CSS modules.


# Create Next.js app using npm
npx create-next-app@latest --ts

# Create Next.js app using yarn
yarn create next-app --typescript

# Create Next.js app using pnpm
pnpm create next-app --ts


   c]] Remix

   >. It includes features like built-in linting, advanced routing, and serverless functions, making it easy to build
   high-quality React applications.
   >. Remix has a unique file structure that makes it easy to organize and manage complex projects

# Create a new project using Remix
npx create-remix@latest my-react-app
cd my-react-app

# Start the development server
npm run dev


    d]] T3 Stack

>. T3 stack is a web development stack that focuses on simplicity, modularity, and full-stack type safety.
>. The components of the stack include Next.js(a js framework for server-side rendering of React components) and Typescript.
>. It also includes popular additions such as Tailwind CSS(a utility-first CSS framework) and tRPC, a library for building type-safe remote procedures.

>. The stack is designed to be modular, hence developers can swap out different pieces as needed for their specific project.
>. Stack is also opinionated, and follows a set of beliefs such as solving specific problems, bleeding responsibly and considering type safety as non-optional.

# Create T3 Stack app using npm
npm create t3-app@latest

# Create T3 Stack app using yarn
yarn create t3-app

# Create T3 Stack app using pnpm
pnpm create t3-app


*/
