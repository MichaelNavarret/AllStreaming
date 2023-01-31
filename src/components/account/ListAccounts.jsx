import React, { Component } from "react";
import AccountService from '../../services/AccountService';
import { Link } from 'react-router-dom'
import NameTypeAccount from "../typeAccount/NameTypeAccount";
import NameTypeState from "../typeState/NameTypeState";


export class ListAccounts extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        accounts: [],
      };
    }
  
    componentDidMount(){
      AccountService.getAccounts().then((res) =>{
          this.setState({accounts: res.data})
      });
    }

    deleteAccount(id){
      AccountService.deleteAccount(id).then( res => {
          this.setState({accounts: this.state.accounts.filter(account => account.id !== id)});
      });
  }

  
    render() {
      return (
        <div>
          
          <h2 className="text-center">Lista de Cuentas</h2>
          <Link to="/create-account">
              <button className='btn btn-primary'>Crear Cuenta</button>
          </Link>
          <div className="row">
              <table className="table table-striped table-bordered">
                  <thead>
                      <tr className="text-center">
                          <th>Tipo de cuenta</th>
                          <th>Fecha de Creacion</th>
                          <th>Estado</th>
                          <th>Usuario Actual</th>
                          <th>Fecha Ultimo Arriendo</th>
                          <th>Veces arrendada</th>
                          <th>Precio</th>
                          <th>Login Email</th>
                          <th>Contraseña</th>
                          <th>Acciones</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.accounts.map(
                              account =>
                              <tr key={account.id} className="text-center">
                                  <td><NameTypeAccount id = {account.typeId}/></td>
                                  <td>{account.dateBorn}</td>
                                  <td><NameTypeState id = {account.stateId}/></td>
                                  <td>{account.user}</td>
                                  <td>{account.lastRent}</td>
                                  <td>{account.countRent}</td>
                                  <td>{account.price} CLP</td>
                                  <td>{account.loginEmail}</td>
                                  <td>{account.password}</td>
                                  <td> 
                                    <button onClick={() => redir(account.id)} className="btn btn-info m-2" >Actualizar</button>
                                    <button onClick={() => this.deleteAccount(account.id)} className="btn btn-danger m-2" >Eliminar</button>
                                  </td>
                              </tr>
                          )
                      }
                  </tbody>
              </table>
          </div>
        </div>
      );
    }
  }
  
  export default ListAccounts;

  let redir = (id) => {
    localStorage.setItem("id", id);
    window.location.href = "/update-account";
}