//Union types are used when a value can be more than a single type.
//Such as when a property would be string or number.
//Using the '|' = or  we are saying our parameter is a string or number

function numBer(num: string | number) {
    console.log(`= ${num}`);
}
numBer(5);
numBer('Five');