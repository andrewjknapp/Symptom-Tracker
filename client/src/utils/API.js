import axios from "axios";

export default {
    getPosts: function() {
        return axios.get("/api/user/posts");
    }
}