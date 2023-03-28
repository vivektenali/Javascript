const calcTip = (bill) => {
    const tip = (bill <= 300 && bill >= 50) ? bill * 0.15 : bill * 0.2;
    return `${tip}`
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + Number(tips[0]), bills[1] + Number(tips[1]), bills[2] + Number(tips[2])];
console.log(bills, tips, total);
