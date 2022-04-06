const prompt = require("prompt-sync")();

//creating the variables that will be used to enter the random words
const adjective = prompt("Enter an adjective: ");
const bird = prompt("Enter a type of bird: ");
const body = prompt("Enter part of the body(Plural): ");
const room = prompt("Enter a room in a house(full name): ");
const pverb = prompt("Enter a verb(past tense): ");
const ing = prompt("Enter a verb ending in -ing: ");
const rela = prompt("Enter a relative's name: ");
const liquid = prompt("Enter a liquid: ");
const noun = prompt("Enter a noun: ");
const verb = prompt("Enter a verb: ");


//print out the whole paragraph
console.log(`I woke up to the ${adjective} smell of ${bird} roasting in the ${room} downstairs. I ${pverb} down the stairs 
to see if I could help ${verb} the dinner. My mom said,"See if ${rela} needs a fresh ${noun}." So I carried a tray of 
glasses full of ${liquid} into the ${ing} room. When I got there, I couldn't believe my ${body}. There he was. Eating the ${bird}!`);

