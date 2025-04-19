import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
export default function Post() {
    const { id } = useParams()

    const [post, setPost] = useState({})

    const url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        axios.get(url + '/' + id)
            .then(element =>
                setPost(element.data)
            )
            .catch(error =>
                console.log(error)
            )
    }, [])

    return <ul>
        <li>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </li>
    </ul>
}