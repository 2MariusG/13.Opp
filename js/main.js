import { Dog } from "./Dog.js";

const rexius = new Dog('Rex', 'rudas', 'vokietis');


console.log(rexius.LovedPerson);

rexius.addLovedPerson('Zymantas');
rexius.addLovedPerson('Andrejus');


rexius.introduce();




// Animal (params: name, color; methods: sound, introduce)
//     Pet (params: legsCount, likePlaying, methods: walk)
//         Dog
//         Cat
//         Rabbit
//     Bird (params: wingsCount; methods: fly)
//         Parrot (methods: repeatSound)
//         Sparrow
//         Chicken
//     Fish (params: fin; methods: swim)
//         Goldfish
//         Nemofish
//         Salmon