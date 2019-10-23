import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import axios from "axios";
import "../../css/Global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {NavLink} from 'react-router-dom';
import Header from "../Header/Header";
import * as actionTypes from "../../store/actionTypes";


class EditProduct extends Component {
  state = {
    clicked: false,
    tmpProdName: "",
    errTmpProdName: "",
    tmpProdDescription: "",
    errTmpProdDescription: "",
    tmpProdType: "",
    errTmpProdType: "",
    tmpPurchaseDate: "",
    errTmpPurchaseDate: "",
    tmpProdPrice: 0,
    errTmpProdPrice: "",
    date: "",
    purchaseDate: "",
    data: []
  }


  componentDidMount() {
    this.getDate();
    var date = { currentTime: new Date().toLocaleString() };
    console.log(date);
    axios.get(`http://localhost:8080/api/products/${this.props.editId}`) 
          .then(res => {
            this.setState({ 
              tmpProdName: res.data.product_name,
              tmpProdDescription: res.data.product_description,
              tmpProdType: res.data.product_type,
              tmpPurchaseDate: res.data.purchase_date ,
              tmpProdPrice: res.data.product_price
             });
          }); 

  }

  componentWillUnmount() {
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        this.props.init(response.data);
      });

  }

  handleChangeProdName = e => {
    if (e.target.value.length <= 8) {
      this.setState({ tmpProdName: e.target.value });
      this.setState({ errTmpProdName: "" });
      // this.props.setTmpProdName(e.target.value);
      // this.props.setErrTmpProdName("");
    } else {
      this.setState({ errTmpProdName: "8 character is max" });
      // this.props.setErrTmpProdName("8 character is max");
    }
  };

  handleChangeProdDescription = e => {
    if (e.target.value.length <= 20) {
      this.setState({ tmpProdDescription: e.target.value });
      this.setState({ errTmpProdDescription: "" });
    } else {
      this.setState({ errTmpProdDescription: "20 character is max" });
    }
  };
  handleChangeProdType = e => {
    if (e.target.value.length <= 10) {
      this.setState({ tmpProdType: e.target.value });
      this.setState({ errTmpProdType: "" });
    } else {
      this.setState({ errTmpProdType: "10 character is max" });
    }
  };
  //DA SE DOSREDI DATUM DA E VALIDEN 
  handleChangePurchaseDate = e => {
    // if (e.target.value.length <= 8) {
    this.setState({ tmpPurchaseDate: e.target.value});
    this.setState({ purchaseDate: new Date(e.target.value).toJSON().slice(0, 10).replace(/-/g, '/') })
    this.setState({ errTmpPurchaseDate: "" });

    // } else {
    //   this.setState({ errTmpPurchaseDate: "8 character is max" });
    //}
  };
  getDate = () => {
    var date = { currentTime: new Date().toLocaleString() };

    this.setState({
      date: date
    });
  }

  handleChangeProdPrice = e => {
    if (isNaN(e.target.value.length)) {
      this.setState({ errTmpProdPrice: "Value must be Number" });

    } else {
      this.setState({ tmpProdPrice: e.target.value });
      this.setState({ errTmpProdPrice: "" });
    }
  };

  handleOnSubmit = (e) => {

    e.preventDefault();
    var bodyFormData = {
      "product_name": this.state.tmpProdName,
      "product_description": this.state.tmpProdDescription,
      "product_type": this.state.tmpProdType,
      "purchase_date": this.state.purchaseDate,
      "product_price": this.state.tmpProdPrice,
      "user_name": this.props.userName
    }
    axios.put(`http://localhost:8080/api/products/${this.props.editId}`, bodyFormData)
      .then(res => {
        if(res.status === 200){
          this.setState({ 
            errTmpProdName: "",
            errTmpProdDescription: "",
            errTmpProdType: "",
            errTmpPurchaseDate: "" ,
            errTmpProdPrice: "",
            clicked: true
           });
        }
      });

  }

  render() {

    //Check and redirect to products component
    if (this.state.clicked === true) {
      return <Redirect to='/products' />
    }
    return (
      <>
        <Header />
        <div className="dashboard-container">
          <div className="column">
            <div className="dashboard-container-head">
              <h1>Edit Product</h1>
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
                      value={this.state.tmpProdName}
                    />
                    <br />
                    {
                      this.state.errTmpProdName !== '' ? <p>{this.state.errTmpProdName}</p> : null
                    }

                    <label for="productDescription">Product Description:</label>
                    <input
                      className="border-radius form-input"
                      type="text"
                      name="productDescription"
                      onChange={this.handleChangeProdDescription}
                      value={this.state.tmpProdDescription}
                    />
                    <br />
                    {
                      this.state.errTmpProdDescription !== '' ? <p>{this.state.errTmpProdDescription}</p> : null
                    }

                    <label for="productType">Product Type:</label>
                    <input
                      className="border-radius form-input"
                      type="text"
                      name="productType"
                      onChange={this.handleChangeProdType}
                      value={this.state.tmpProdType}
                    />
                    <br />
                    {
                      this.state.errTmpProdType !== '' ? <p>{this.state.errTmpProdType}</p> : null
                    }
                    <label for="purchaseDate">Purchase Date:</label>
                    <input
                      className="border-radius form-input"
                      type="text"
                      name="purchaseDate"
                      // max="2019-10-12"
                      required
                      onChange={this.handleChangePurchaseDate}
                      value={this.state.tmpPurchaseDate}
                    />
                    <br />
                    {
                      this.state.errTmpPurchaseDate !== '' ? <p>{this.state.errTmpPurchaseDate}</p> : null
                    }
                    <label for="productPrice">Product Price:</label>
                    <input
                      className="border-radius form-input"
                      type="text"
                      name="productPrice"
                      onChange={this.handleChangeProdPrice}
                      value={this.state.tmpProdPrice}
                    />
                    <br />
                    {
                      this.state.errTmpProdPrice !== '' ? <p>{this.state.errTmpProdPrice}</p> : null
                    }
                    <button className="border-radius button-solid">
                      EDIT PRODUCT
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
                        You are editing the selected product.
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
     userName: state.userName,
     editId: state.editId
   
  };
};

const mapDispatchToProps = dispatch => {
  return {

    init: products => dispatch(actionTypes.initGlobalState(products))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProduct);
