import getclasses from "./getClasses"
console.log("Ran from the index.js")
getclasses()

const obj = { a: "alpha", b: "bravo" }
const newObj = { ...obj, c: "charlie" }
console.log(newObj)
