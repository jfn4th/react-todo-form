import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<span>{this.props.todo}</span>
			</div>
		);
	}
}

export default Todo;
