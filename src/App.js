import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoAddItem from "./components/TodoAddItem";
import {Container} from 'reactstrap'
import TodoHeader from "./components/TodoHeader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todos: [],
    };
  }

  addItem = () => {
    const currentValue = this.state.userInput;

    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),
        content: currentValue,
      };

      this.setState(
        {
          todos: [...this.state.todos, userInput],
        },
        () => {
          this.setState({
            userInput: "",
          });
        }
      );
    }
  };

  onInputChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
  };

  deleteItem = (id) => {
    let todos = [...this.state.todos];
    
    todos.forEach(todoItem => {
      if (todoItem.id === id) {
        let index = todos.indexOf(todoItem);
        todos.splice(index, 1)
        return;
      }
    });

    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <Container>
        <TodoHeader/>
        <TodoAddItem
          userInput={this.state.userInput}
          onInputChange={this.onInputChange}
          addItem={this.addItem}
        />
        {this.state.todos.length > 0 && (
          <div>
            <TodoList todos={this.state.todos} deleteItem={this.deleteItem} />
          </div>
        )}
      </Container>
    );
  }
}

export default App;
