let clickUpgrades = {
  shovel: {
    price: 10,
    quantity: 0,
    multiplier: 1
  }
};
let automaticCollect = {
  autoCollect: {
    price: 2,
    quantity: 0,
    multiplier: 5
  },
  deli: {
    price: 750,
    quantity: 0,
    multiplier: 15
  },
  nightClub: {
    price: 1250,
    quantity: 0,
    multiplier: 25
  },
  hotel: {
    price: 3000,
    quantity: 0,
    multiplier: 50
  },
  bank: {
    price: 7000,
    quantity: 0,
    multiplier: 105
  }
};
let deliPriceElem = document.querySelector("#deli-price");
let deliLevelElem = document.querySelector("#deli-level");
let manIncr = 1;
let mIncrElem = document.querySelector("#maIncr");
let autoIncr = 0;
let aIncrElem = document.querySelector("#autoCount");
let clickIncr = clickUpgrades.shovel.quantity;
let cashFlow = 0;
let flowElem = document.querySelector("#cashFlow");
let sPriceElem = document.querySelector("#sPrice");
let shovelElem = document.querySelector("#shovel");
let clicklvl = document.querySelector("#autolvl");
let clickprice = document.querySelector("#autoprice");

let nightClubLevel = document.querySelector("#nclvl");
let nightClubPrice = document.querySelector("#ncprice");

let hotelLevel = document.querySelector("#hlvl");
let hotelPrice = document.querySelector("#hprice");

let bankLevel = document.querySelector("#blvl");
let bankPrice = document.querySelector("#bprice");

function update() {
  flowElem.innerText = `$:${cashFlow}`;
  aIncrElem.innerText = `$${autoIncr} per second`;
  mIncrElem.innerText = `$${manIncr} per click`;
  shovelElem.innerText = `Shovel Count:${clickUpgrades.shovel.quantity}`;
  sPriceElem.innerText = `Price $:${clickUpgrades.shovel.price}`;
  clicklvl.innerText = `Level:${automaticCollect.autoCollect.quantity}`;
  clickprice.innerText = `Price $:${automaticCollect.autoCollect.price}`;
  deliPriceElem.innerText = `Price $:${automaticCollect.deli.price}`;
  deliLevelElem.innerText = `Level:${automaticCollect.deli.quantity}`;
  nightClubPrice.innerText = `Level:${automaticCollect.nightClub.price}`;
  nightClubLevel.innerText = `Level:${automaticCollect.nightClub.quantity}`;
  hotelPrice.innerText = `Level:${automaticCollect.hotel.price}`;
  hotelLevel.innerText = `Level:${automaticCollect.hotel.quantity}`;
  bankPrice.innerText = `Level:${automaticCollect.bank.price}`;
  bankLevel.innerText = `Level:${automaticCollect.bank.quantity}`;
}

function mine() {
  cashFlow +=
    1 + clickUpgrades.shovel.multiplier * clickUpgrades.shovel.quantity;
  console.log(cashFlow);
  update();
}
function buyShovel() {
  if (cashFlow < clickUpgrades.shovel.price) {
    return;
  }
  cashFlow -= clickUpgrades.shovel.price;
  clickUpgrades.shovel.price *= 2;
  clickUpgrades.shovel.quantity += 1;
  manIncr++;
  console.log("purchased");
  update();
}

function autoClicker() {
  if (cashFlow >= automaticCollect.autoCollect.price) {
    automaticCollect.autoCollect.quantity++;
    cashFlow -= automaticCollect.autoCollect.price;
    autoIncr += automaticCollect.autoCollect.multiplier;
    automaticCollect.autoCollect.price *= 2;
    update();
  }
}
function autoDeli() {
  if (cashFlow >= automaticCollect.deli.price) {
    automaticCollect.deli.quantity++;
    cashFlow -= automaticCollect.deli.price;
    autoIncr += automaticCollect.deli.multiplier;
    automaticCollect.deli.price *= 2;
    console.log;
    update();
  }
}
function autoNightClub() {
  if (cashFlow >= automaticCollect.nightClub.price) {
    automaticCollect.nightClub.quantity++;
    cashFlow -= automaticCollect.nightClub.price;
    autoIncr += automaticCollect.nightClub.multiplier;
    automaticCollect.nightClub.price *= 2;
    update();
  }
}
function autoHotel() {
  if (cashFlow >= automaticCollect.hotel.price) {
    automaticCollect.hotel.quantity++;
    cashFlow -= automaticCollect.hotel.price;
    autoIncr += automaticCollect.hotel.multiplier;
    automaticCollect.hotel.price *= 2;
    update();
  }
}
function autoBank() {
  if (cashFlow >= automaticCollect.bank.price) {
    automaticCollect.bank.quantity++;
    cashFlow -= automaticCollect.bank.price;
    autoIncr += automaticCollect.bank.multiplier;
    automaticCollect.bank.price *= 2;
    update();
  }
}

function startTimer() {
  let timer = setInterval(autoUpgrades, 1000);
}

function autoUpgrades() {
  if (autoIncr > 0) {
    cashFlow += autoIncr;
    update();
  }
}
startTimer();
update();
