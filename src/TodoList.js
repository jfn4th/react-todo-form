import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [ 'eat', 'poop' ]
		};
	}

	render() {
		const todos = this.state.todos.map((todo) => <Todo todo={todo} />);
		return (
			<div className="TodoList">
				<div className="TodoListHeader">
					<h1 className="TodoListTitle">Todo List!</h1>
					<p>A Simple React Todo List.</p>
				</div>
				{todos}
				<NewTodoForm />
			</div>
		);
	}
}

export default TodoList;
