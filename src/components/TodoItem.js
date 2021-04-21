import React, { Component } from 'react'
import {Button}from 'reactstrap'

export default class TodoItem extends Component {
  render() {
    const checkTask = function (e) {
      if (e.target.classList.contains("todo-item")) {
        e.target.classList.toggle("checked")
        e.target.parentElement.classList.toggle("list-group-item-success");
      }
    }

    const { content,id } = this.props;
    return (
      <div className="d-flex justify-content-between align-items-center" onClick={checkTask}>
        <span>{content}</span>
        <Button outline color="danger" onClick={() => this.props.deleteItem(id)}>Delete</Button>
      </div>);
  }
}