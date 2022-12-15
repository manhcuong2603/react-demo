import React, { Component } from 'react'
import AddComponent from './AddComponent'
import ChildComponent from './ChildComponent'

export default class MyComponent extends Component {

  state = {
    arrJobs: [
      { id: 'abcJob1', title: 'Developers', salary: '500' },
      { id: 'abcJob2', title: 'Tester', salary: '400' },
      { id: 'abcJob3', title: 'Project Manager', salary: '1000' }
    ]
  }
   
  addNewJob = (job) =>{
    console.log('>>Check job from parent<<',job);
    let currenJobs = this.state.arrJobs;
    currenJobs.push(job)
    this.setState({
      // arrJobs:[...this.state.arrJobs, job] cach1: ... coppy arrJobs r push vào job ms tạo
      arrJobs:currenJobs
    })
  }
  deleteAJob = (job) =>{
    let currenJobs = this.state.arrJobs;
    currenJobs = currenJobs.filter(item => item.id !== job.id); //filter dò trong mảng trả về item khác với idJob chọn xóa
    this.setState({
      arrJobs:currenJobs
    })
  }

  render() {
    console.log(">>Call<<", this.state);
    return (
      <>
        <AddComponent 
          addNewJob={this.addNewJob}
        />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    )
  }
}
