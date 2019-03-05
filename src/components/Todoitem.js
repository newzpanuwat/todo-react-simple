import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    }
  }

  markComplete = (e) => {
    console.log(this.props)
  }

	render() {
    const { id, title } = this.props.todo;

		return (
			<div style={this.getStyle()}>
        <h3>
          <input type="checkbox" onChange={ 
            this.props.markComplete.bind(this, id) 
          } /> { ' ' }
          { title }
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
        </h3>
			</div>
		)
	}
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

// PropsTypes
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todoitem