import { useEffect, useState } from "react";
import { calcularTotal, getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { FormItemsView } from "./components/FormItemsView";
import './styles/Cardmy-3.css';


const invoiceInitial ={
    id: 0,
    name: '',
    client: {
        name: '',
        lastname: '',
        address: {
            country: '',
            city: '',
            street: '',
            number:0
        },
    },
    company: {
        name:'', 
        fiscalNumber: 0,
    },
    //Arreglos [] y {}objetos
    items:[
    ]
};

export const InvoiceApp = () => {
    const [activeForm, setActiveForm]= useState(false);
    const [total, setTotal]= useState(0);
    const [counter, setCounter] = useState(4);
    const [invoice, setInvoice] = useState(invoiceInitial);
    const [items, setItems] = useState([]);

    //como se estructura un objeto
    const { id, name, client, company } = invoice;

    //solo se ejecuta una vez para se usa useEffect
    useEffect(()=> {
        const data = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.items);
    }, []);
    //calcular el total
    useEffect(()=>{
        setTotal(calcularTotal(items))
    }, [items]);

    //Agregar producto
    const handlerAddItems =({product, price, quantity})=>{
        setItems([...items, {
            id: counter,
            product: product.trim(),
            price: +price.trim(),
            quantity: parseInt(quantity.trim(),10)
        }]);
        setCounter(counter + 1);
    }

    //Eliminar Producto
    const handlerDeleteItem = (id) =>{
        setItems(items.filter(item => item.id !== id))
    }

    return (
        <>
            <div className="container">
                <div className="cardmy-3">
                    <div className="card-header">
                        Factura Electrónica Restaurante
                    </div>
                    <div className="card-body">
                        <InvoiceView id={id} name={name} />
                        <div className="row my-3">
                            <div className="col">
                                {/* Datos del cliente */}
                                <ClientView title="Datos del Cliente" client={client} />
                            </div>
                            <div className="col ">
                                { /* Datos de la empresa*/}
                                <CompanyView title="Datos de la Empresa" company={company} />
                            </div>
                        </div>
                        {/* Datos de la factura */}
                        <ListItemsView title="Productos de la Factura" items={items} handlerDeleteItem={handlerDeleteItem} />
                        <TotalView total={total} />
                        <button className="btn btn-secundary"
                            onClick={setActiveForm}>{!activeForm? 'Agregar Producto': 'Cerrar Formulario'}
                        </button>
                        {/* condicion y || significa simplicar */}
                        {!activeForm || <FormItemsView handler = {handlerAddItems}/>}
                    </div>
                </div>
            </div>
        </>
    )
}