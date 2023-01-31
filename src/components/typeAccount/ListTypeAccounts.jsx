import React, { Component } from 'react'
import TypeAccountService from '../../services/TypeAccountService';

export class ListTypeAccounts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            typeAccounts: [],
        }       
    }

    componentDidMount(){
        TypeAccountService.getTypes().then((res) =>{
            this.setState({typeAccounts: res.data})
        });
    }

    render() {
        return (
            <>
                {
                    this.state.typeAccounts.map(
                        type =>
                            <option key={type.id} value={type.id}>{type.name}</option>
                    )
                }
            </>
        )
    }
}

export default ListTypeAccounts
