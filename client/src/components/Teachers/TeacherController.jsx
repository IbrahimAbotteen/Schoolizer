import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom'
import TeacherList from './TeacherList'

class TeacherController extends Component{
    constructor(props){
        super(props);
        this.state={
            currentPage:props.currentPage,
            dataLoaded:false,
            allTeachers:null,
        }
    }

    componentDidMount(){
        if(this.state.currentPage==='index'){
            fetch('/teacher')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    allTeachers:res.data.teachers,
                    dataLoaded: true,
                })
            }).catch(err => console.log(err));
        }
    }

    decideWhichToRender(){
        switch(this.state.currentPage){
            case 'index':
                return <TeacherList allTeachers={this.state.allTeachers}/>
                break;
            default:
                return <Redirect push to='/' />
                break;
        }
    }

    render(){
        return(
        <div>
            {
                (this.state.dataLoaded)
                ? this.decideWhichToRender()
                :<p>loading......</p>
            }
        </div>
        

        )
    }
}
export default TeacherController;