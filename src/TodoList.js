import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: []
		};
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.editTodo = this.editTodo.bind(this);
	}

	addTodo(todo) {
		this.setState({
			todos: [ ...this.state.todos, todo ]
		});
	}

	removeTodo(todoID) {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== todoID)
		});
	}

	editTodo(edit) {
		const editedTodos = this.state.todos.map((todo) => {
			if (todo.id === edit.id) {
				todo.task = edit.task;
				return todo;
			}
			return todo;
		});
		this.setState({ todos: editedTodos });
	}

	render() {
		const todos = this.state.todos.map((todo) => (
			<Todo
				key={todo.id}
				id={todo.id}
				task={todo.task}
				completed={todo.completed}
				removeTodo={this.removeTodo}
				editTodo={this.editTodo}
			/>
		));
		return (
			<div className="TodoList">
				<div className="TodoListHeader">
					<h1 className="TodoListTitle">Todo List!</h1>
					<p>A Simple React Todo List.</p>
				</div>
				{todos}
				<NewTodoForm addTodo={this.addTodo} />
			</div>
		);
	}
}

export default TodoList;
