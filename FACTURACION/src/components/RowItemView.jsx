import PropTypes from "prop-types";

export const RowItemView = ({product, price, quantity})=>{
    return (
        <>
            <tr>
                <th>{product}</th>
                <th>{price}</th>
                <th>{quantity}</th>
            </tr>
        </>
    )
}

RowItemView.propTypes={
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}
