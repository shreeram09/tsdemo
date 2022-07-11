export const pi:number=3.14;
export class Circle{
    private radius:number;
    constructor(radius:number){
        this.radius=radius;
        console.log(this)
    }
    getArea(){
        return pi*this.radius*this.radius;
    }
}

var obj = new Circle(10);
console.log(obj.getArea());
