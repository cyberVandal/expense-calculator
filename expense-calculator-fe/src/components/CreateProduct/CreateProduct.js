import React from "react";
import "./CreateProduct.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {NavLink} from 'react-router-dom';
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
                   
                      <div className="create-product">
                              <div className="create-product-left">
                                      <form action="">
                                          <label for="email">Product Name:</label>
                                          <input className="border-radius form-input" type="text" name="productName" />
                                          <label for="email">Product Description:</label>
                                          <input className="border-radius form-input" type="text" name="productDescription" />
                                          <label for="email">Product Type:</label>
                                          <input className="border-radius form-input" type="text" name="productType" />
                                          <label for="email">Purchase Date:</label>
                                          <input className="border-radius form-input" type="text" name="purchaseDate" />
                                          <label for="email">Product Price:</label>
                                          <input className="border-radius form-input" type="text" name="productPrice" />
                                          <button className="border-radius button-solid">CREATE PRODUCT</button>
                                      </form>
                              </div>
                              <div className="create-product-right" >
                                  <div className="column">
                                      <span style={{display:"inline-block", textAlign:"center"}}><FontAwesomeIcon icon="plus-circle" size="7x" /></span>
                                      <br />
                                      <h1 style={{display:"inline-block", color:"#8D8D8D"}}>You are creating a new product</h1>
                                  </div>
                                      
                              </div>
                                  
                      </div>
                  
                </div>
            </div>
        </div>
    </>
  );
}

export default CreateProduct;
