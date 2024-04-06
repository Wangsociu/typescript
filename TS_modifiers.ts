//public - (default) allows access to the class member from anywhere
//private - only allows access to the class member from within the class
//protected - allows access to the class member from itself and
//any classes that inherit it, which is covered in the inheritance section below

class Employee {
    public empName: string;
    protected empCode: number;
    constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;
    }
}


class SalesEmployee extends Employee{
    private department: string;
    constructor(name: string,code: number, department: string) {
        super(name, code);
        this.department = department;
    }
}
let emp= new SalesEmployee("aaaa",123,"cccc");

//emp.empCode = "12412";

console.log(">>> check emp: ", emp);
