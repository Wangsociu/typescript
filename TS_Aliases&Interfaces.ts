//Alia
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel,
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

console.log(car);

//Interfaces
interface champ {
    Reyna: number,
    phoenix: number,
}
const champ:champ = {
    Reyna: 2020,
    phoenix: 2020,
};
console.log(champ);
interface champ1 extends champ {
    Sova: number,
}
const champ1:champ1 = {
    Reyna: 2012,
    phoenix: 2103,
    Sova: 2132,
}
console.log(champ1);
// 'extends' plus something new.

