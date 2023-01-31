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
        user: "USER_EMPTY",
        lastRent: "2010-01-01",
        countRent: 0,
        price: 0,
    };
    this.changeDateBron = this.changeDateBron.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.saveAccount = this.saveAccount.bind(this);
  }


  componentDidMount(){
    AccountService.getAccounts().then((res) =>{
        this.setState({accounts: res.data})
    });

  }
  
  saveAccount = (e) => {
    e.preventDefault();
    let account = { typeId: this.state.typeId, 
                    dateBorn: this.state.dateBorn, 
                    stateId: this.state.stateId,
                    user: this.state.user,
                    lastRent: this.state.lastRent,
                    countRent: this.state.countRent,
                    price: this.state.price,};
    AccountService.addAccount(account);
    window.location.href = '/'; 
    

  }

  changeTypeId=(e) => {
    this.setState({typeId: e.target.value})
  }

  changeDateBron=(e) => {
    this.setState({dateBorn: e.target.value})
  }

  changePrice=(e) => {
    this.setState({price: e.target.value})
  }

  
  
  render() {
    return (
      <div>
        <div className="container">
          <div className="row ">
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
                    <label> Fecha de Creacion: </label>
                    <input placeholder="Fecha de Creacion" type ="date" name="dateBorn" className="form-control" value={this.state.dateBorn} onChange={this.changeDateBron} required/>
                  </div>

                  <div className="form-group">
                    <label> Precio del arriendo </label>
                    <input placeholder="Precio" type ="number" name="price" className="form-control" value={this.state.price} onChange={this.changePrice} required/>
                  </div>
                    
                    <button className="btn btn-success mt-5" onClick={this.saveAccount}>Crear</button>
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

export default AddAccount;
