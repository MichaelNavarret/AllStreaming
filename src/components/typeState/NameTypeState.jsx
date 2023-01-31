import React, { Component } from 'react'
import TypeStateService from '../../services/TypeStateService'

export class NameTypeState extends Component {

    constructor(props) {
        super(props)
        this.state = {
            typeState: [props.id],
        }
        
    }

    componentDidMount(){
        TypeStateService.getTypesById(this.props.id).then((res) =>{
            this.setState({typeState: res.data})
        })
    }

    render() {
        return (
            <>
               {this.state.typeState.name}
            </>
        )
    }
}

export default NameTypeState
