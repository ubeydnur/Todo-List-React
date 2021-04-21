import React, { Component } from 'react'
import TodoItem from "./TodoItem";
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class TodoList extends Component {
  render() {
    return (
      <ListGroup className="mt-5">
        {this.props.todos.map(todo => {
          return (
              <ListGroupItem className="mt-3" key={todo.id} tag="a" action>
                <TodoItem {...todo} deleteItem = {this.props.deleteItem}/>
              </ListGroupItem>
          );
        })}
      </ListGroup>
    )
  }
}
