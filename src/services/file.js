import axios from 'axios'
const apiUrl = 'https://api-modbus.herokuapp.com/api'

const fileService = async (fileText) => {
    return await axios.post(apiUrl, {text:fileText})
}

export default fileService;