import { Employee } from './Emplib';

var e1:Employee = new Employee(1,'jash',800000.00);
var e2:Employee = new Employee(2,'shiv',500000.00);
var e3:Employee = new Employee(3,'sima',550000.00);
var e4:Employee = new Employee(4,'lily',1000000.00);
var e5:Employee = new Employee(5,'raghav',700000.00);

let employees:Employee[]=[e1,e2,e3,e4,e5];
var  max:Employee=new Employee();
for(let e of employees){
    if(max.getSalary()<e.getSalary())
        max = e;
}
console.log(
    `the highest earner employee details: 
    ID:${max.getId()},
    Name:${max.getName()},
    Salary:${max.getSalary()}`
);
