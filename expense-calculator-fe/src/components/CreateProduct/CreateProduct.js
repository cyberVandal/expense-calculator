import React from "react";
import "./CreateProduct.css";
import {NavLink} from 'react-router-dom';
import Header from "../Header/Header";

function CreateProduct() {
  return (
      <>
        <Header />
        <div className="dashboard-container">

            
            <div className="column">
                <div className="dashboard-container-head">
                        <h1>New Product</h1>     
                </div>
                
                <div className="dashboard-container-table">
                        

                </div>
            </div>
  
        </div>
    </>
  );
}

export default CreateProduct;
