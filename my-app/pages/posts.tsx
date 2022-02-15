import Head from "next/head";
import MainLayout from "../components/MainLayout";
import Link from 'next/link'
import {useEffect, useState} from "react";
import {MyPost} from "../interfaces/post";
import {NextPageContext} from "next";


interface PostsPageProps {
    posts: MyPost[]
}

export default function Posts({posts: serverPosts}: PostsPageProps) {

    // const [posts, setPosts] = useState(serverPosts)
    //
    //
    // useEffect(() => {
    //     async function load() {
    //         const response = await fetch(`http://localhost:4200/posts`)
    //         const post = await response.json()
    //         setPosts(post)
    //     }
    //
    //     if (!serverPosts)
    //         load()
    //
    // }, [])
    //
    // if (!posts) {
    //     return (
    //
    //         <MainLayout>
    //             <p>Loading</p>
    //         </MainLayout>
    //
    //     )
    // }


    return (
        <MainLayout>
            <Head>
                <title>My page title</title>
            </Head>
            <h1>Posts page</h1>

            <ul>
                {serverPosts.map(post =>
                    <li key={post.id}>
                        <Link href={`/post/${post.id}`}><a>{post.title}</a></Link>
                    </li>
                )}
            </ul>

        </MainLayout>

    )
}


export async function getServerSideProps(context: NextPageContext) {

    const response = await fetch(`${process.env.API_URL}/posts`)
    const posts: MyPost[] = await response.json()
    return {
        // fallback: false,
        props: {
            posts,
        }
    }
}