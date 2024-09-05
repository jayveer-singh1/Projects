import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AxiosLib() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
            setComments(res.data);
        }
        fetchData();
    }, []);

    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id} style={{width:'300px', border:'2px solid black', height:'220px', padding:'5px', margin:'5px'}}>
                    <h3><b>Name:-</b>{comment.name}</h3>
                    <p><b>Comment:-</b>{comment.body}</p>
                    <p><b>Email:-</b> {comment.email}</p>
                </div>
            ))}npm 
        </div>
    )
}

export default AxiosLib;
