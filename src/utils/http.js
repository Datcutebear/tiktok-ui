import axios from "axios";

const http = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/'
})

export const get = async (path, option = {}) =>{
    const response = await http.get(path, option);

    return response.data
}
export default http;