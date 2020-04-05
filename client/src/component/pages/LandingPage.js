import React, { useState, useEffect, useContext } from 'react'
import PostCard from '../PostCard';
import API from '../../utils/API';
import UserContext from '../../utils/UserContext';
import '../assets/css/LandingPage.css'

function LandingPage() {
    const {
        state, dispatch
    } = useContext(UserContext);
    //console.log(state, dispatch);
    const [posts, setPosts] = useState([
        {
            title: "My Head Hurts",
            description: "I have had this headache since 12 this morning",
            date: "2/12/20",
            symptoms: [
                {
                    type: "Coughing",
                    severity: 4
                },
                {
                    type: "Headache",
                    severity: 2
                }
            ]
        }
    ]);

    useEffect(() => {
        displayPosts();
    }, [])

    function displayPosts() {
        API.getPosts()
            .then((res) => {
                setPosts(res.data.reverse());
            })
    }

    function deletePost(e) {
        e.preventDefault();
        API.deletePost(e.target.getAttribute("description"))
            .then(() => displayPosts())
    }

    return (
        <article>
            <h1 className='landing-header' >Symptom Posts</h1>
            {posts.map((userPost, i) => <PostCard keyNumber={i} post={userPost} deletePost={deletePost} />)}
        </article>
    )
}

export default LandingPage;