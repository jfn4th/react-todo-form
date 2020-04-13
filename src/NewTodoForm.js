import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);

		this.state = { newTodo: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		const newTodo = { task: this.state.newTodo, id: uuid(), completed: false };
		this.props.addTodo(newTodo);
		this.setState({
			newTodo: ''
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="newTodo">New Todo</label>
				<div>
					<input
						type="text"
						name="newTodo"
						id="newTodo"
						value={this.state.newTodo}
						onChange={this.handleChange}
						placeholder="New Todo"
					/>
					<button onClick={this.handleSubmit}>Add Todo</button>
				</div>
			</form>
		);
	}
}

export default NewTodoForm;
