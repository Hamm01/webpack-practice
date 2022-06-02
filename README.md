# webpack-practice

Command used

1. touch index.js
2. npm init -y
3. touch index.html wizard.js barbarian.js
4. npm i -D webpack webpack-cli

# First commit happend after this

mkdir src
mv index.js ./src/index.js
mv wizard.js ./src/wizard.js
mv barbarian.js ./src/barbarian.js
npx webpack This will create the dist folder with main.js compiled
touch src/getClasses.js
// Imported the import modules in getclass from index.js and made function to export to index.js
// package.json updated with scripts{"build": "webpack" },}
npm run build // this will create and minized the main.js with formateed way
