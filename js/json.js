const user = { id: 1, name: "Tonmoy sutradhar", job: "Web-Developer" };
// JavaScript Object Notaion (JSON)
const stingified = JSON.stringify(user);
// console.log(stingified);
// console.log(user);

/*
  OUUPTU ----->>
  {"id":1,"name":"Tonmoy sutradhar","job":"Web-Developer"} ---->> JSON
 { id: 1, name: 'Tonmoy sutradhar', job: 'Web-Developer' } ---->> JS
*/

const shop = {
  owner: "Tonmoy",
  address: {
    street: "khilkhet, vut er goli",
    city: "Dhaka",
    country: "Bangladesh",
  },
  products: ["Laptop", "mic", "monitor", "keyboard"],
  revenue: 50000,
  isOpen: true,
  isNew: false,
};

// conver json string
const stringifield = JSON.stringify(shop);
// conver json parse
const jsparse = JSON.parse(stringifield);

console.log(shop);
console.log(stringifield);
console.log(jsparse);
