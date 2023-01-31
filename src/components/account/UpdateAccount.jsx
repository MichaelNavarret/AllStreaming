import React, { Component } from "react";
import { Link  } from 'react-router-dom';
import AccountService from '../../services/AccountService';
import ListTypeAccounts from "../typeAccount/ListTypeAccounts";
import ListTypeState from "../typeState/ListTypeState";


export class UpdateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
        typeId: 2,
        dateBorn: "",
        stateId: 1,
        user: "",
        lastRent: "2010-01-01",
        countRent: 0,
        price: "",
        loginEmail: "",
        password: "",
    };
    this.changeLoginEmail = this.changeLoginEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeTypeId = this.changeTypeId.bind(this);
    this.changeTypeStateId = this.changeTypeStateId.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.changePrice = this.changePrice.bind(this);
    /* this.changeLastRent = this.changeLastRent.bind(this); */
    this.saveAccount = this.saveAccount.bind(this);
  }


  componentDidMount(){
    AccountService.getTypesById(localStorage.getItem("id")).then((res) =>{
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

    let fechaHoy = this.state.accounts.lastRent;
    let increment = this.state.accounts.countRent;
    let usuario = this.state.accounts.user;
    let price = this.state.accounts.price;
    let idType = this.state.accounts.typeId;
    let idState = this.state.accounts.idState;
    let pass = this.state.accounts.password;
    let email = this.state.accounts.loginEmail;

    e.preventDefault();
    if(this.state.stateId === "2"){
        increment = this.state.accounts.countRent + 1;
        usuario = this.state.user;
        fechaHoy = formatFecha;
        console.log(fechaHoy);
    }else{
        usuario = "";
    }

    if(this.state.price !== ""){price = this.state.price;}

    if(this.state.typeId !== 0){idType = this.state.typeId;}
    
    if(this.state.idState !== 0){idState = this.state.stateId;}

    if(this.state.password !== ""){pass = this.state.password}

    if(this.state.loginEmail !== ""){email = this.state.loginEmail}

    let account = { typeId: idType, 
                    dateBorn: this.state.accounts.dateBorn, 
                    stateId: idState,
                    user: usuario,
                    lastRent: fechaHoy,
                    countRent: increment,
                    price: price,
                    password: pass,
                    loginEmail: email};
    AccountService.updateAccount(localStorage.getItem("id"), account);
    console.log(account);
    window.location.href = '/';
  }

/*   changeLastRent=(e) =>{
    this.setState({lastRent: e.targe.value})
  } */

  changeLoginEmail=(e) =>{
    this.setState({loginEmail: e.target.value})
  }

  changePassword=(e) => {
    this.setState({password: e.target.value})
  }


  changeUser=(e) => {
    this.setState({user: e.target.value})
  }

  changeTypeId=(e) => {
    this.setState({typeId: e.target.value})
  }


  changePrice=(e) => {
    this.setState({price: e.target.value})
  }

  changeTypeStateId=(e) =>{
    this.setState({stateId: e.target.value})
  }
  
  
  render() {
    return (
      <div>
        <div className="container">
          <div className="row ">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h1 className="text-center">Editar Cuenta</h1>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label for="type">Tipo de cuenta: </label>
                    <br/>
                    <select name="typeAccount" id="typeAccount" onChange={this.changeTypeId} required>
                        <option defaultValue={true} >Seleccione el tipo de cuenta</option>
                        <ListTypeAccounts />
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="type">Estado: </label>
                    <br/>
                    <select name="typeState" id="typeState" onChange={this.changeTypeStateId} required>
                        <option defaultValue={true}>Seleccione el estado de la cuenta:</option>
                        <ListTypeState />
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label> Usuario </label>
                    <input placeholder="Rellenar solo en caso de arriendo" type ="text" name="user" className="form-control" value={this.state.user} onChange={this.changeUser} required/>
                  </div>

                 {/*  <div className="form-group">
                    <label> Ultima fecha de renta </label>
                    <input  type ="date" name="lastRent" className="form-control" value={this.state.lastRent} onChange={this.changeLastRent} required/>
                  </div> */}

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
                    
                    <button className="btn btn-success mt-5" onClick={this.saveAccount}>Editar</button>
                    <Link to="/">
                        <button className="btn btn-danger mt-5" style={{marginLeft: "10px"}}>Cancel</button>
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

export default UpdateAccount;
