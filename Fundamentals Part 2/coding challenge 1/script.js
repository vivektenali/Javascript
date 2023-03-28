const calcAverage = (num1, num2, num3) => {
    return (num1 + num2 + num3) / 3;
};

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas)

const checkWinner = (scoreDolphins, scoreKoalas) => {
    if (scoreDolphins >= 2 * scoreKoalas) {
        console.log(`Dolphins win`);
    } else if (scoreKoalas >= 2 * scoreDolphins) {
        console.log(`Koalas win`);
    } else {
        console.log(` No team wins`)
    }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(101, 788)