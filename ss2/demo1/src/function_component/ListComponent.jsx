import DeleteComponent from "../function_component/DeleteComponent.jsx";
import React, {useEffect, useState} from "react";
import {getAll} from "../service/studentService.js";
import AddComponent from "./AddComponent.jsx";
import {Link} from "react-router-dom";

const ListComponent = ()=>{
   const [studentList, setStudentList]   = useState([]);
   const [deleteStudent, setDeleteStudent]   = useState({
       id:"",
       name: ""
   });
   const [isShowModal, setIsShowModal] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        console.log("----------useEffect------------")
        console.log(getAll())
        setStudentList([
            ...getAll()
        ])
    },[isLoading]);

    return(
        <>
            { console.log("---------list render ---------------")}
            <h1 className={'my-title'}> Student List</h1>
            <Link  to={'/student/add'}  className={'btn btn-sm btn-success w-25'}> Add new student</Link>
            <table className={'table table-striped table-dark'}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Subjects</th>
                    <th>Class name</th>
                    <th>Detail</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                   studentList && studentList.map((student,i)=>(
                        <tr key={student.id}>
                            <td>{i+1}</td>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.gender?'Male':'Female'}</td>
                            <td>
                                {student.subjects?.map((subject,i) =>
                                    <span key={i}>
                                     {' '+subject}
                                    </span>)}
                            </td>
                            <td>{student.class?.name}</td>
                            <td>
                                <Link to={`/student/detail/${student.id}`}>Detail</Link>
                            </td>
                            <td><button onClick={()=>{
                                setIsShowModal(pre =>!pre);
                                setDeleteStudent(student);
                            }} className={'btn btn-sm btn-danger'}>Delete</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <DeleteComponent deleteStudent = {deleteStudent}
                             isShow ={isShowModal}
                             setIsShowModal = {setIsShowModal}
                             setIsLoading = {setIsLoading}
            />
        </>
    )
}
export default ListComponent;