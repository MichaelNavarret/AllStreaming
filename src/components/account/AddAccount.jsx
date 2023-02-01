import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AccountService from '../../services/AccountService';
import ListTypeAccounts from "../typeAccount/ListTypeAccounts";


export class AddAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
        typeId: 2,
        dateBorn: "",
        stateId: 1,
        user: "",
        lastRent: "",
        countRent: 0,
        price: 0,
        loginEmail: "",
        password: "",
    };
    this.changeLoginEmail = this.changeLoginEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.saveAccount = this.saveAccount.bind(this);
  }


  componentDidMount(){
    AccountService.getAccounts().then((res) =>{
        this.setState({accounts: res.data})
    });

  }
  
  saveAccount = (e) => {
    var today = new Date();
    var day = today.getDate();
    if(day > 0 && day < 10){
        day="0"+day;
    }
    var month = today.getMonth() + 1;
    
    if(month>0 && month < 10){
        month = "0"+month;
    }
    var year = today.getFullYear();
    let formatFecha = (`${year}-${month}-${day}`);

    e.preventDefault();
    let account = { typeId: this.state.typeId, 
                    dateBorn: formatFecha, 
                    stateId: this.state.stateId,
                    user: this.state.user,
                    lastRent: this.state.lastRent,
                    countRent: this.state.countRent,
                    price: this.state.price,
                    loginEmail: this.state.loginEmail,
                    password: this.state.password};
    AccountService.addAccount(account);
    
    alert("Nueva cuenta agregada");
    window.location.href = '/'; 

  }

  changeLoginEmail=(e) =>{
    this.setState({loginEmail: e.target.value})
  }

  changePassword=(e) => {
    this.setState({password: e.target.value})
  }

  changeTypeId=(e) => {
    this.setState({typeId: e.target.value})
  }

  changePrice=(e) => {
    this.setState({price: e.target.value})
  }

  
  
  render() {
    return (
      <div>
        <div className="container">
          <div className="m-4">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h1 className="text-center">Crear Cuenta</h1>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label for="type">Tipo de cuenta: </label>
                    <br/>
                    <select name="lenguajes" id="lang" onChange={this.changeTypeId} required>
                        <option defaultValue={true} value = "0" >Seleccione el tipo de cuenta</option>
                        <ListTypeAccounts />
                    </select>
                  </div>

                  <div className="form-group">
                    <label> Correo de la cuenta:  </label>
                    <input placeholder="Introduzca Correo" type ="email" name="email" className="form-control" value={this.state.loginEmail} onChange={this.changeLoginEmail} required/>
                  </div>

                  <div className="form-group">
                    <label> Contraseña:  </label>
                    <input placeholder="**************" type ="password" name="password" className="form-control" value={this.state.password} onChange={this.changePassword} required/>
                  </div>

                  <div className="form-group">
                    <label> Precio del arriendo </label>
                    <input placeholder="Precio" type ="number" name="price" className="form-control" value={this.state.price} onChange={this.changePrice} required/>
                  </div>
                    
                    <button className="btn btn-warning mt-5" onClick={this.saveAccount}>Crear</button>
                    <Link to="/">
                        <button className="btn btn-dark mt-5" style={{marginLeft: "10px"}}>Cancelar</button>
                    </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAccount;
