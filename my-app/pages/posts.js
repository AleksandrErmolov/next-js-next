import Head from "next/head";
import MainLayout from "../components/MainLayout";

export default function Posts () {
    return (
        <MainLayout>
            <Head>
                <title>My page title</title>
            </Head>
            <h1>Posts page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </MainLayout>

    )
}