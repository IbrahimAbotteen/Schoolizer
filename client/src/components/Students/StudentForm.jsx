import React,{Component}from 'react';

class StudentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            first_name:props.student ? props.student.first_name : '',
            last_name:props.student ? props.student.last_name :'',
            grade_level:props.student ? props.student.grade_level :'',
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
                    ? e => this.props.studentSubmit('POST',e, this.state)
                    : e => this.props.studentSubmit('PUT',e, this.state,this.props.student.id)}>
                <input type="text" name='first_name' placeholder='FirstName' value={this.state.first_name} onChange={this.handleInputChange} />
                <input type="text" name='last_name' placeholder='lastName' value={this.state.last_name} onChange={this.handleInputChange} />
                <input type="text" name='grade_level' placeholder='grade_level' value={this.state.grade_level} onChange={this.handleInputChange} />
                <input type="submit" value={this.props.isAdd ? 'ADD' :'UPDATE'} />
            </form>
        </div>
    )
}
}

export default StudentForm;