import React from 'react';
import { Button } from 'react-bootstrap'

import ListItem from './list_item.jsx'

class Todo extends React.Component {
  constructor() {
  	super()

  	this.state = {
  		listItems: []
  	}

  	this.addItem = this.addItem.bind(this)
  	this.removeItem = this.removeItem.bind(this)
  }

  addItem() {
  	var todo_text = document.getElementById('todo_text').value
  	var newItems = this.state.listItems;

  	newItems.push(<ListItem key={todo_text} text={todo_text} removeItem={this.removeItem} />)

  	this.setState({
  		listItems: newItems
  	})
  }

  removeItem(item) {
  	var newItems = this.state.listItems;

  	var index = newItems.indexOf(item);
  	newItems.splice(index, 1);

  	this.setState({
  		listItems: newItems
  	})
  }

  render() {
    return (
		<div>
			<p>Your todo items are:</p>

			<ul>
				{this.state.listItems}
			</ul>


			<span>New todo: <input id="todo_text" type="text" /></span> 
			<Button bsStyle="primary" onClick={this.addItem} bsSize="small">Add Item</Button>
		</div>
	)
  }
}

export default Todo