import React from 'react';
import { Button } from 'react-bootstrap'

class ListItem extends React.Component {
  constructor(props) {
  	super(props)

    this.removeItem = this.removeItem.bind(this)
  }

  removeItem() {
    this.props.removeItem(this)
  }

  render() {
    return (
  		<div>
        <Button bsStyle="danger" bsSize="small" onClick={this.removeItem}>Remove Item</Button>&nbsp;{this.props.text}
      </div>
  	)
  }
}

export default ListItem