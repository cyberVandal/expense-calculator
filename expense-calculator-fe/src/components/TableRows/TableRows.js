import React from "react";
import "../../css/Global.css";
import EditDeleteIcon from "../EditDeleteIcon/EditDeleteIcon";

function TableRow(props) {
  return (
    <>
      {props.products.map(product => (
       // product.purchase_date.slice(0, 4) === props.year ? (
           <tr key={product.id}>
              <td>{product.product_name}</td>
              <td>{product.product_type}</td>
              <td>{product.product_description}</td>
              <td>{product.purchase_date}</td>
              <td>{product.product_price}</td>
              <td>
                {props.sectionStatus === "products" ? (
                  <EditDeleteIcon 
                      click={() => props.clickAlert(product._id)} 
                      clickEdit={() => props.clickEdit(product._id)}
                    />
                ) : (
                    " "
                  )
            }
              </td>
            </tr>//) : ("")
       
        
      ))}
    </>
  );
}

export default TableRow;
