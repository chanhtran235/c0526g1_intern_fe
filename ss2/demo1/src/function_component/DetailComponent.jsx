import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { getById} from "../service/studentService.js";


function DetailComponent() {
    const {id} = useParams();
    const [student, setStudent]= useState()
    useEffect(() => {
        const fetData = async ()=>{
            let student = await getById(id);
            console.log(student)
            setStudent(student)
        }
        fetData();


    }, []);
    return (
        <>
          <h3> Chi tiết</h3>
            <p>ID:{student?.id} </p>
            <p>Name:{student?.name} </p>
            <Link className={'btn btn-sm btn-primary'} to={'/student/list'}>Cancel</Link>
        </>
    )
}
export default DetailComponent ;