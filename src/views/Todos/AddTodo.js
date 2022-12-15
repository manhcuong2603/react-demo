import React, { Component } from 'react'
import { toast } from 'react-toastify';
export default class AddTodo extends Component {
    state = {
        title:''
    }
    //lấy tt ô input
    handleOnChangeTitle = (e)=>{
        this.setState({
            title: e.target.value
        })
    }
    handleAddTodo = ()=>{
        if(!this.state.title){
            //if(undefile/null/empty)=>false
            toast.error("Missing Title!");
            return;
        }
        let todo={
            id:Math.floor(Math.random()*1000),
            title:this.state.title
        }
        this.props.addNewTodo(todo);

        this.setState({ //nhập xong ô input về rỗng
            title:''
        })
    }
    render() {
        let {title} = this.state;
        return (
            <div className='add-todo'>
                <input type="text" value={title}
                    onChange={(e) => this.handleOnChangeTitle(e)}
                ></input>
                <button className='add' type='button' 
                    onClick={() => this.handleAddTodo()}
                >Add</button>
            </div>
        )
    }
}
