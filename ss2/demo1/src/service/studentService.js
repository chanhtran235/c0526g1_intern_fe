import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL;
export async function getAll(){
    // call API
    try {
        const res = await axios.get(`${API_URL}/students`);
        return  res.data
    }catch (e){
        console.log("---lỗi call API--")
        console.log(e)
    }

    return []
}

export async function deleteById(id) {

    try {
        const res = await axios.delete(`${API_URL}/students/${id}`);
        console.log(res.status);
        return res.status =="200"
    }catch (e){
        console.log("---lỗi call API--")
        console.log(e)
    }
    return false;
}

export async function getById(id) {
    // call API
    try {
        const res = await axios.get(`${API_URL}/students/${id}`);
        return  res.data
    }catch (e){
        console.log("---lỗi call API--")
        console.log(e)
    }

    return null
}
export async function addNew(student){
    // call API
    try {
        const res = await axios.post(`${API_URL}/students`,student);
        return  res.status =="201"
    }catch (e){
        console.log("---lỗi call API--")
        console.log(e)
    }

    return false
}
