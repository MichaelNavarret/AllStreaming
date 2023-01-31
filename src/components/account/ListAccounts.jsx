import React, { Component } from "react";
import AccountService from "../../services/AccountService";
import { Link } from "react-router-dom";
import NameTypeAccount from "../typeAccount/NameTypeAccount";
import NameTypeState from "../typeState/NameTypeState";

export class ListAccounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
    };
  }

  componentDidMount() {
    AccountService.getAccounts().then((res) => {
      this.setState({ accounts: res.data });
    });
  }

  deleteAccount(id) {
    AccountService.deleteAccount(id).then((res) => {
      this.setState({
        accounts: this.state.accounts.filter((account) => account.id !== id),
      });
    });
  }

  render() {
    if (this.state.accounts.length === 0) {
      return (
        <div>
          <h2 className="text-center m-5">Cuentas de Servicios de Streaming</h2>
          <Link to="/create-account">
            <button className="btn btn-primary m-2">Crear Cuenta</button>
          </Link>
          <Link to="/create-typeAccount">
            <button className="btn btn-info m-2">
              Añadir Servicio Streaming
            </button>
          </Link>
          <h1 className="text-center">Aun no existen cuentas.</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h2 className="text-center m-5">Cuentas de Servicios de Streaming</h2>
          <Link to="/create-account">
            <button className="btn btn-primary m-2">Crear Cuenta</button>
          </Link>
          <Link to="/create-typeAccount">
            <button className="btn btn-info m-2">
              Añadir Servicio Streaming
            </button>
          </Link>
          <div className="row">
            <table className="table table-striped table-dark table-bordered table-hover">
              <thead>
                <tr className="text-center table-light">
                  <th>Servicio</th>
                  <th>Fecha_Creacion</th>
                  <th>Estado</th>
                  <th>Usuario_Actual</th>
                  <th>Ultimo_Arriendo</th>
                  <th>Veces_arrendada</th>
                  <th>Precio_CLP</th>
                  <th>Login Email</th>
                  <th>Contraseña</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.accounts.map((account) => (
                  <tr key={account.id} className="text-center">
                    <td>
                      <NameTypeAccount id={account.typeId} />
                    </td>
                    <td>{account.dateBorn}</td>
                    <td>
                      <NameTypeState id={account.stateId} />
                    </td>
                    <td>{account.user}</td>
                    <td>{account.lastRent}</td>
                    <td>{account.countRent}</td>
                    <td>{account.price} CLP</td>
                    <td>{account.loginEmail}</td>
                    <td>{account.password}</td>
                    <td>
                      <button
                        onClick={() => redir(account.id)}
                        className="btn btn-warning m-2"
                      >
                        Actualizar
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => this.deleteAccount(account.id)}
                        className="btn btn-danger m-2"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default ListAccounts;

let redir = (id) => {
  localStorage.setItem("id", id);
  window.location.href = "/update-account";
};
