//Casting with as Dùng để đè biến

let v : unknown = 'hello';
console.log((v as string).length);

// <> same as

let x : unknown = 'hello';
console.log((<string>v).length);

