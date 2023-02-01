import React, { Component } from "react";
import TypeAccountService from "../../services/TypeAccountService";
import { Link } from 'react-router-dom';

export class AddTypeAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
    };
    this.changeName = this.changeName.bind(this);
  }

  componentDidMount() {
    TypeAccountService.getTypes().then((res) => {
      this.setState({ types: res.data });
    });
  }

  

  saveType = (e) => {
    e.preventDefault();
    let type = { name: this.state.name};
    TypeAccountService.addType(type);
    alert("Nuevo servicio " + this.state.name  + " ingresado")
    window.location.href = '/'; 
  }

  changeName=(e)=>{
    this.setState({name: e.target.value});
  }

  render() {
    return <div>
    <div className="container">
      <div className="m-4">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h1 className="text-center">Añadir Servicio Streaming</h1>
          <div className="card-body">
            <form>
                <div className="form-group">
                    <label> Introduzca el nombre del servicio </label>
                    <input placeholder="Ejemplo: Netflix, HbO, etc."  type ="text" name="name" className="form-control" value={this.state.name} onChange={this.changeName} required/>
                </div>
                    
                <button className="btn btn-warning mt-5" onClick={this.saveType}>Añadir</button>
                <Link to="/">
                    <button className="btn btn-dark mt-5" style={{marginLeft: "10px"}}>Cancelar</button>
                </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>;
  }
}

export default AddTypeAccount;
