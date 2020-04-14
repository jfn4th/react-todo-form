import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		let storedTodos = [];
		if (localStorage.getItem('todos')) {
			storedTodos = JSON.parse(localStorage.getItem('todos'));
		}
		this.state = {
			todos: storedTodos
		};
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.editTodo = this.editTodo.bind(this);
		this.completeTodo = this.completeTodo.bind(this);
	}
	componentDidUpdate() {
		const todos = this.state.todos;
		console.log(todos);
		localStorage.setItem('todos', JSON.stringify(todos));
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

	completeTodo(id) {
		const completedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
				return todo;
			}
			return todo;
		});
		this.setState({ todos: completedTodos });
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
				completeTodo={this.completeTodo}
			/>
		));
		return (
			<div className="TodoList">
				<div className="TodoListHeader">
					<h1>Todo List!</h1>
					<p>A Simple React Todo List.</p>
				</div>
				<div className="Todos">{todos}</div>
				<NewTodoForm addTodo={this.addTodo} />
			</div>
		);
	}
}

export default TodoList;
