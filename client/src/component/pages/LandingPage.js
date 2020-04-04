<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import PostCard from '../PostCard';
import API from '../../utils/API';
=======
import React, { useState, useEffect, useContext } from 'react'
import PostCard from '../PostCard';
import API from '../../utils/API';
import UserContext from '../../utils/UserContext';
>>>>>>> master

function LandingPage() {
    const {
        state, dispatch
    } = useContext(UserContext);
    console.log(state, dispatch);
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

<<<<<<< HEAD
    useEffect(()=> {
        displayPosts();
    },[])

    function displayPosts() {
        API.getPosts()
        .then((res)=>{
            setPosts(res.data.reverse());
        })
=======
    useEffect(() => {
        displayPosts();
    }, [])

    function displayPosts() {
        API.getPosts()
            .then((res) => {
                setPosts(res.data.reverse());
            })
>>>>>>> master
    }

    function deletePost(e) {
        e.preventDefault();
        API.deletePost(e.target.getAttribute("description"))
<<<<<<< HEAD
        .then(()=>displayPosts())
=======
            .then(() => displayPosts())
>>>>>>> master
    }

    return (
        <article>
            <h1>Symptom Posts</h1>
<<<<<<< HEAD
            {posts.map((userPost, i) => <PostCard keyNumber={i} post={userPost} deletePost={deletePost}/>)}
=======
            {posts.map((userPost, i) => <PostCard keyNumber={i} post={userPost} deletePost={deletePost} />)}
>>>>>>> master
        </article>
    )
}

export default LandingPage;