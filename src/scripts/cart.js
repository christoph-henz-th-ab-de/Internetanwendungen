// const product_list = ["Desinfektion", "Pflaster", "Verbände", "Kompressen", "Scheren", "Pinzetten", "Masken", "Handschuhe", "Schürzen", "Schutzbrillen", "Haarnetze", "Infusionsständer", "Beutel", "Kanülen", "Sauerstoffmasken", "Sauerstoffflaschen", "Katheter"];

// function initializeLocalStorage() {
//     localStorage.setItem("Total_amount", 0);
//     product_list.forEach(product => localStorage.setItem(product, 0));
//   }

// function increment_cart(storage_key) {
//     const current_value = localStorage.getItem(product_list[storage_key]);
//     const new_value = parseInt(current_value) + 1;
//     localStorage.setItem(product_list[storage_key], new_value.toString());

//     const current_total = localStorage.getItem("Total_amount");
//     const new_total = parseInt(current_total) + 1;
//     localStorage.setItem("Total_amount", new_total.toString());
// }

// localStorage.setItem("Total_amount", 0);

// let total_value = 0;

// for (let i = 0; i < product_list.length; i++) {
//     const number = localStorage.getItem(product_list[i]);
//     if (!isNaN(number)) {
//         total_value += parseInt(number);
//         const current_value = localStorage.getItem("Total_amount");
//         if (!isNaN(current_value)) {
//             const new_value = parseInt(current_value) + parseInt(number);
//             localStorage.setItem("Total_amount", new_value.toString());
//         }
//     }
// }

// const total_amount = parseInt(localStorage.getItem("Total_amount"));
// console.log(total_amount);

// function getProductsInCart() {
//     const productsInCart = [];
//     product_list.forEach((product, index) => {
//       const count = parseInt(localStorage.getItem(product));
//       if (!isNaN(count) && count > 0) {
//         productsInCart.push({name: product, count: count});
//       }
//     });
//     return productsInCart;
//   }

const product_list = [
  "Desinfektion", "Pflaster", "Verbände", "Kompressen", "Scheren", "Pinzetten",
  "Masken", "Handschuhe", "Schürzen", "Schutzbrillen", "Haarnetze",
  "Infusionsständer", "Beutel", "Kanülen", "Sauerstoffmasken",
  "Sauerstoffflaschen", "Katheter"
];

function initializeLocalStorage() {
  localStorage.setItem("Total_amount", 0);
  product_list.forEach(product => localStorage.setItem(product, 0));
}

function increment_cart(storage_key) {
  const product = product_list[storage_key];
  const current_value = parseInt(localStorage.getItem(product));
  const new_value = current_value + 1;
  localStorage.setItem(product, new_value.toString());

  const current_total = parseInt(localStorage.getItem("Total_amount"));
  const new_total = current_total + 1;
  localStorage.setItem("Total_amount", new_total.toString());
}

initializeLocalStorage();

let total_value = product_list.reduce((total, product) => {
  const number = parseInt(localStorage.getItem(product));
  if (!isNaN(number)) {
    total += number;
    localStorage.setItem("Total_amount", total.toString());
  }
  return total;
}, 0);

console.log(total_value);

function getProductsInCart() {
  const productsInCart = [];
  product_list.forEach((product, index) => {
    const count = parseInt(localStorage.getItem(product));
    if (!isNaN(count) && count > 0) {
      productsInCart.push({ name: product, count: count });
    }
  });
  return productsInCart;
}


console.log(getProductsInCart());