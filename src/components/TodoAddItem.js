import React, { Component } from 'react'
import { Button, Form, Input } from 'reactstrap';

export default class TodoAddItem extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="d-flex justify-content-center align-items-center">
        <Input
          type="text"
          value={this.props.userInput}
          onChange={this.props.onInputChange}
          name="todoaddInput"
          placeholder="What are you doing today?"
          className="w-75" 
          autoComplete="off"/>
        <Button onClick={this.props.addItem} outline color="primary" >Add</Button>
      </Form>
    )
  }
}
