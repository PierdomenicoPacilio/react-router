import axios from "axios"
import { useEffect, useState } from "react"
export default function PostsList() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
        </li>)}
    </ul>
}