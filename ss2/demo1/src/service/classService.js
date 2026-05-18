import axios from "axios";

const classList = [
    {
        id: 1,
        name: "C0226G1"
    },
    {
        id: 2,
        name: "C0326G1"
    },
    {
        id: 3,
        name: "C0426G1"
    },

];
const API_URL = import.meta.env.VITE_API_URL;
export async function getAllClasses() {
    try{
        const res =  await axios.get(`${API_URL}/classes`);
        console.log(res);
        return res.data
    }catch (e){
        console.log('lỗi call api');
        console.log(e)
    }
    return []
}

