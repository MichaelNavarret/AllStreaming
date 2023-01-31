import React, { Component } from 'react'
import TypeStateService from '../../services/TypeStateService'

export class ListTypeState extends Component {

    constructor(props) {
        super(props)
        this.state = {
            typeStates: [],
        }       
    }

    componentDidMount(){
        TypeStateService.getTypes().then((res) =>{
            this.setState({typeStates: res.data})
        });
    }

    render() {
        return (
            <>
                {
                    this.state.typeStates.map(
                        type =>
                            <option key={type.id} value={type.id}>{type.name}</option>
                    )
                }
            </>
        )
    }
}

export default ListTypeState
