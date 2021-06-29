import React, {Component} from 'react'


class AddToTeam extends Component {
    state = {
        id: '',
        name: ''
    }
    
    render(){
        return (
            <div>
                <button id={this.props.sensei.id} name={this.props.sensei.name} onClick={this.props.handleClick}>Add To Team</button>
            </div>
        )
    }
}

export default AddToTeam