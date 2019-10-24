import React, { Component } from "react";
import "./Products.css";
import "../../css/Global.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actionTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import TableRows from "../TableRows/TableRows";
//import EditDeleteIcon from "../EditDeleteIcon/EditDeleteIcon";
//import Alert from "../Alert/Alert";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      deleteId: 0
    };
  }
  componentDidMount() {
    this.props.setSectionStatus("products");

    axios.get('http://localhost:8080/api/products')
      .then(response => {
        var userProducts = [];
        for (let i = 0; i < response.data.length; i++) {
        if(response.data[i].user_name === this.props.userName){

            userProducts.push(response.data[i]);
         }
        }
        this.props.init(userProducts);
      });
   
  }

  removeProductHandler = id => {
    axios.delete(`http://localhost:8080/api/products/${id}`)
      .then(response => {
        if(response.status === 200){
          this.productsUpdate();
          this.props.removeProduct(id);
        }
      } );
  };

  editHandler = id => {
    this.props.setEditId(id);
    this.props.history.push('/edit-product');

  };

  alertHandler = id => {
    this.props.setAlertStatus(id);
  };

  productsFilter = () => {
    //product.purchase_date.slice(0, 4) === props.year ? (
    //product.user_name === props.userName ? (
  };

  productsUpdate = () =>{
    axios.get('http://localhost:8080/api/products')
    .then(response => {
      var userProducts = [];
      for (let i = 0; i < response.data.length; i++) {
      if(response.data[i].user_name === this.props.userName){

          userProducts.push(response.data[i]);
       }
      }
       this.props.init(userProducts);
    });
  }

  render() {
    return (
      <>
        <Header />
        <div class="dashboard-container">
          <NavLink className="nav-link" exact to="/create-product">
            <button className="fixed-button border-radius">ADD NEW</button>
          </NavLink>
          <div className="column">
            <div className="dashboard-container-head">
              <div>
                <h1>Products</h1>
              </div>
              <div>
                <select className="border-radius">
                  <option value="volvo">Day</option>
                  <option value="saab">Mounth</option>
                  <option value="opel">Year</option>
                </select>
              </div>
            </div>
            <div className="dashboard-container-table">
              <table>
                <tr>
                  <th>Product Name</th>
                  <th>Product Type</th>
                  <th>Product Description</th>
                  <th>Purchase Date</th>
                  <th>Product Price</th>
                  <th>Action</th>
                </tr>
                <tbody>
                {/* Tuka Pocnuva Mapiranje ili dinamichna tabela */}
                   {this.props.prods.map(product => (
       
                    <tr key={product.id}>
                        <td>{product.product_name}</td>
                        <td>{product.product_type}</td>
                        <td>{product.product_description}</td>
                        <td>{product.purchase_date}</td>
                        <td>{product.product_price}</td>
                        <td>
                          {this.props.sectionStatus === "products" ? (
                            <>
                            <span className="edit-trash" 
                               
                                onClick={() => this.editHandler(product._id)}
                                >
                                  <FontAwesomeIcon icon="edit" />
                                </span>
                                <span
                                  className="edit-trash"
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => this.alertHandler(product._id)}
                                >
                                  <FontAwesomeIcon icon="trash-alt" />
                            </span>
                            </>
                          ) : (
                              " "
                            )
                      }
                        </td>
                      </tr>
                
                  
                      ))}


                </tbody>
              </table>
            </div>
          </div>
        </div>
        {this.props.deleteId === 0 ? (
          " "
        ) : (
              <div className="alert">
                    <div className="alert-message">
                      <h2>Delete Product</h2>
                      <p>
                      You are will delete this product. Are you sure you want to continue?
                      </p>
                      <div className="alert-button-holder">
                        <button
                          class="delete-button-cancel border-radius"
                          onClick={() => this.alertHandler(0)}
                        >
                          CANCEL
                        </button>
                        <button
                          className="delete-button-delete border-radius"
                          onClick={() => this.removeProductHandler(this.props.deleteId)}
                        >
                          DELETE
                        </button>
                      </div>
                      </div>
                </div>
          )}
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    prods: state.products,
    userName: state.userName,
    sectionStatus: state.sectionStatus,
    alertStatus: state.alertStatus,
    deleteId: state.deleteId,
    year: state.year
  };
};

const mapDispatchToProps = dispatch => {
  return {
    init: products => dispatch(actionTypes.initGlobalState(products)),
    removeProduct: id => dispatch(actionTypes.removeProduct(id)),
    setSectionStatus: status => dispatch(actionTypes.setSectionStatus(status)),
    setAlertStatus: id => dispatch(actionTypes.setAlertStatus(id)),
    setEditId: id => dispatch(actionTypes.setEditId(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
