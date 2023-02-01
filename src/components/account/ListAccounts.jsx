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
      typeId:0,
      typeState:0,
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

  limpiarFiltros(){
    this.setState({typeId: 0});
    this.setState({typeState: 0});
  }
  
  render() {
      return (
        <div>
          <h2 className="text-center m-5">Cuentas de Servicios de Streaming</h2>
          <Link to="/create-account">
            <button className="btn btn-success m-2">Crear Cuenta</button>
          </Link>
          <Link to="/create-typeAccount">
            <button className="btn btn-info m-2">
              Añadir Servicio Streaming
            </button>
          </Link>

          
          <select name="typeAccount" id="typeAccount" onChange={this.changeTypeAccount}>
              <option defaultValue={true} value = {0} >Seleccione el tipo de cuenta</option>
              <ListTypeAccounts />
          </select>
          <select className="m-2" name="typeState" id="typeState" onChange={this.changeState}>
              <option defaultValue={true} value = {0} >Seleccione el estado</option>
              <ListTypeState />
          </select>
          <Link to="/" onClick={this.limpiarFiltros}>
            <button className="btn btn-secondary m-2">
              Limpiar
            </button>
          </Link>
          <div className="row">
            <TableListAccount typeId = {this.state.typeId} stateId ={this.state.typeState}/>
          </div>
        </div>
      );
    }
  }

export default ListAccounts;
