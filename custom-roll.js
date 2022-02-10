const prompt = require('prompt-sync')();

let num = Number(prompt("How many sides should the dice have? "));
    
console.log(Math.ceil(Math.random()*num));