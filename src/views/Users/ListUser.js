import React, { Component } from 'react'
import axios, { Axios } from 'axios'
import './ListUser.scss'
import { withRouter } from "react-router";
class ListUser extends Component {

    state={
        ListUsers: []
    }
    async componentDidMount(){ // check data trả về

        let res = await  axios.get('https://reqres.in/api/users?page=2');
            this.setState({
                ListUsers: res && res.data && res.data.data ? res.data.data : []
            })
            console.log('>>check res<<',res.data.data);
    }

    handleViewDetailUser = (user)=>{
        this.props.history.push(`user/${user.id}`)
    }
  render() {
    let {ListUsers} = this.state;
    return (
      <div className='list-user-container'>
            <div className='title'>
                List user
            </div>
            <div className='list-user-content'>
                {ListUsers && ListUsers.length > 0 &&   //điều kiện để thực hiện hàm map
                 ListUsers.map((item,index)=>{
                    return(
                        <div className='child' key={item.id}
                            onClick ={()=>this.handleViewDetailUser(item)}
                        >
                            {index + 1} - {item.fist_name} {item.last_name}
                        </div>
                    )
                 })
                }
               
            </div>
      </div>
    )
  }
}
export default withRouter (ListUser);