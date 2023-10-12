import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView"; 
import { useState } from "react";



export const InvoiceApp = () => {
    //como se estructura un objeto
    const {id, name, client, company, items: itemsInitial, total} = getInvoice();
    //Definir los estados // [] son arreglos
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');
    const [items, setItems] = useState(itemsInitial)

    const [counter, setCounter] = useState(4);
    return(
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        Ejemplo Factura
                    </div>
                    <div className="card-body">
                        <InvoiceView id= {id} name = {name}/>
                        <div className="row my-3">
                            <div className="col">
                                {/* Datos del cliente */}
                                <ClientView title="Datos del Cliente" client= {client} />
                            </div>
                            <div className="col ">
                                { /* Datos de la empresa*/ }
                                <CompanyView title="Datos de la Empresa" company = {company} />
                            </div>
                        </div>
                        {/* Datos de la factura */}
                        <ListItemsView title="Productos de la Factura" items={items} />
                        <TotalView total= {total} />
                        { /* Crear el formulario */ }
                        <form className="w-50" onSubmit={
                            event => {
                                event.preventDefault()

                                //Validaciones                                
                                if(productValue.trim().length <= 1) return;
                                if(priceValue.trim().length <= 1) return;
                                //Validacion del precio
                                if(isNaN(priceValue.trim())){
                                    alert('El precio solo admite numero')
                                    return;
                                }
                                if( quantityValue.trim().length< 1) return;
                                //Validacion de la cantidad
                                if (isNaN(quantityValue.trim())){
                                    alert('El precio solo admite numero')
                                    return;
                                }
                                //Mantener los item y agregar uno nuevo
                                setItems([...items, {
                                    id: counter,
                                    //.trim para quitar espacio en blanco a la izquierda o derecha
                                    product: productValue.trim(),
                                    //Primera forma de convertir de string a numero
                                    price: +priceValue.trim(),
                                    //Segunda forma de convertir de string a numero
                                    quantity: parseInt(quantityValue.trim(),10)
                                }])
                                //Limpiar los input desde de enviar
                                setProductValue('');
                                setPriceValue('');
                                setQuantityValue('');
                                setCounter(counter + 1);
                            }}>
                            
                            <input
                                type= "text"
                                name= "product"
                                value={productValue}
                                placeholder="Producto"
                                className="form-control m-3"
                                onChange={event => {
                                    console.log(event.target.value)
                                    //Set se usa para guardar
                                    setProductValue(event.target.value)
                                }}
                            />
                            <input
                                type="text"
                                name="price"
                                value={priceValue}
                                placeholder="precio"
                                className="form-control m-3"
                                onChange={event => {
                                    console.log(event.target.value)
                                    setPriceValue(event.target.value)
                                }}
                            />
                            <input
                                type="text"
                                name="quantity"
                                value={quantityValue}
                                placeholder="Cantidad"
                                className="form-control m-3"
                                onChange={event => {
                                    console.log(event.target.value)
                                    setQuantityValue(event.target.value)
                                }}
                            />
                            <button type="submit" className="btn btn-primary"> Crear Item </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}