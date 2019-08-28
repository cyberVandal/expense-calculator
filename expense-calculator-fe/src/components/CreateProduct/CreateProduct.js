import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "../../css/Global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {NavLink} from 'react-router-dom';
import Header from "../Header/Header";
import * as actionTypes from "../../store/actionTypes";


class CreateProduct extends Component {

  handleChangeProdName = e => {
    // console.log("TMP PROD NAME" + this.props.tmpEmail + "  ERR EMAIL : " + this.props.errEmail);
    if (e.target.value.length <= 8) {
      this.props.setTmpProdName(e.target.value);
      this.props.setErrTmpProdName("");
      // this.setState({ errName: "", tmpName: e.target.value });
    } else {
      this.props.setErrTmpProdName("8 character is max");
      // this.setState({ errName: "8 character is max" });
    }
  };
  handleChangeProdDescription = e => {
    // console.log("TMP PROD NAME" + this.props.tmpEmail + "  ERR EMAIL : " + this.props.errEmail);
    if (e.target.value.length <= 8) {
      this.props.setTmpProdDescription(e.target.value);
      //this.props.setErrTmpProdName("");
      // this.setState({ errName: "", tmpName: e.target.value });
    } else {
      //this.props.setErrTmpProdName("8 character is max");
      // this.setState({ errName: "8 character is max" });
    }
  };

  handleOnSubmit = (e) => {
    console.log("KLIKNATO GORE")
    e.preventDefault();
    // var bodyFormData = new FormData();
    // bodyFormData.set('product_name', 'Jogurt');
    // bodyFormData.set('product_description', 'Mlechen Proizvod');
    // bodyFormData.set('product_type', 'Mleko Kiselo');
    // bodyFormData.set('purchase_date', '20.07.2019');
    // bodyFormData.set('product_price', 400);
    var bodyFormData = {
      "product_name": this.props.tmpProdName,
      "product_description": "Alkoholen Pijalok",
      "product_type": "Mleko Kiselo",
      "purchase_date": "20.07.2019",
      "product_price": 600
    }


    axios.post('http://localhost:8080/api/products', bodyFormData);
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:8080/api/products',
    //   data: bodyFormData,
    //   config: { headers: { 'Content-Type': 'multipart/form-data' } }
    // })
    //   .then(function (response) {
    //     //handle success
    //     console.log(response);
    //   })
    //   .catch(function (response) {
    //     //handle error
    //     console.log(response);
    //   });

    console.log("Kliknato e !!!")
  }

  render() {
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
                  <form onSubmit={this.handleOnSubmit}>
                    <label for="productName">Product Name:</label>
                    <input
                      className="border-radius form-input"
                      type="text"
                      name="productName"
                      onChange={this.handleChangeProdName}
                      value={this.props.tmpProdName}
                    />
                    <br />
                    {
                      this.props.errTmpProdName !== '' ? <p>{this.props.errTmpProdName}</p> : null
                    }

                    <label for="productDescription">Product Description:</label>
                    <input
                      className="border-radius form-input"
                      type="text"
                      name="productDescription"
                      onChange={this.handleChangeProdDescription}
                      value={this.props.tmpProdDescription}
                    />
                    <label for="productType">Product Type:</label>
                    <input
                      className="border-radius form-input"
                      type="text"
                      name="productType"
                    />
                    <label for="purchaseDate">Purchase Date:</label>
                    <input
                      className="border-radius form-input"
                      type="text"
                      name="purchaseDate"
                    />
                    <label for="productPrice">Product Price:</label>
                    <input
                      className="border-radius form-input"
                      type="text"
                      name="productPrice"
                    />
                    <button className="border-radius button-solid">
                      CREATE PRODUCT
                    </button>
                  </form>
                </div>
                <div className="create-product-right">
                  <div className="column">
                    <span
                      style={{ display: "inline-block", textAlign: "center" }}
                    >
                      <FontAwesomeIcon icon="plus-circle" size="7x" />
                    </span>
                    <br />
                    <h1 style={{ display: "inline-block", color: "#8D8D8D" }}>
                      You are creating a new product
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

}

const mapStateToProps = state => {
  return {
    tmpProdName: state.tmpProdName,
    errTmpProdName: state.errTmpProdName,
    tmpProdDescription: state.tmpProdDescription
    // sectionStatus: state.sectionStatus,
    // alertStatus: state.alertStatus,
    // deleteId: state.deleteId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTmpProdName: tmp => dispatch(actionTypes.setTmpProdName(tmp)),
    setErrTmpProdName: err => dispatch(actionTypes.setErrTmpProdName(err))
    // init: products => dispatch(actionTypes.initGlobalState(products)),
    // removeProduct: id => dispatch(actionTypes.removeProduct(id)),
    // setSectionStatus: status => dispatch(actionTypes.setSectionStatus(status)),
    // setAlertStatus: id => dispatch(actionTypes.setAlertStatus(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProduct);
