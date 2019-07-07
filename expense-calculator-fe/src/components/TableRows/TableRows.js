import React from "react";
import "../../css/Global.css"
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TableRow(props) {
    return (
        <>
            {
                props.products.map(product => <tr key={product.id}>

                    <td>{product.productName}</td>
                    <td>{product.productType}</td>
                    <td>{product.productDescription}</td>
                    <td>{product.purchaseDate}</td>
                    <td>{product.productPrice}</td>
                    <td>
                        <span>
                            <FontAwesomeIcon icon="edit" />
                        </span>
                        <span style={{ marginLeft: "10px" }} onClick={() => props.click(product.id)}>
                            <FontAwesomeIcon icon="trash-alt" />
                        </span>
                    </td>
                </tr>

                )
            }
        </>
    );
}

export default TableRow;
