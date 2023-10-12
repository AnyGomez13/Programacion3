import { invoice } from "../data/invoice";

export const getInvoice = () => {
    const total = invoice.items
    //Map para calcular el flujo
    .map(item => item.price * item.quantity)
    //Metodo reduce
    .reduce((accumulator, currentValue) => accumulator +  currentValue, 0)
    //Trae toda la informacion
    return {...invoice, total};
}