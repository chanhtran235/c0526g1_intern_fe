import React from "react";
import {Modal,Button} from "react-bootstrap";
import {deleteById, getAll} from "../service/studentService.js";

class DeleteComponent extends React.Component{
    constructor(props) {
        super(props);
    }
    handleClose = ()=>{
      this.props.closeModal();
    }
    handleDelete=()=>{
        deleteById(this.props.deleteStudent.id);
        console.log(getAll());
        this.handleClose();
        this.props.setIsLoading();

    }
    render() {
        return (

            <>
                {console.log("--------delete run-------")}
                <Modal show={this.props.isShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span>Do you want to delete {this.props.deleteStudent.name} </span>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleDelete}>
                            Deletet
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default React.memo(DeleteComponent);