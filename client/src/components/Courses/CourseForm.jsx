import React,{Component}from 'react';
import {Link} from 'react-router-dom';

class CourseForm extends Component{
    constructor(props){
        super(props);
        this.state={
            course_name:props.course ? props.course.course_name : '',
            description:props.course ? props.course.description :'',
            course_id:props.course ? props.course.course_id :'',
            //user_id:''
        }
        this.handleInputChange=this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const val = e.target.value;
        this.setState({
          [name]: val,
        });
      }

    render(){
        return (
            <div>
                <form onSubmit={ this.props.isAdd 
                       ? e => this.props.courseSubmit('POST',e, this.state)
                       : e => this.props.courseSubmit('PUT',e, this.state,this.props.course.id)}>
                    <input type="text" name='course_name' placeholder='courseName' value={this.state.course_name} onChange={this.handleInputChange} />
                    <input type="text" name='description' placeholder='description' value={this.state.description} onChange={this.handleInputChange} />
                    <input type="number" name='teacher_id' placeholder='teacher_id' value={this.state.teacher_id} onChange={this.handleInputChange} />
                    <input type="submit" value={this.props.isAdd ? 'ADD' :'UPDATE'} />
                    <h2 className='click2'><Link to={`/coursesHomePage`}>Back</Link></h2>
                </form>
            </div>
        )
    }
}

export default CourseForm;