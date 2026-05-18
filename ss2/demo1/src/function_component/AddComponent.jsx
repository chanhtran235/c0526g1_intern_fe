import {useEffect, useRef, useState} from "react";
import {addNew, getAll} from "../service/studentService.js";
import {useNavigate} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {getAllClasses} from "../service/classService.js";

import * as Yup from "yup";
import {toast} from "react-toastify";

const AddComponent = () => {
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        id:"",
        name:"",
        gender: false,
        subjects:"",
        class:""
    });
    const [classList, setClassList] = useState([]);
    useEffect(() => {
        const fetData = async ()=>{
            let list = await getAllClasses();
            setClassList(list)
        }
        fetData();

    }, []);
    const handleSave = (value) => {
        const newStudent = {
            ...value,
            class: JSON.parse(value.class)
        }
        const fetData = async ()=>{
            let status = await addNew(newStudent);
            if (status){
                console.log("-----------thành công-------")
                toast.success("Add success!");
            }else {
                toast.error("Not success");
            }
            navigate("/student/list");
        }
        fetData();




    }
    const validation = Yup.object({
        // id: Yup.number().required("Không để trống")
        //     .min(1,"Phải là là số dương"),
        name:Yup.string().required("Không để trống")
            .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,"tên phải đúng định dạng"),
    })
    return (
        <>
            <Formik initialValues={student} onSubmit={handleSave} validationSchema={validation}>
                <Form>
                    {/*<div>*/}
                    {/*    <label>ID:</label>*/}
                    {/*    <Field type = "text" name = "id"/>*/}
                    {/*    <ErrorMessage name={'id'} className={'text-danger'} component={'small'}/>*/}
                    {/*</div>*/}
                    <div>
                        <label>Name:</label>
                        <Field type = "text" name = "name"/>
                        <ErrorMessage name={'name'} className={'text-danger'} component={'small'}/>

                    </div>
                    <div>
                        <label>Gender:</label>
                        <Field type = "radio" name = "gender" value ="true"/>Male
                        <Field type = "radio" name = "gender" value ="false"/>Female
                    </div>
                    <div>
                        <label>Subject:</label>
                        <Field type = "checkbox" name = "subjects" value ="JS"/>JS
                        <Field type = "checkbox" name = "subjects" value ="JAVA"/>JAVA
                        <Field type = "checkbox" name = "subjects" value ="PHP"/>PHP
                    </div>
                    <div>
                        <label>Class name</label>
                        <Field as ='select' name = "class">
                            <option value={''}>----Select class ---</option>
                            {
                                classList.map((cls,i)=>
                                <option key={i} value={JSON.stringify(cls)}>{cls.name}</option>
                                )
                            }
                        </Field>
                    </div>
                    <div>
                        <button type={'submit'}>Save</button>
                    </div>
                </Form>
            </Formik>
            <h2>Add new student</h2>

        </>
    )
}
export default AddComponent;