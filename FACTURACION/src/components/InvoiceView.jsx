import PropTypes from "prop-types";

export const InvoiceView = ({id, name}) => {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item"> N° Factura: {id}</li>
                <li className="list-group-item">Tipo Empresa: {name}</li>
            </ul>
        </>
    )
}

InvoiceView.propTypes={
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}