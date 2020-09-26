import React,{Component}from 'react';

class TeacherForm extends Component{
    constructor(){
        super();
        this.state={
            first_name:'',
            last_name:'',
            major:'',
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
                <form onSubmit={e => this.props.teacherSubmit(e, this.state)}>
                    <input type="text" name='first_name' placeholder='FirstName' value={this.state.first_name} onChange={this.handleInputChange} />
                    <input type="text" name='last_name' placeholder='lastName' value={this.state.last_name} onChange={this.handleInputChange} />
                    <input type="text" name='major' placeholder='major' value={this.state.major} onChange={this.handleInputChange} />
                    <input type="submit" value='Submit' />
                </form>
            </div>
        )
    }
}

export default TeacherForm;