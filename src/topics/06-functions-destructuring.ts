export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0 
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250
}

export interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}



export function taxCalculation( options:TaxCalculationOptions ): [number, number] {

    const { tax: impuestos, products: productos} = options;

    let total = 0;

    productos.forEach( ({price}) => {
        total += price;
    });

    return [total, total* impuestos]

}



const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax,

})   



console.log('Total', total)
console.log('Tax', taxTotal)

//export {};