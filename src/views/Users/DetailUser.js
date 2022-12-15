import React, { Component } from 'react'
import { withRouter } from "react-router";
import axios from 'axios';
class DetailUser extends Component {

    state = {
        user: {}
    }
    async componentDidMount() {  //chạy render rồi mới chạy tiếp hàm dimount
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
            console.log('>>check ress user:', res);
        } 
    }
    handlebackButton = () =>{
        this.props.history.push(`/user`)
    }   
    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0; //check input rỗng hay k rong = false
        return (
            <>
                <div>DetailUser with ID: {this.props.match.params.id}</div>
                {isEmptyObj === false &&
                    <>
                        <div >User Name:{user.fist_name } - {user.last_name }</div>
                        <div >User email:{user.email }</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button type='button' onClick={()=>this.handlebackButton()}>back</button>
                        </div>
                    </>
                }

            </>
        )
    }
}
export default withRouter(DetailUser);