import {useRouter} from "next/router";


export default function Index() {

    const router = useRouter()

    return (
        <>
            <h1>About</h1>
            <button onClick={() => router.push("/")}>Go back to home</button>
            <button onClick={() => router.push("/posts")}>Go to posts</button>

        </>
    )
}