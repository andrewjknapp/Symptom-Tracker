import axios from "axios";

export default {
    getPosts: function() {
        return axios.get("/api/user/posts");
    },
    savePost: function(post) {
        const { title, description, symptoms } = post;
        const savedPost = { title, description, symptoms };
        return axios.post("/api/user/posts", savedPost);
    }
}