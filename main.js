import { Dog } from "./Dog.js";

const rexius = new Dog('Rexius', 'rudas', 'Vokieciu av');
const rexius = new Dog('Brisius', 'pilkas');

console.log(rexius.name);
console.log(rexius.color);

console.log(rexius.introduce());