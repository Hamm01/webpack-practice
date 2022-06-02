# webpack-practice

Command used

1. touch index.js
2. npm init -y
3. touch index.html wizard.js barbarian.js
4. npm i -D webpack webpack-cli

# First commit happend after this

5. mkdir src
6. mv index.js ./src/index.js
7. mv wizard.js ./src/wizard.js
8. mv barbarian.js ./src/barbarian.js
9. npx webpack This will create the dist folder with main.js compiled
10. touch src/getClasses.js
11. // Imported the import modules in getclass from index.js and made function to export to index.js
12. // package.json updated with scripts{"build": "webpack" },}
13. npm run build // this will create and minized the main.js with formateed way

# second commit done here

14. npm i @babel/core @babel/preset-env babel-loader //packages installed for babel
15. touch webpack.config.js // Module created for babel loader and babel preset
16. touch .babelrc // {"presets": ["@babel/preset-env"] } added preset in babelrc file
17. Edited the index.js with new object and spread opreater used in object so that babel can transpile code
18. npm run build // Tranispiling of code will done using babel rc

# third commit for Babel configuring

19. //Developement mode edited in webpack config , it is root level module> mode: "development"
20. npm run build

# Mode edited in Webpack config file

21. // For developemt webpack comes with feature to watch and automaticaly compile files
22. // Add the lines "build": "webpack --watch" instead of "build": "webpack" in package.json
23. npm run build

# Adding the webpack dev server for configuring

24. npm i -D webpack-dev-server
25. Edited the webpack config file > devServer: {static: "./dist"},
26. edited the package.json in scripts module > "start": "webpack serve",
27. npm start // this will start the webpack server with compiled and live reloading on changing the files

# Source map changes in webpack config js

28. As webpack.config.js is edited with> devtool: "source-map", // this will map the all the source files of Js that we
    can see in web console.

# Entry and output changes in Webpack config js

29. Webpack config file is edited with entry and output module, the entry is used for SRC folder for JS and output is used
    by webpack to provide compiled files to that particular folder
30. npm run build
31. npm start
