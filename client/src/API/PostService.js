import axios from "axios";

export default class PostService {

    static async getAll() {
        const response = await axios.get('http://192.168.1.199:8000/api/v1/events');
        return response;
    }

    static async getById(id) {
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return responce;
    }

    static async postAdminLogin(pLogin, pPassword) {
        const responce = await axios.post('http://192.168.1.199:8000/api/v1/admin/auth', {
                login: pLogin,
                password: pPassword
            });
        return responce;
    }
}