import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            edit: this.props.task
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCompletion = this.handleCompletion.bind(this);
    }

    handleRemove(evt) {
        evt.stopPropagation();
        this.props.removeTodo(this.props.id);
    }

    editTodo(evt) {
        evt.stopPropagation();
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
            editing: false
        });
    }

    handleCompletion() {
        this.props.completeTodo(this.props.id);
    }

    render() {
        let classes = this.props.completed ? ' Completed' : '';
        return (
            <div className='Todo'>
                {this.state.editing ? (
                    <form onSubmit={this.handleEdit}>
                        <div className='editor'>
                            <input
                                type='text'
                                name='edit'
                                id='edit'
                                value={this.state.edit}
                                onChange={this.handleChange}
                            />
                            <button>Save</button>
                        </div>
                    </form>
                ) : (
                    <div onClick={this.handleCompletion} className='item'>
                        <div className={classes}>
                            <li className='task'>{this.props.task}</li>
                        </div>
                        <div className='icons'>
                            <i className='fas fa-edit' onClick={this.editTodo} />
                            <i className='fas fa-trash' onClick={this.handleRemove} />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Todo;
