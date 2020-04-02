import React, { useState } from 'react'
import PostCard from '../PostCard';

 function LandingPage() {

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
            <h1>Symptom Posts</h1>
            {posts.map(userPost => <PostCard post={userPost}/>)}
        </article>
    )
}

export default LandingPage;