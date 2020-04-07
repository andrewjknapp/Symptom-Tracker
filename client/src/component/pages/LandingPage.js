import React, { useState, useEffect, useContext } from 'react'
import PostCard from '../PostCard';
import API from '../../utils/API';
import UserContext from '../../utils/UserContext';
import '../assets/css/LandingPage.css';
import '../assets/css/loader.css';

function LandingPage() {
    const {
        state, dispatch
    } = useContext(UserContext);
    //console.log(state, dispatch);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        displayPosts();
    }, [])

    function displayPosts() {
        API.getPosts()
            .then((res) => {
                setPosts(res.data.reverse());
                setIsLoading(false);
            })
    }

    function deletePost(e) {
        e.preventDefault();
        API.deletePost(e.target.getAttribute("description"))
            .then(() => displayPosts())
    }

    return (
        <article>
            <h2 className='landing-header' >Symptom Posts</h2>
            {isLoading ? <h2 className="text-center loading">Loading...</h2> : posts.map((userPost, i) => <PostCard keyNumber={i} post={userPost} deletePost={deletePost} />)}
        </article>
    )
}

export default LandingPage;