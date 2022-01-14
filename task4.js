const souvenirWeight = 75;
const toyWeight = 112;
let souvenirOrder = Number(prompt("How many souvenirs do you want?"));
let toyOrder = Number(prompt("How many toys do you want?"));
result = souvenirOrder * souvenirWeight + toyOrder * toyWeight;
alert(result + " gr" + "/" + result / 1000 + " kg");
