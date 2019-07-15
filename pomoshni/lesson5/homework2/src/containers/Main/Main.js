import React, { Component } from 'react';
import Course from '../../components/Course/Course';
import Info from '../../components/Info/Info';
import Form from '../../components/Form';
import './Main.css';

class Main extends Component {

    state = {
        courses: [
            {
                id: 1,
                name: 'HTML',
                days: 10,
                desc: 'HTML description'
            },
            {
                id: 2,
                name: 'CSS',
                days: 11,
                desc: 'CSS description'
            },
            {
                id: 3,
                name: 'JavaScript',
                days: 13,
                desc: 'JavaScript description'
            }
        ],
        currentSelectedId: 1,
        tmpName: '',
        tmpDays: '',
        tmpDesc: '',
        errName: ''
    }

    handleSelectedCourse = (id) => {
        console.log(`Kliknat e ${id}-ot element od nizata`);
        this.setState({ currentSelectedId: id })
    }
    handleChangeName = (e) => {
        if (e.target.value.length <= 8) {
            this.setState({ errName: '', tmpName: e.target.value });
        } else {
            this.setState({ errName: '8 character is max' });
        }
    }
    handleChangeDays = (e) => {
        const tmpDays = e.target.value;
        this.setState({ tmpDays });
    }
    handleChangeDesc = (e) => {
        this.setState({ tmpDesc: e.target.value });
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        const courses = [...this.state.courses];
        const newCourse = {
            id: courses.length + 1,
            name: this.state.tmpName,
            days: this.state.tmpDays,
            desc: this.state.tmpDesc
        }
        courses.push(newCourse);
        this.setState({ courses });
    }
    render() {
        return (
            <div className="wrapper">
                <h1>
                    List of courses:
                </h1>
                {
                    this.state.courses.map(course => <Course
                        key={course.id}
                        id={course.id}
                        name={course.name}
                        click={this.handleSelectedCourse} />)
                }

                <h1>Show selected course</h1>
                <Info course={this.state.courses[this.state.currentSelectedId]} />
                <h1>Add course: </h1>
                <Form
                    submit={this.handleOnSubmit}
                    name={this.state.tmpName}
                    days={this.state.tmpDays}
                    desc={this.state.tmpDesc}
                    errName={this.state.errName}
                    handleName={this.handleChangeName}
                    handleDays={this.handleChangeDays}
                    handleDesc={this.handleChangeDesc} />
            </div>
        )
    }

}

export default Main;