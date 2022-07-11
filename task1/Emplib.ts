export class Employee{
    private id:number;
    private name:string;
    private salary:number;

    constructor(id?:number,name?:string,salary?:number){
        this.id=id||0;
        this.name=name||'';
        this.salary=salary||0.0;
    }
    
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getSalary(){
        return this.salary;
    }
}