//Functions

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const Portugal = describeCountry("portugal", 10, "libson");
console.log(Portugal);

const germany = describeCountry("Germany", 83, "Berlin");
console.log(germany);

const finland = describeCountry("Finland", 6, "Helsinki");
console.log(finland);

// Function Declarations vs. Expressions

function percentageOfWorld1(country, population) {
  const percent = ((population / 7900) * 100).toFixed(2);
  return `${country} has ${population} million people, so it's about ${percent}% of
    the world population`;
}

console.log(percentageOfWorld1("china", 1441));
console.log(percentageOfWorld1("portugal", 10));
console.log(percentageOfWorld1("USA", 332));

const percentageOfWorld2 = function (country, population) {
  const percent = ((population / 7900) * 100).toFixed(2);
  return `${country} has ${population} million people, so it's about ${percent}% of
    the world population`;
};
console.log(percentageOfWorld1("china", 1441));

//Arrow Functions

const percentageOfWorld3 = (country, population) => {
  const percent = ((population / 7900) * 100).toFixed(2);
  return `${country} has ${population} million people, so it's about ${percent}% of
    the world population`;
};
console.log(percentageOfWorld3("china", 1441));

//Functions Calling Other Functions

function percentageOfWorld1(population) {
  return (percent = ((population / 7900) * 100).toFixed(2));
}

const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, so it's about ${percentage}% of
    the world population`;
};

console.log(describePopulation("USA", 332));

//Introduction to Arrays

const populations = [1441, 332, 41, 90];
console.log(populations.length === 4);
const percentagee = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentagee);

// Basic Array Operations (Methods)

const neighbours = ["Afghanistan", "Bangladesh", "Bhutan", "Myanmar"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log(`Probably not a central European country :D`);
}

neighbours[neighbours.indexOf("Bhutan")] = `Nepal`;
console.log(neighbours);

//Introduction to Objects

const myCountry = {
  country: "India",
  capital: "NewDelhi",
  language: "Hindi",
  population: 1416644407,
  neighbours: ["Afghanistan", "Bangladesh", "Bhutan", "Myanmar"],

  describe: function () {
    return `${this.country} has a ${this.population} ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital} .`;
  },
};

console.log(
  `${myCountry.country} has a ${myCountry.population} population, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

console.log(myCountry.population);
myCountry.population = 1416644407 + 2000000;
console.log(myCountry.population);
myCountry["population"] = 1416644407 - 2000000;
console.log(myCountry.population);
console.log(myCountry.describe());

myCountry.isIsland = myCountry.neighbours.length > 0 ? false : true;
console.log(myCountry.isIsland);

// Iteration: The for Loop

for (let i = 0; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

//Looping Arrays, Breaking and Continuing

const populationss = [1441, 332, 41, 90];
const percentages22 = [];

function percentageOfWorld1(population) {
  return (percent = ((population / 7900) * 100).toFixed(2));
}

for (let i = 0; i < populationss.length; i++) {
  let res = percentageOfWorld1(populationss[i]);
  percentages22.push(res);
}

console.log(percentages22);

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++)
    console.log(listOfNeighbours[i][j]);
}
