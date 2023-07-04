import '../public/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Nav from '../components/Navbar/Nav';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    var router = useRouter()
    var [nav, setNav] = useState(true)
    useEffect(() => {
        if (router.pathname === '/admin') {
            setNav(false)
        } else {
            setNav(true)
        }
    }, [router.pathname])
    return (
        <SessionProvider session={session}>
            {/* <Navbar /> */}
            {(nav) && <Nav />}
            <Component {...pageProps} />
        </SessionProvider>
    )
}

export default MyApp