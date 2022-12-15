import React, { Component } from 'react'
import AddTodo from './AddTodo'
import './ListTodo.scss'
import { toast } from 'react-toastify';

export default class ListTodo extends Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing Homework' },
            { id: 'todo2', title: 'Making Video' },
            { id: 'todo3', title: 'Fix Bugs' }
        ],
        editTodo: {},
        title: ''
    }

    addNewTodo = (todo) => {
        // let currentListTodo = this.listTodos;
        // currentListTodo.push(todo);
        this.setState({
            listTodos: [...this.state.listTodos, todo]
            // listTodos: currentListTodo
        })
        toast.success("Wow so easy!");
    }
    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Delete Success!");
    }
    handleOnclickEditTodo = (todo) => {

        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0; //check input rỗng hay k
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCoppy = [...listTodos];
            let objIndex = listTodosCoppy.findIndex((item => item.id === todo.id));
            listTodosCoppy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCoppy,
                editTodo: {}
            })
            toast.success("Update todo Success!");
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })

    }
    handleOnChangeEditTodo = (e) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = e.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0; //check input rỗng hay k rong = false

        return (

            <>
                <p>
                    Simple Todo App
                </p>
                <div className='list-todo-container'>
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    ></AddTodo>
                    <div className='list-todo-content'>
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className='todo-child' key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} -
                                                        <input
                                                            value={editTodo.title}
                                                            onChange={(e) => this.handleOnChangeEditTodo(e)}
                                                        ></input>
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>
                                        }
                                        <button className='edit'
                                            onClick={() => this.handleOnclickEditTodo(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'save' : 'edit'
                                            }
                                            {/* Edit */}
                                        </button>
                                        <button className='delete' onClick={() => this.handleDeleteTodo(item)}>
                                            Delete
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}
