import {useRouter} from "next/router";
import MainLayout from "../../components/MainLayout";


export default function About ({title}) {

    const router = useRouter()

    return (
        <MainLayout title={'About page'}>
            <h1>{title}</h1>
            <button onClick={() => router.push("/")}>Go back to home</button>
            <button onClick={() => router.push("/posts")}>Go to posts</button>
        </MainLayout>
    )
}

About.getInitailProps = async () => {
   const response = await fetch('http://localhost:4200/about')
    const data = await response.json()
    console.log(data)

    return {
       title:data.title,
    }
}