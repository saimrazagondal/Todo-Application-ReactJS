import React, { Component } from 'react';
import TodoItem from "./TodoItem.js";
import data from "../data.js"
import AddTodo from './AddTodo.js';


class Section extends Component{
    
    constructor(){
        super();
        this.state = {
            todos: data
        }

        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    //handle checkbox
    handleChange(id){
        this.setState(prevState => {
            const todosUpdated = prevState.todos.map(
                item => {
                    if(item.id === id){
                        item.completed = (item.completed) ? false : true;
                        return item;

                    } else {
                        return item;
                    }
                }
            );

            return {todos:todosUpdated};
        });
    }


    //handle addition of todo
    addItem(title){
        let addedItem = {
            id: this.state.todos.length + 1,
            text: title,
            completed: false
        }
        
        this.setState( prevState => {
                const todoArray = prevState.todos;
                todoArray.push(addedItem);
                console.log(todoArray);
                return {todos: todoArray};

            });
    }

    //deleteTodo
    deleteTodo(id){
        this.setState(prevState => {
            const todoArray = prevState.todos;
            todoArray.splice(id-1, 1);

            let count = 1;
            const todoArrayUpdatedIds = todoArray.map((item) => {
                item.id = count;
                count = count + 1;
                return item;
            });
            console.log(todoArrayUpdatedIds);
            return{todos: todoArrayUpdatedIds};
        });
    }

    render(){
        const todoItems = this.state.todos.map( (item) => 
             <TodoItem 
                key={item.id} 
                data={item} 
                handleChange={this.handleChange}
                deleteTodo={this.deleteTodo} 
            />
        );

        return(
            <div className="container">
                {todoItems}
                <AddTodo addItem={this.addItem} />
                
            </div>
        )
    }
}

export default Section;