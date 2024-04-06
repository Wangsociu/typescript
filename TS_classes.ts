class Person {
  name:string;
  age:number;
  constructor(name:string,age:number) {
    this.name=name;
    this.age=age;
  }
  getFullname():string{
    return`${this.name} ${this.age}`
  }
}
let Nah = new Person("linh",25);
console.log(">>check class: ",Nah.getFullname());
