let u = true;
u = "string"; // error: type = 'string' not 'boolean
math.round(u); // not number

// any = any type ...
let v: any = true;
v = 'string';
console.log(Math.round(v)); // out = Nahh
console.log(v);
//never ffectively throws an error whenever it is defined.