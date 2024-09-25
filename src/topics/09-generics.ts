

export function whatsMyType<T>(argument: T):T{
//el tipo de dato :any quita cualquier restriccion de typescript
//que tenga el dato. (se debe evitar usar)



    return argument
}


let amIString = whatsMyType<string>('Hola Mundo');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);


console.log( amIString.split(''));
console.log( amINumber.toFixed());
console.log( amIArray.join('-'));
