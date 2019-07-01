import React, {Component} from "react";
import './Expenses.css';
import {NavLink} from 'react-router-dom';

class  Expenses extends Component {
    render(){
        return (
            <>
            <div className="dashboard-header">
             <div className="buttons-holder">
                    <NavLink className="nav-link"  exact  to="/products"> <button className="button-ghost border-radius">PRODUCTS</button></NavLink> 
                    <NavLink className="nav-link"  exact  to="/expenses"> <button className="button-ghost border-radius">EXPENSES</button></NavLink> 
             </div>
             <div className="avatar-holder">
                    <img className="avatar-img" src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083376__340.jpg" alt="Smiley face" />
                <span>Milena Spasovska</span>
             </div>
          </div>
        <div className="dashboard-container">

                
                <div className="column">
                    <div className="dashboard-container-head">
                            <h1>Expenses</h1>     
                </div>
                <div className="margin-left">
                    <button className="tab-button border-radius">MONTHLY</button>
                    <button className="tab-button border-radius">YEARLY</button>
                    <label className="margin-left">Choose Month</label>
                    <select className="border-radius">
                            <option value="volvo">Day</option>
                            <option value="saab">Mounth</option>
                            <option value="opel">Year</option>
                           
                    </select>
                 </div>
                <div className="dashboard-container-table">
                        <table >
                                <tr>
                                  <th>Product Name</th>
                                  <th>Product Type</th>
                                  <th>Product Description</th>
                                  <th>Purchase Date</th>
                                  <th>Product Price</th>
                                  <th></th>
                                </tr>      
                                <tr>
                                  <td>Alfreds Futterkiste</td>
                                  <td>Maria Anders</td>
                                  <td>Germany</td>
                                  <td>Germany</td>
                                  <td>Marie Bertrand</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Berglunds snabbköp</td>
                                  <td>Christina Berglund</td>
                                  <td>Sweden</td>
                                  <td>Sweden</td>
                                  <td>Marie Bertrand</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Centro comercial Moctezuma</td>
                                  <td>Francisco Chang</td>
                                  <td>Mexico</td>
                                  <td>Mexico</td>
                                  <td>Marie Bertrand</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Ernst Handel</td>
                                  <td>Roland Mendel</td>
                                  <td>Austria</td>
                                  <td>Roland Mendel</td>
                                  <td>Marie Bertrand</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Island Trading</td>
                                  <td>Helen Bennett</td>
                                  <td>UK</td>
                                  <td>UK</td>
                                  <td>Marie Bertrand</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Königlich Essen</td>
                                  <td>Philip Cramer</td>
                                  <td>Germany</td>
                                  <td>Philip Cramer</td>
                                  <td>Marie Bertrand</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Laughing Bacchus Winecellars</td>
                                  <td>Yoshi Tannamuri</td>
                                  <td>Canada</td>
                                  <td>Yoshi Tannamuri</td>
                                  <td>Marie Bertrand</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Magazzini Alimentari Riuniti</td>
                                  <td>Giovanni Rovelli</td>
                                  <td>Italy</td>
                                  <td>Giovanni Rovelli</td>
                                  <td>Marie Bertrand</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>North/South</td>
                                  <td>Simon Crowther</td>
                                  <td>UK</td>
                                  <td>Simon Crowther</td>
                                  <td>Marie Bertrand</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Paris spécialités</td>
                                  <td>Marie Bertrand</td>
                                  <td>France</td>
                                  <td>Marie Bertrand</td>
                                  <td>Marie Bertrand</td>
                                  <td></td>
                                </tr>
                              </table>

                </div>
            </div>
           

           
           
        </div>
        <footer> 
            <h2>Total spent: 1250 den.</h2>
        </footer>    
            </>
          );
    }
 
}

export default Expenses;
