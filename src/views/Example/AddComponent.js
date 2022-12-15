import React, { Component } from 'react'

export default class AddComponent extends Component {

    state = {
        title: '',
        salary: ''
    }
    handleOnChangeTitleJob = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleOnChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('missing ')
            return;
        }
        console.log('>>check input<<', this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })

    }
    render() {
        return (
            <form>
                <label htmlFor="fname">Job title:</label><br />
                <input type="text"
                    value={this.state.title}
                    onChange={(e) => this.handleOnChangeTitleJob(e)}
                />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" value={this.state.salary}
                    onChange={(e) => this.handleOnChangeSalary(e)}
                />
                <br />
                <br />
                <input type="submit"
                    onClick={(e) => this.handleSubmit(e)}
                />
            </form>
        )
    }
}
