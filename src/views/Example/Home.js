import React, { Component } from 'react'
import { withRouter } from "react-router";
import Color from '../HOC/Color';
class Home extends Component {

  componentDidMount() { //3s chuyển sang /todo điều kiện có withRouter bọc ngoài Home
    // setTimeout(()=>{
    //   this.props.history.push('/todo')
    // },3000)
  }
  render() {
    return (
      <>
        <div>--Home-Page React--</div>
      </>
    )
  }
}
// export default withRouter(Home);
export default Color(Home);