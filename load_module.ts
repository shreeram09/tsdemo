//to make a class or const variable available to other classes/typescripts 
//decorate variable or class with 'export' keyword 
//add 'import * from' statement in utilizing class/typescript
import { Circle ,pi as PI} from "./class_demo";

var obj = new Circle(10);
console.log(obj.getArea());
console.log(PI);
