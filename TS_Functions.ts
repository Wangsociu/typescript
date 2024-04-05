//syntax function name(para) : ... {}

function sum1(a:number,b:number) {
    return a + b;
}
console.log(sum1(1,10));
//syntax const name = (parameter): .... => {}
const sum2 = (a:number,b:number):number => {
    return a + b;
}
console.log(sum2(2,5));

//syntax 'tupe name = (parameter) => ....;
type sum3 = (x:number,y:number) => number;
const checksum: sum3 = (x,y) => {
    return x+y;
}
console.log(checksum(2,5));
