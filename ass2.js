
/*Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard
 */
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// filter to get instock products 
let d1=cart.filter((element)=>element.inStock==true)
console.log("Instock produvcts Are:",d1);


// map() new array with (name ,totalprice)
  let d2 = cart.map((product) => {
  let totalPrice = product.price * product.quantity;
  return { name: product.name, totalPrice };
});
console.log(d2)

//reduce() caluculate grand total value of cart
let d3= cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
console.log(d3)

//find() details of mouse 
let d4=cart.find((element)=>element.name=="Mouse")
 console.log("the details of mouse:",d4);

//findindex() position of keyboard

let d5=cart.findIndex((element)=>element.name="Keyboard")
 console.log("index of keyboard:",d5)




