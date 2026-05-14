import {useRef} from "react";
import {addNew, getAll} from "../service/studentService.js";

const AddComponent = ({setIsLoading}) => {
    const idRef = useRef("");
    const nameRef = useRef("");
    const handleSave = () => {

        addNew({
            id: idRef.current.value,
            name: nameRef.current.value
        });
        console.log(getAll());
        setIsLoading(pre => !pre)
        idRef.current.value = "";
        nameRef.current.value = "";

    }
    return (
        <>
            <h2>Add new student</h2>
            <form>
                <input ref={idRef} name={'id'}/>
                <input ref={nameRef} name={'name'}/>
                <button type={'button'} onClick={handleSave}>Save</button>
            </form>
        </>
    )
}
export default AddComponent;