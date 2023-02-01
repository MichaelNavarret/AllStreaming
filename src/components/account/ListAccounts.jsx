import React, { Component } from "react";
import AccountService from "../../services/AccountService";
import { Link } from "react-router-dom";
import TableListAccount from "./TableListAccount";
import ListTypeAccounts from '../typeAccount/ListTypeAccounts'
import ListTypeState from '../typeState/ListTypeState'

export class ListAccounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeId: "",
      typeState: "",
    };

    this.changeTypeAccount = this.changeTypeAccount.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    AccountService.getAccounts().then((res) => {
      this.setState({ accounts: res.data });
    });
  }

  changeTypeAccount=(e)=>{
    console.log(e.target.value);
    this.setState({typeId: e.target.value});
  }

  changeState=(e)=>{
    console.log(e.target.value);
    this.setState({typeState: e.target.value});
  }

  render() {
      return (
        <div>
          <div>

          <h2 className="text-center m-5">Cuentas de Servicios de Streaming</h2>
          
          

          
          
          

          </div>

          <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-sm-4">
                <Link to="/create-account">
                  <button className="btn btn-warning m-2 shadow p-3 mb-5 rounded">Crear Cuenta</button>
                </Link>
                <Link to="/create-typeAccount">
                  <button className="btn btn-dark m-2 shadow p-3 mb-5 rounded">
                    Añadir Servicio Streaming
                  </button>
                </Link>
                </div>
                <div className="col-sm-2"></div>
                <div className="col-sm-6">
                  <label className="m-2"><strong>Filtros de busqueda:</strong> </label>
                  <select name="typeAccount" id="typeAccount" onChange={this.changeTypeAccount}>
                      <option defaultValue={true} value = {""} >Seleccione el tipo de cuenta</option>
                      <ListTypeAccounts />
                  </select>
                  <select className="m-2" name="typeState" id="typeState" onChange={this.changeState}>
                      <option defaultValue={true} value = {""} >Seleccione el estado</option>
                      <ListTypeState />
                  </select>
                </div>
              </div>
          </div>
          <br/>
          <div className="row">
            <TableListAccount typeId = {this.state.typeId} stateId ={this.state.typeState}/>
          </div>
        </div>
      );
    }
  }

export default ListAccounts;
