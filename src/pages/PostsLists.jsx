import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
export default function PostsList() {

    const [posts, setPosts] = useState([])

    const url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        axios.get(url)
            .then(element =>
                setPosts(element.data)
            )
            .catch(error =>
                console.log(error)
            )
    }, [])

    return <ul>
        {posts.map(post => <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/dettaglio-post/${post.id}`}>dettaglio post</Link>
        </li>)}
    </ul>
}