import React from "react";
import "../../css/Global.css";
import EditDeleteIcon from "../EditDeleteIcon/EditDeleteIcon";

function TableRow(props) {
  return (
    <>
      {props.products.map(product => (
        <tr key={product.id}>
          <td>{product.productName}</td>
          <td>{product.productType}</td>
          <td>{product.productDescription}</td>
          <td>{product.purchaseDate}</td>
          <td>{product.productPrice}</td>
          <td>
            {props.sectionStatus === "products" ? (
              <EditDeleteIcon click={() => props.clickAlert(product.id)} />
            ) : (
              " "
            )}
          </td>
        </tr>
      ))}
    </>
  );
}

export default TableRow;
