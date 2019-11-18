let clickUpgrades = {
  shovel: {
    price: 10,
    quantity: 0,
    multiplier: 1
  },
  atmCollect: {
    price: 25,
    quantity: 0,
    multiplier: 5
  }
};
let automaticCollect = {
  deli: {
    price: 750,
    quantity: 0,
    multiplier: 150
  },
  nightClub: {
    price: 1250,
    quantity: 0,
    multiplier: 250
  },
  hotel: {
    price: 3000,
    quantity: 0,
    multiplier: 500
  },
  bank: {
    price: 7000,
    quantity: 0,
    multiplier: 1050
  }
};
let cashFlow = 0;
let manIncr = 1;
let autoIncr = 0;

let mIncrElem = document.querySelector("#maIncr");

let aIncrElem = document.querySelector("#autoCount");

let clickIncr = clickUpgrades.shovel.quantity;

let flowElem = document.querySelector("#cashFlow");

let sPriceElem = document.querySelector("#sPrice");
let shovelElem = document.querySelector("#shovel");
let sMuliElem = document.querySelector("#smuli");

let clicklvl = document.querySelector("#autolvl");
let clickprice = document.querySelector("#autoprice");
let clickMuliElem = document.querySelector("#amuli");

let deliPriceElem = document.querySelector("#deli-price");
let deliLevelElem = document.querySelector("#deli-level");
let deliMuliElem = document.querySelector("#deli-mul");

let nightClubLevel = document.querySelector("#nclvl");
let nightClubPrice = document.querySelector("#ncprice");
let nightClubMul = document.querySelector("#ncmul");

let hotelLevel = document.querySelector("#hlvl");
let hotelPrice = document.querySelector("#hprice");
let hotelMul = document.querySelector("#hmul");

let bankLevel = document.querySelector("#blvl");
let bankPrice = document.querySelector("#bprice");
let bankMul = document.querySelector("#bmul");

function update() {
  flowElem.innerText = `$:${cashFlow}`;
  aIncrElem.innerText = `$${autoIncr} per second`;
  mIncrElem.innerText = `$${manIncr} per click`;

  shovelElem.innerText = `Shovel Count:${clickUpgrades.shovel.quantity}`;
  sPriceElem.innerText = `Price $:${clickUpgrades.shovel.price}`;
  sMuliElem.innerText = `+ $${clickUpgrades.shovel.multiplier} per click`;

  clicklvl.innerText = `Level:${clickUpgrades.atmCollect.quantity}`;
  clickprice.innerText = `Price $:${clickUpgrades.atmCollect.price}`;
  clickMuliElem.innerText = `+ $${clickUpgrades.atmCollect.multiplier} per click`;

  deliPriceElem.innerText = `Price $:${automaticCollect.deli.price}`;
  deliLevelElem.innerText = `Level:${automaticCollect.deli.quantity}`;
  deliMuliElem.innerText = `+ $${automaticCollect.deli.multiplier} per second`;

  nightClubPrice.innerText = `Price $${automaticCollect.nightClub.price}`;
  nightClubLevel.innerText = `Level:${automaticCollect.nightClub.quantity}`;
  nightClubMul.innerText = `+ $${automaticCollect.nightClub.multiplier} per second`;

  hotelPrice.innerText = `Price $:${automaticCollect.hotel.price}`;
  hotelLevel.innerText = `Level:${automaticCollect.hotel.quantity}`;
  hotelMul.innerText = `+ $${automaticCollect.hotel.multiplier} per second`;

  bankPrice.innerText = `Price $:${automaticCollect.bank.price}`;
  bankLevel.innerText = `Level:${automaticCollect.bank.quantity}`;
  bankMul.innerText = `+ $${automaticCollect.bank.multiplier} per second`;
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
  if (cashFlow >= clickUpgrades.atmCollect.price) {
    clickUpgrades.atmCollect.quantity++;
    cashFlow -= clickUpgrades.atmCollect.price;
    manIncr += clickUpgrades.atmCollect.multiplier;
    clickUpgrades.atmCollect.price *= 2;
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
