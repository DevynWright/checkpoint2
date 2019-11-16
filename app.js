let clickUpgrades = {
  shovel: {
    price: 10,
    quantity: 0,
    multiplier: 1
  }
};
let automaticCollect = {
  autoCollect: {
    price: 250,
    quantity: 0,
    multiplier: 5
  }
};
let autoDeli = {
  deli: {
    price: 750,
    quantity: 0,
    multiplier: 15
  }
};
let autonightClub = {
  nightClub: {
    price: 1250,
    quantity: 0,
    multiplier: 25
  }
};
let autoHotel = {
  hotel: {
    price: 3000,
    quantity: 0,
    multiplier: 50
  }
};
let autoBank = {
  bank: {
    price: 7000,
    quantity: 0,
    multiplier: 105
  }
};

let cashFlow = 0;
let shovels = clickUpgrades.shovel.quantity;

function update() {
  document.querySelector("#cashFlow").innerHTML = `<p>$:${cashFlow}</p>`;
}
function mine() {
  cashFlow +=
    1 + clickUpgrades.shovel.multiplier * clickUpgrades.shovel.quantity;
  console.log(cashFlow);
  console.log(shovels);
  update();
}
function buyShovel() {
  if (cashFlow < clickUpgrades.shovel.price) {
    return;
  }
  cashFlow -= clickUpgrades.shovel.price;
  clickUpgrades.shovel.price += 5;
  clickUpgrades.shovel.quantity += 1;
  update();
}
update();
