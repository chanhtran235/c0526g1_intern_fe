import {Button, Modal} from "react-bootstrap";
import React from "react";
import {deleteById, getAll} from "../../service/studentService.js";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DeleteComponent = ({isShow,setIsShowModal,setIsLoading,deleteStudent})=>{

    const handleClose = ()=>{
        setIsShowModal(false);
    }
    const handleDelete =()=>{
        const fetData = async ()=>{
            let status = await deleteById(deleteStudent.id);
            if (status){
                console.log("-----------thành công-------")
                toast.success("Delete success!");
                setIsLoading(pre=>!pre);
            }else {
                toast.error("Not success");
            }
            setIsShowModal(false);

        }
        fetData();

    }

    return (

        <>
            {console.log("--------delete run-------")}
            <Modal show={isShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Do you want to delete {deleteStudent.name} </span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default React.memo(DeleteComponent);