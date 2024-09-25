// function classDecorator(
//     constructor:any
// ){   
//     return class extends constructor{
//         newPorperty = 'New Property'
//         hello = 'override'
//     } 
// }
//Casi no se utilizan los decoradores, mas que nada se utilizan los que vienen por default.
//@classDecorator

export class SuperClass{

    public myProperty: string = 'Abc123'
    print(){
        console.log('Hola Mundo')
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log (myClass)