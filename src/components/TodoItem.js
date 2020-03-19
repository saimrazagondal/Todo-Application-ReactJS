import React, { Component } from 'react';


class TodoItem extends Component{

    render(){

        let textStyle = this.props.data.completed ? 'line-through' : '';

        return(
            <div>
                <p> 
                    <input type="checkbox" 
                            checked={this.props.data.completed}
                            onChange={() => 
                                this.props.handleChange(this.props.data.id) } 
                            /> {}
                    <label style = { {textDecoration: textStyle} }> {this.props.data.text} </label>
                    <button 
                        onClick={() => {
                            this.props.deleteTodo(this.props.data.id)
                        }}
                        style={{float: "right", width: "40px", height: "25px", backgroundColor: "red", color: "white"}}
                        > X </button>
                </p>
                <hr />
            </div>
        )
    }
}

export default TodoItem;