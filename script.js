const cars = [];

function createOne() {
  let id = Math.round(Math.random() * 1000 - -1);
  let model = prompt("What is the model of the car?");
  let brand = prompt("What is the brand of the car?");
  let year = prompt("What is the year of the car?");
  let color = prompt("What is the color of the car?");
  let price = parseFloat(prompt("What is the price of the car?"));
  let car = { id, model, brand, year, color, price };
  cars.push(car);
}

function readTwo() {
    alert(cars.map(car => `Model: ${car.model}, Brand: ${car.brand}`).join("\n"));
}

function filterThree() {}

function updateFour() {}

function deleteFive() {}

function closeSix() {
    console.log(cars)
}

function command() {
    let option;
    do {
      option = parseInt(prompt(`Options available: 1 - 2 - 3 - 4 - 5 - 6.`));
      switch (option) {
        case 1:
          createOne();
          break;
        case 2:
          readTwo();
          break;
        case 3:
          filterThree();
          break;
        case 4:
          updateFour();
          break;
        case 5:
          deleteFive();
          break;
        case 6:
          closeSix();
          break;
        default:
          alert("Option invalid, try again!");
      }
    } while (option !== 6);
  }
  

function starting() {
  alert(
    ` Welcome to the vehicle CRUD system:\n At the moment, the system has ${cars.length} registered cars.\n Choose one of the options to interact with the system.`
  );
  command();
}

starting();
