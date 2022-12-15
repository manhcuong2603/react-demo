import React, { Component } from 'react'
import './Child.scss'
export default class ChildComponent extends Component {

  state = {
    showJobs: false,
  }
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs
    })
  }
  handleOnclickDelete = (job)=>{
    console.log('>>handleDelete<<',job);
    this.props.deleteAJob(job)
  }

  render() {
    console.log(">>Call<<", this.props);
    let { name, age, address, arrJobs } = this.props;
    let { showJobs } = this.state;
    let check  = showJobs === true ? 'showJobs = true' : 'showJobs  false';
    console.log('>>Check show jobs<<', check);

    return (
      <>
        {showJobs === false ?
          <div>
            <button className='btn-show' onClick={() => this.handleShowHide()}>Show</button>
          </div>

          :

            <>
              <div className='jobList'>
                {
                  arrJobs.map((item, index) => {
                    return (
                      <div key={item.id}>
                        {item.title}-{item.salary}
                         <button onClick={()=>this.handleOnclickDelete(item)}>Xóa</button>
                      </div>
                    )
                  })
                }
              </div>
              <div>
                <button onClick={() => this.handleShowHide()}>Hide</button>
              </div>
            </>
        }
      </>
    )
  }
}
// import React from 'react'

// export default function ChildComponent(props) {
//   let {arrJobs} = props;
//   return (
//     <>
//       <div className='job-List'>
//         {
//           arrJobs.map((item,index)=>{
//             if(item.salary >= 500){
//             return(
//               <div key={item.id}>
//                   {item.title} - {item.salary}$
//               </div>
//             )}
//           })
//         }
//       </div>
//    </>
//   )
// }

