import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editing: false,
			edit: ''
		};
		this.handleRemove = this.handleRemove.bind(this);
		this.editTodo = this.editTodo.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleRemove() {
		this.props.removeTodo(this.props.id);
	}

	editTodo() {
		this.setState({ editing: true });
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleEdit(evt) {
		evt.preventDefault();
		const editedTodo = {
			task: this.state.edit,
			id: this.props.id
		};
		this.props.editTodo(editedTodo);
		this.setState({
			editing: false,
			edit: ''
		});
	}

	render() {
		let classes = 'Todo' + (this.props.completed ? 'Completed' : '');
		return (
			<div>
				{this.state.editing ? (
					<div className="editor">
						<form onSubmit={this.handleEdit}>
							<input
								type="text"
								name="edit"
								id="edit"
								value={this.state.edit}
								onChange={this.handleChange}
							/>
							<button>Save</button>
						</form>
					</div>
				) : (
					<div>
						<span className={classes}>{this.props.task}</span>
						<i className="fas fa-edit" onClick={this.editTodo} />
						<i className="fas fa-trash" onClick={this.handleRemove} />
					</div>
				)}
			</div>
		);
	}
}

export default Todo;
