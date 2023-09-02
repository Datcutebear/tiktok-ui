import axios from "axios";
import PropTypes from 'prop-types';
const http = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/'
})

export const get = async (path, option = {}) =>{
    const response = await http.get(path, option);

    return response.data
}

get.propTypes = {
    path: PropTypes.string.isRequired,
    option: PropTypes.object,
}
export default http;