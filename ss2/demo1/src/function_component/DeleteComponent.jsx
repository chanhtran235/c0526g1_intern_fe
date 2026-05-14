import {Button, Modal} from "react-bootstrap";
import React from "react";
import {deleteById, getAll} from "../service/studentService.js";

const DeleteComponent = ({isShow,setIsShowModal,setIsLoading,deleteStudent})=>{

    const handleClose = ()=>{
        setIsShowModal(false);
    }
    const handleDelete =()=>{
        deleteById(deleteStudent.id);
        setIsShowModal(false);
        setIsLoading(pre=>!pre);
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