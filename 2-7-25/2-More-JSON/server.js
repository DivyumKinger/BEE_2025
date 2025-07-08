const prompt = require('prompt-sync');

const name = prompt("Enter your Name: ");
const age = prompt("Enter your age: ");
const email = prompt("Enter your email: ");

const user = {
    name,
    age:parseInt(age),
    email
};

const fs = require('fs');
fs.writeFileSync('user.json',JSON.stringify(user));