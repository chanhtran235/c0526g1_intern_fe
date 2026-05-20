import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
export async function checkLogin(username,password) {
    try {
        const response = await axios.get(`${API_URL}/accounts`);
        const account = response.data.find(e =>e.username == username&&e.password==password);
        return account; // Trả về dữ liệu từ API
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // Trả về đối tượng null
    }
}