import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import {useEffect} from "react";
import {Router} from "next/router";


function MyApp({Component, pageProps}) {

    useEffect(() => {
        Router.events.on('routeChangeStart', () => NProgress.start());
        Router.events.on('routeChangeComplete', () => NProgress.done());
        Router.events.on('routeChangeError', () => NProgress.done());

        return () => {
            Router.events.off('routeChangeStart', () => NProgress.start());
            Router.events.off('routeChangeComplete', () => NProgress.done());
            Router.events.off('routeChangeError', () => NProgress.done());
        };
    }, []);



    return (
        <>
            <Component {...pageProps} />
            <style jsx global>
                {`
body {
font-family: Roboto, sans-serif;
}
                `}

            </style>
        </>


    )
}


export default MyApp