import {useRouter} from "next/router";
import Head from 'next/head'
import MainLayout from "../../components/MainLayout";


export default function Index() {

    const router = useRouter()

    return (
        <MainLayout title={'About page'}>
            <h1>About</h1>
            <button onClick={() => router.push("/")}>Go back to home</button>
            <button onClick={() => router.push("/posts")}>Go to posts</button>
        </MainLayout>
    )
}