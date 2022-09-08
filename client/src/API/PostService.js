import axios from "axios";

export default class PostService {
    static async getAll(){
        const events = {}
        const responce = await axios.get('https://631a28bd8e51a64d2bf78b0a.mockapi.io/api/v1/events');
        events.data = responce.data
        return events;
    }

    static async getById(id){
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return responce;
    }

    static async getCommentsByPostId(id){
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return responce;
    }
}