import { useState } from "react"

export const FormItemsView = ({ handler }) => {
    const [FormItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
    });

    const { product, price, quantity } = FormItemsState;

    const onInputChange = ({ target: { name, value } }) => {
        //set se usa para guardar
        setFormItemsState({
            ...FormItemsState,
            [name]: value
        });
    }

    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault()
        //Validaciones                                
        if (product.trim().length <= 1) return;
        if (price.trim().length <= 1) return;
        //Validacion del precio
        if (isNaN(price.trim())) {
            alert('El precio solo admite numeros');
            return;
        }
        if (quantity.trim().length < 1) return;
        //Validacion de la cantidad
        if (isNaN(quantity.trim())) {
            alert('El precio solo admite numeros');
            return;
        }

        handler(FormItemsState);

        //Limpiar los input desde de enviar
        setFormItemsState({
            product: '',
            price: '',
            quantity: '',
        })
    }

    return (
        <>
            { /* Crear el formulario */}
            <form className="w-5" onSubmit={onInvoiceItemsSubmit}>
                <input
                    type="text"
                    name="product"
                    value={product}
                    placeholder="Producto"
                    className="form-control m-3"
                    onChange={onInputChange}
                />
                <input
                    type="text"
                    name="price"
                    value={price}
                    placeholder="Precio"
                    className="form-control m-3"
                    onChange={event => onInputChange(event)}
                />
                <input
                    type="text"
                    name="quantity"
                    value={quantity}
                    placeholder="Cantidad"
                    className="form-control m-3"
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary m-3">
                    Nuevo Item
                </button>
            </form>
        </>
    )
}