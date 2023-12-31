/*
Book: Learning React: Chapter 5: React with JSX

>. Apart from creating react elements using React.createElement, we can also use JSX, which is a Javascript extension that allows us
to define React elements using syntax that looks similar to HTML.

   ### React Elements as JSX ###

>. JSX was released to provide a much concise syntax for creating complex DOM trees with attributes.
>. In JSX, an element's type is specified with a tag, the tag's attributes represent the properties.
The element's children can be added between the opening and closing tags
   
       Example of a JSX for an unordered list
    <ul>
       <li>1 lb Salmon</li>
       <<li>1 cup Pine Nuts</li>
       <li>2 cups Butter Lettuce</li>
       <li>1 Yellow Squash</li>
       <li>1/2 cup Olive Oil</li>
       <li>3 cloves of Garlic</li>
    </ul>
Note JSX looks similar to HTML.

>. JSX also works with components.
     Example: Creating an IngredientsList with JSX

     React Element: React.createElement(IngredientsList,{list:[...]});

     JSX:                                <IngredientsList list={[...]}/>
   
>. Note: When passing array of ingredients, we need to surround it with curly braces.
>. This is called a Javascript expression, and it is used when passing Javascript values to components as properties.
>. Component properties will take two types; either string or JavaScript expression. JavaScript expressions can include
 arrays, objects, and even functions, hence in order to include them you must surround them in curly braces.


           ### JSX Tips ###

>>>> Nested Components <<<<
>. JSX allows you to add components as children of other components

     Example: IngredientsList with three nested Ingredient components

     <IngredientsList>
          <Ingredients />
          <Ingredients />
          <Ingredients />
     </IngredientsList>

>>>> className <<<<
>. class is reserved for Javascript, hence className is used instead to define the class attribute.
    
    Example: <h1 className="fancy">Baked Salmon</h1>

>>>> Javascript Expression <<<<
>. JavaScript expressions are wrapped in curly braces and indicate where variables shall be evaluated and their resulting values returned.

     Example: <h1>{this.props.title}</h1>

     Values of types other than string should appear as Javascript expressions
     
     Example: <input type="checkbox" defaultChecked={false} />

>>>> Evaluation <<<<
>. The Javascript found between the curly braces will be evaluated, hence operations such as concatenation or addition occur.
>. Additionally, functions found in Javascript expressions will be invoked.

     Example:
     <h1>{"Hello" + this.props.title}</h1>
     <h1>{this.props.title.toLowerCase().replace}></h1>

     function appendTitle({this.props.title}) {
        console.log(`${this.props.title} is great!`)
     }

>>.> Mapping Arrays to JSX <<<<
>. JSX is Javascript, hence you can incorporate JSX directly inside JavaScript functions.

     Example: Array.map() with JSX
        <ul>
            {this.props.ingredients.map((ingredient, i) =>
                <li key={i}>{ingredients}</li>
                )}
        </ul>
>. JSX looks clean and readable, but it cant's be interpreted with a browser.
>. All JSX must be converted into createElement calls or factories. A tool for this Babel.

                #### Babel ####
>. Javascript is an interpreted language, hence the browser interprets the code as text, hence no need compile Javascript.
>. To note not all browsers support the latest ES6 and ES7 syntax and the JSX syntax, hence the need for transpiling using a tool like Babel.
>. Babel used to be called 6to5, but was later changed to Babel which grew to support latest changes in ECMAScript, and transpiling JSX into pure React.
>. There are many ways to work with Babel, but the easiest way is to include a link to the babel-core transpiler in your HTML, which will transpile any code
 in script blocks that have a type of "text/babel". Note this is not the best solution for production.
    
      Example: Including babel-core
      <!DOCTYPE html>
      <html>
         <head>
            <meta charset="utf-8">
            <title>React Example</title>
        </head>
        <body>
           <div class="react-container"></div>
        
        <!-- React Library & React DOM -->
           <script src="https://unpkg.com/react@15.4.2/dist/react.js"></script>
           <script src="https://unpkg.com/react-dom@15.4.2/dist/react-dom.js"></script>
           <script
           src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.29/browser.js">
           </script>
           <script type="text/babel">

        //JSX  code here. or link to separate Javascript file that contains JSX.
           </script>
        </body>
       </html>

                #### Recipes as JSX ####

>. React allows us to write web applications with beautiful code.
>. JSX provides us a nice, clean way to express React elements in our code that makes sense to us, and is readable by engineers that make up our community.
>. A drawback for JSX is that it is not readable by the browser, as our code needs to be interpreted by the browser by being converted into pure React.
 ------- (recipe breakdown in react projects repo) ----

               #### Into to WebPack ####
>. When working with React in production, a lot of questions need to be answered such as;
        1. How do we want to deal with JSX and ES6+ transformations?
        2. How can we manage our dependencies?
        3. How can we optimize our images and CSS?
>. Webpack like so many tools before arose as a leading tool for bundling CommonJS modules.
>.Webpack is billed as a module bundler. A module bundler takes all the different files ( that is Javascript, LESS, CSS, JSX, ES6 and more) and turns them into a single file.
>. The main advantage of modular bundling are modularity and network performance.

>. Modularity allows you to break down your code into parts, or modules that are easier to work with, especially in a team environment.
>. Network performance is gained by only needing to load one dependency in the browser, the bundle. Each script tag makes an HTTP request, and there is a latency
penalty for each HTTP request. Bundling all of the dependencies into a single file allows you to load everything with one HTTP request, hence avoiding the latency.

\\>. More of latency here: https://developer.mozilla.org/en-US/docs/Web/Performance/Understanding_latency

>. Aside form latency; webpack can also handle:

   a]] Code splitting

>. Splits up your code into different chunks that can be loaded when you need them.
>. Also called rollups or layers, their aim is to break up code as needed for different pages or devices.

   b]] Minification
>. Removes whitespace, line breaks, lengthy variable names, and unnecessary code to reduce the file size.

   c]] Feature Flagging 
>. Sends code to one or more - but not all - environments when testing out features.

   d]] Hot Module Replacement(HMR)
>. Watches for changes in source code. Changes only the updated modules immediately.

   ### Webpack Loaders ###

>. A loader is a function that handles the transformation that we want to put our code through during the build process.
>. The necessary loaders are specified in the webpack.config.js file, which do the work of converting the code into syntax that can be read natively by the browser
>. One of the main use cases of loaders is transpiling from one dialect to another.
>. Another category of loaders is for styling. The css-loader looks for files with the .scss extension and compiles them to CSS.
>. The css-loader can be used to include CSS modules in your bundle.
>. All CSS bundled as Javascript and automatically added when the bundled Javascript file is included, hence no need to use link elements to include stylesheets


## Recipe App with Webpack Build
>. Using webpack to statically build your client Javascript, makes it possible for teams to work together  on large-scale applications.
>. Among the benefits of incorporating the webpack module bundler include;
    
    a]] Modularity

>. By using commonJS module pattern in order to export modules that will later be imported or required by another part of the application
makes our source code much more approachable.
>. This subsequently allows development teams to easily work together by allowing them to create and work with separate files that will be statically combined
 into a single file before sending to production.

    b]] Composing

>. With modules, we are able to build small, simple, reusable React components that we can compose efficiently into applications.
>. Smaller components are easier to comprehend, test and reuse, and are also easier to replace down the line when enhancing your applications.

    c]] Speed

>. By packaging all of the applications' modules and dependencies into a single client bundle, we will be able to reduce load time of your application because
 there is latency associated with each HTTP request.
 >. Through packaging everything together in a single file, means that the client will only need to make a single request.
 >. Also minifying the code in the bundle will improve the load time as well.


    d]] Consistency
>. The bundler also allows developers to consistently use cutting-edge Javascript syntax.

Note:  ------- (recipe breakdown in react projects repo) ----


     ## Note ##

From: https://aglowiditsolutions.com/blog/react-webpack/
      https://webpack.js.org/concepts/#browser-compatibility

>. When working on large-scale React projects, the default CRA might not be ideal as its saddled with multiple defaults that cannot be configured, hence
a custom webpack configuration will be most ideal.

 >. Benefits of React Webpack: 
         1]]  Enhances scalability of your React app

   How: webpack is a module system, also it is based on the ES6 standards with other module standards.
        Hence, when creating a file using this module system , it automatically becomes its module with its scope.
        Proving helpful if your project depends on various vendor dependencies.

         2]] Optimizes development time with hot module replacement

   How: A problem faced by developers in the past included changes not made on the web app not rendering as expected. With Hot Module Replacement
        your page doesn't need to trigger a page reload to reflect minor changes in your JS or CSS code.
        This replacement feature helps reduce overall development time, boosting the publishing time of your website.
   
         3]] Absolute control over React Build systems
   How: Ypu are able to choose builds like Babel or Traceur for transpiling your modern code to versions supported
   by older browsers.

       >>>> Understanding how React Webpack works <<<<

>. React webpack file is typically configured through a file labeled webpack.config.js (where all the configurations take place.)
    
    >>> React Webpack Components - What goes on under the hood <<<

>. Webpack is a static module bundler; when webpack processes your applications, it internally builds a dependency graph from one or more entry points,
and then combines every module your project needs into one or more bundles, which are static assets to serve your content from
>. Core components of webpack include
   
       1]] Entry

       >. An entry point indicates which module webpack should use to begin its internal dependency graph.
       >. By default its value is ./src/index.js but you can specify a different (or multiple entry points by) setting an entry property in the webpack configuration.

          // Example:
             module.exports = {
               entry: './path/to/my/entry/file.js,
             };

       2]] Output

       >. This property tells webpack where to emit the bundles it creates and how to name these files.
          It default to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.


       3]] Loaders
         
        >. Note; webpack only understands Javascript and JSON files. 
        >. Loaders allow webpack to process other types if files and convert them into valid modules that can be consumed 
        by your own application and added to the dependency graph.
             // Example: What a loader configuration would look like;

                 module.exports = {
                  entry: { ... as before }
                  output: { ... as before },

                  module: {
                     rules: [
                        {
                           test: /\.[jt]sx?$/,  // matches .js, ts, .jsx and tsx files
                           use: ['babel-loader'],,  // uses babel-loader for the specified file types
                           include: path.resolve(_dirname, 'src'),
                           exclude: /node_modules/,
                        }
                     ],
                  }
                 }
               
                Breakdown: 
                   test : checks for specific file types 
                   use: specifies a list of loaders used for any specific file type
                   exclude: helps developers decide which files should not be processed
                   include: Helps developers decide which files should be processed.

        >. At higher levels loaders have two properties in your webpack configuration:

            1. The test property which identifies which file or files should be transformed
            2. The use property which indicates which loader should be used to do the transforming
               // Example:
                     const path = require('path');

                     module.exports = {
                        output: {
                           filename: 'my-first-webpack.bundle.js',
                        },
                        module: {
                           rules: [{ test: /\.txt$, use: 'raw-loader' }],
                        },
                     };

            Breakdown: rules in your webpack config, are defined under modules.rules and not rules

       4]] Plugins
         
         >. Webpack leverages plugins to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.
         >. In order to use a plugin, you need to require() it and add it to the plugins array. 
         >. Most plugins are customizable through options, and since you can use plugin multiple times in a configuration for different purposes, you need to create an 
         instance of it by calling it with the new operator.
               // Example: 
               const HtmlWebpackPlugin = require('html-webpack-plugin');
               const webpack = require('webpack'); // to access built-in plugins

               module.exports = {
                  module: {
                     rules: [{ test:/\.txt$/, use: 'raw-loader }],
                  },
                  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
               };

               Breakdown: Above the html-webpack-plugin generates an HTML file for your application and automatically injects
               all your generated bundles into this file.


       5]] Mode
         
       >. You can set up the mode parameter to either development, production or none, which will enable webpack's built-in optimizations that correspond to each environment.
          The default value is production.

          // Example:'module.exports = {
            mode: 'production',
          };

       6]] Browser Compatibility

         >. Webpack needs Promise for import() and require.ensure(). To support older browsers you will need to load a polyfill before using the stated expressions.



   <<<. Takeaway >>>.

   By installing webpack you're at a better position to have complete control over the configuration and open up 
   the scope of customization.
   


*/
