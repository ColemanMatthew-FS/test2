//method is created as a const equal to a callback function
const uppercase = (str) => str.toUpperCase()

const lowercase = (str) => str.toLowerCase()

//exported here
module.exports = {
    uppercase,
    lowercase
}