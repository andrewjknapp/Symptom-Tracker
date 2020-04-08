import React, { useState, useEffect } from 'react'
import PostCard from '../PostCard';
import API from '../../utils/API';
import { Link } from 'react-router-dom'
import '../assets/css/LandingPage.css';
import '../assets/css/loader.css';

function LandingPage() {

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
        <article className="landingPage">
            <h2 className='landing-header' >Symptom Posts</h2>
            <div className='text-center'>
            <Link to='/new-post'><button className='new-post-btn'>Create New Post</button></Link>
            </div>
        
            
            {isLoading ? <h2 className="text-center loading">Loading...</h2> : posts.map((userPost, i) => <section key={i}><PostCard post={userPost} deletePost={deletePost} /></section>)}
        </article>
    )
}

export default LandingPage;