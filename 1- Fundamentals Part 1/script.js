/*
Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions
 */

const country = 'India';
const continent = 'Asia';
let population = 1415792480;



console.log(country);
console.log(continent);
console.log(population);

/*Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet */


let isIsland = false;
let language;


/*Log the types of 'isIsland', 'population', 'country' and 'language'
to the console  */


console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

/*Set the value of 'language' to the language spoken where you live (some 
countries have multiple languages, but just choose one */

let languagee = 'telugu';

/*Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
 Try to change one of the changed variables now, and observe what happen */

//Will not the allowed to reassign the value CONST doesnot allow reassign of value



/*If your country split in half, and each half would contain half the population,
then how many people would live in each half? */

let peopleCount = population / 2;
console.log(peopleCount)

//Increase the population of your country by 1 and log the result to the console

population += 1
console.log(population)

/*Finland has a population of 6 million. Does your country have more people than
Finland?*/

console.log(population >= 6000000)

/*The average population of a country is 33 million people. Does your country
have less people than the average country? */

let averagePopulation = 33000000;
if (population > averagePopulation) {
    console.log("Country has more population")
}

/*Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese */

let string = "'Portugal is in Europe, and its 11 million people speak portuguese'";
console.log(string)

/*Recreate the 'description' variable from the last assignment, this time 
using the template literal syntax*/

let ddescription = `'Portugal is in Europe, and its 11 million people speak portuguese'`;
console.log(ddescription)



const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbours == 1) {
    console.log('Only 1')
} else if (numNeighbours > 1) {
    console.log('More than 1 border')
} else {
    console.log('No borders!')
}


if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}