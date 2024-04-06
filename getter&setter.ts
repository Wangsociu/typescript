class Person {
    private _age:number;
    public name:string;
    constructor(age:number,name:string) {
        this._age = age;
        this.name = name;
    }
    //getter
    get age(){
        return this._age
    }
    //setter
    set age(age2:number) {
        if (age2<0 || age2 > 150) {
            throw Error ("Invalid Age")
        }
        this._age = age2;
    }
}
let person = new Person(25,'Lung Linh');
let checkage = person.age; //getter
person.age = 69  //setter
//person.age = 30 //setter
console.log('>>> check age: ',person);

