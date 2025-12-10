export const name = "Super hiper mega market";
export const inventory = ["manzana", "pera", "naranja"];
const product = {
  id: 1,
  name: "plátano",
  price: 10,
  stock: 100,
};

export function addItem(item) {
  inventory.push(item);
}

// export { product as p1, inventory, addItem };

export function removeLastItem() {
  inventory.pop();
}

// export default { removeLastItem };

// export const marketModule = (function () {
//   const name = "Super hiper mega market";
//   const inventory = ["manzana", "pera", "naranja"];
//   const product = {
//     id: 1,
//     name: "plátano",
//     price: 10,
//     stock: 100,
//   };

//   const password = "123456";

//   function addItem(item) {
//     inventory.push(item);
//   }

//   function removeLastItem() {
//     inventory.pop();
//   }

//   return {
//     name,
//     inventory,
//     addItem,
//     removeLastItem,
//   };
// })();
