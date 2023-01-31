import React, { Component } from 'react'
import TypeAccountService from '../../services/TypeAccountService';

export class NameTypeAccount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            typeAccount: [props.id],
        }
    }

    componentDidMount(){
        TypeAccountService.getTypesById(this.props.id).then((res) =>{
            this.setState({typeAccount: res.data})
        })
    }

    render() {
        return (
            <>
               {this.state.typeAccount.name}
            </>
        )
    }
}

export default NameTypeAccount
