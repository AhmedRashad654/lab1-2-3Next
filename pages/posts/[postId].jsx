import React from 'react'

export default function Post({ onePost }) {
    return (
      <div style={{padding:'50px'}}>
        <p>userId:{onePost.userId}</p>
        <p>Id : {onePost.id}</p>
        <p>title : {onePost.title}</p>
        <p>body : {onePost.body}</p>
      </div>
    );
}

export async function getServerSideProps({ params }) {
    const { postId } = params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const result = await response.json();
    return {
        props: { onePost: result }
    };
}

