
import {useState, useEffect}  from "react";
import {useRouter} from "next/router";
import MainLayout from "../../components/MainLayout";
import Link from 'next/link'



export default function Post({ post: serverPost}) {

    const router = useRouter()
    const [post, setPosts] = useState(serverPost)
    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const post = await response.json()
            setPosts(post)
        }

        if(!post)
            load()

    },[])



    if(!post) {
        return (
            <MainLayout>
                <p>loading</p>
            </MainLayout>
        )
    }


    return (
        <MainLayout>
            <h1>{post.title}</h1>
            <hr/>
            <p>{post.body}</p>
            <Link href={`/posts`}><a>Back to posts</a></Link>
        </MainLayout>
    )
}





export async function getServerSideProps(context) {
    if(!context.req){
        return {post: null}
    }
    const response = await fetch(`http://localhost:4200/posts/${context.query.id}`)
    const post = await response.json()
    return {
        props: {
            post,
        },
    }
}