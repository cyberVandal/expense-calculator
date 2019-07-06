import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Products.css';
import {NavLink} from 'react-router-dom';
import Header from "../Header/Header";

class  Products extends Component {
    render(){
        return (
            <>
            <Header />
            <div class="dashboard-container">
                    <NavLink className="nav-link"  exact  to="/create-product"><button className="fixed-button border-radius">ADD NEW</button></NavLink> 
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
                                <table >
                                        <tr>
                                          <th>Product Name</th>
                                          <th>Product Type</th>
                                          <th>Product Description</th>
                                          <th>Purchase Date</th>
                                          <th>Product Price</th>
                                          <th>Action</th>
                                        </tr>      
                                        <tr>
                                          <td>Alfreds Futterkiste</td>
                                          <td>Maria Anders</td>
                                          <td>Germany</td>
                                          <td>Germany</td>
                                          <td>Marie Bertrand</td>
                                          
                                          
                                          <td><a href="#something" className="nav-link"><span><FontAwesomeIcon icon="edit" /></span><span style={{marginLeft:"10px"}}><FontAwesomeIcon icon="trash-alt" /></span></a></td>
                                        </tr>
                                        <tr>
                                          <td>Berglunds snabbköp</td>
                                          <td>Christina Berglund</td>
                                          <td>Sweden</td>
                                          <td>Sweden</td>
                                          <td>Marie Bertrand</td>
                                          <td> <span><FontAwesomeIcon icon="edit" /></span><span style={{marginLeft:"10px"}}><FontAwesomeIcon icon="trash-alt" /></span></td>
                                        </tr>
                                        <tr>
                                          <td>Centro comercial Moctezuma</td>
                                          <td>Francisco Chang</td>
                                          <td>Mexico</td>
                                          <td>Mexico</td>
                                          <td>Marie Bertrand</td>
                                          <td><span><FontAwesomeIcon icon="edit" /></span><span style={{marginLeft:"10px"}}><FontAwesomeIcon icon="trash-alt" /></span></td>
                                        </tr>
                                        <tr>
                                          <td>Ernst Handel</td>
                                          <td>Roland Mendel</td>
                                          <td>Austria</td>
                                          <td>Roland Mendel</td>
                                          <td>Marie Bertrand</td>
                                          <td><span><FontAwesomeIcon icon="edit" /></span><span style={{marginLeft:"10px"}}><FontAwesomeIcon icon="trash-alt" /></span></td>
                                        </tr>
                                        <tr>
                                          <td>Island Trading</td>
                                          <td>Helen Bennett</td>
                                          <td>UK</td>
                                          <td>UK</td>
                                          <td>Marie Bertrand</td>
                                          <td><span><FontAwesomeIcon icon="edit" /></span><span style={{marginLeft:"10px"}}><FontAwesomeIcon icon="trash-alt" /></span></td>
                                        </tr>
                                        <tr>
                                          <td>Königlich Essen</td>
                                          <td>Philip Cramer</td>
                                          <td>Germany</td>
                                          <td>Philip Cramer</td>
                                          <td>Marie Bertrand</td>
                                          <td><span><FontAwesomeIcon icon="edit" /></span><span style={{marginLeft:"10px"}}><FontAwesomeIcon icon="trash-alt" /></span></td>
                                        </tr>
                                        <tr>
                                          <td>Laughing Bacchus Winecellars</td>
                                          <td>Yoshi Tannamuri</td>
                                          <td>Canada</td>
                                          <td>Yoshi Tannamuri</td>
                                          <td>Marie Bertrand</td>
                                          <td><span><FontAwesomeIcon icon="edit" /></span><span style={{marginLeft:"10px"}}><FontAwesomeIcon icon="trash-alt" /></span></td>
                                        </tr>
                                        <tr>
                                          <td>Magazzini Alimentari Riuniti</td>
                                          <td>Giovanni Rovelli</td>
                                          <td>Italy</td>
                                          <td>Giovanni Rovelli</td>
                                          <td>Marie Bertrand</td>
                                          <td><span><FontAwesomeIcon icon="edit" /></span><span style={{marginLeft:"10px"}}><FontAwesomeIcon icon="trash-alt" /></span></td>
                                        </tr>
                                        <tr>
                                          <td>North/South</td>
                                          <td>Simon Crowther</td>
                                          <td>UK</td>
                                          <td>Simon Crowther</td>
                                          <td>Marie Bertrand</td>
                                          <td><span><FontAwesomeIcon icon="edit" /></span><span style={{marginLeft:"10px"}}><FontAwesomeIcon icon="trash-alt" /></span></td>
                                        </tr>
                                        <tr>
                                          <td>Paris spécialités</td>
                                          <td>Marie Bertrand</td>
                                          <td>France</td>
                                          <td>Marie Bertrand</td>
                                          <td>Marie Bertrand</td>
                                          <td><span><FontAwesomeIcon icon="edit" /></span><span style={{marginLeft:"10px"}}><FontAwesomeIcon icon="trash-alt" /></span></td>
                                        </tr>
                                      </table>
        
                        </div>
                    </div>
                   
                   
            </div>
            <div id="non-something">
              <div id="something" className="something">
                <div className="alert-message">
                    <h2>Delete Product</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi at iusto vel numquam voluptatem odit modi maiores recusandae accusantium.</p>
                    <div className="alert-button-holder">
                      <a href="#non-something"><button class="delete-button-cancel border-radius">CANCEL</button></a>
                        <button className="delete-button-delete border-radius">DELETE</button>
                    </div>
                   
                </div>
            </div>
            </div>    
            </>
          );
    }
 
}

export default Products;
