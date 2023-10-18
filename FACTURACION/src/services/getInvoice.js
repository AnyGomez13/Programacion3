import { invoice } from "../data/invoice";

export const getInvoice = () => {
    const total = calcularTotal(invoice.items)
    return {...invoice, total};
}

export const calcularTotal = (items =[])=>{
    return items
        //Map para calcular el flujo
        .map(item => item.price * item.quantity)
        //metodo reduce
        .reduce((accumulator, currentValue) => accumulator+currentValue, 0)
}