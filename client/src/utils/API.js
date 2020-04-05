import axios from "axios";
import { getFromStorage } from "./storage";



export default {
    getPosts: function() {
        const user = getFromStorage('symptom_tracker');
        //console.log(user.id);
        return axios.get("/api/user/posts/" + user.id);
    },
    savePost: function(post) {
        const { id } = getFromStorage('symptom_tracker');
       
        const { title, description, symptoms, temperature } = post;
        const savedPost = { title, description, symptoms, id, temperature };
        return axios.post("/api/user/posts", savedPost);
    },
    deletePost: function(description) {

        const { id } = getFromStorage('symptom_tracker');
        
        return axios.put("/api/user/posts", {description, id});
    }
}