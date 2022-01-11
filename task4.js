let souvenirWeight = Number(prompt("How many souvenirs do you want?"));
let toyWeight = Number(prompt("How many toys do you want?"));
alert(
  "Total weight: " +
    (souvenirWeight * 75 + toyWeight * 112) / 1000 +
    " kg" +
    "/" +
    (souvenirWeight * 75 + toyWeight * 112) +
    " gr"
);
