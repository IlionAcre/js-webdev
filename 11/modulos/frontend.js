// import { p1, inventory, addItem } from "./market.js";

// addItem("plátano");
// addItem("mango");

// console.log(p1);

// console.log(inventory);

// import remover, { inventory } from "./market.js";
// remover.removeLastItem();
// console.log(inventory);

// import { marketModule } from "./market.js";

// marketModule.addItem("plátano");
// marketModule.addItem("mango");

// marketModule.removeLastItem();
// console.log(marketModule.inventory);

import * as market from "./market.js";

market.addItem("plátano");
market.addItem("mango");

market.removeLastItem();
console.log(market.inventory);
