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

15 . //Developement mode edited in webpack config , its is root child in export module> mode: "development", 16. npm run build
