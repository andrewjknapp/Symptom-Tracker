import React, { useState, useContext } from 'react'
import PostCard from '../PostCard';
import UserContext from '../../utils/UserContext';

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
        },
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
        },
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

    return (
        <article>
            <h1>Symptom Posts-{state.userId}</h1>
            {posts.map(userPost => <PostCard post={userPost} />)}
        </article>
    )
}

export default LandingPage;