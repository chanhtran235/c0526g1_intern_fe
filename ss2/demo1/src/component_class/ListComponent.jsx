import React from "react";
import {getAll} from "../service/studentService.js";
import DeleteComponent from "./DeleteComponent.jsx";

class ListComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            studentList : [],
            isShowModal: false,
            deleteStudent: {
                id: "",
                name:""
            },
            isLoading: false
        }

    }
    setIsLoading=()=>{
        this.setState({
            isLoading: true
        })
    }
    closeModal =()=>{
        this.setState({
            isShowModal : false
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if(prevState.isLoading !== this.state.isLoading){
          this.setState({
              studentList: [...getAll()],
              isLoading: false
          });
      }
    }

    componentDidMount() {
        console.log("-------------didMoudt run-------------");
        this.setState({
            studentList: [...getAll()]
        });
    }

    render() {
        return(
            <>
                { console.log("---------list render ---------------")}
                <h1 className={'my-title'}> Student List</h1>
                <button  className={'btn btn-sm btn-success w-25'}> Add new student</button>
                <table className={'table table-striped table-dark'}>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.studentList.map((s,i)=>(
                            <tr key={s.id}>
                                <td>{i+1}</td>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td><button onClick={()=>{
                                    this.setState({
                                        isShowModal : true,
                                        deleteStudent : s
                                    })
                                }} className={'btn btn-sm btn-danger'}>Delete</button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <DeleteComponent deleteStudent = {this.state.deleteStudent}
                                 isShow ={this.state.isShowModal}
                                 closeModal = {this.closeModal}
                                 setIsLoading = {this.setIsLoading}
                />
            </>
        )
    }
}
export default ListComponent;