import React,{Component}from 'react';

class TeacherForm extends Component{
    constructor(props){
        super(props);
        this.state={
            first_name:props.teacher ? props.teacher.first_name : '',
            last_name:props.teacher ? props.teacher.last_name :'',
            major:props.teacher ? props.teacher.major :'',
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
                       ? e => this.props.teacherSubmit('POST',e, this.state)
                       : e => this.props.teacherSubmit('PUT',e, this.state,this.props.teacher.id)}>
                    <input type="text" name='first_name' placeholder='FirstName' value={this.state.first_name} onChange={this.handleInputChange} />
                    <input type="text"  name='last_name' placeholder='lastName' value={this.state.last_name} onChange={this.handleInputChange} />
                    <input type="text" name='major' placeholder='major' value={this.state.major} onChange={this.handleInputChange} />
                    <input type="submit" value={this.props.isAdd ? 'ADD' :'UPDATE'} />
                </form>
            </div>
        )
    }
}

export default TeacherForm;