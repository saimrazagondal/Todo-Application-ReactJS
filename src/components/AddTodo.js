import React from "react";
import './AddTodo.css'

class AddTodo extends React.Component{

    constructor(){
        super();
        this.state = {
            title: ''
        }
        this.handleText = this.handleText.bind(this);    
    }

    //handle textbox
    handleText(e){
        const {name, value} = e.target;
        this.setState(
            {[name] : value}
        );
    }

    render(){

        let style = {
            width: "10%",
            marginRight: "1%",
            height: "30px",
            backgroundColor: "",
        }

        return(
            <div style={{marginTop: "5%"}}>
                <center>
                <input 
                    type="text" placeholder="Enter task here"
                    value={this.state.title} 
                    name='title'
                    onChange={this.handleText}
                    className='textField'
                    
                />
                <button 
                    style={style} 
                    onClick={ (e) => {
                        if(this.state.title === ''){
                            e.preventDefault;
                        } else {
                        this.props.addItem(this.state.title)
                        this.setState({title: ''})
                        }
                    }
                    }  >
                        Add
                </button> 
                </center>
            </div>
        )
    }

}


export default AddTodo;