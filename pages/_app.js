import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { IntroContext } from '@/context/intro'
import '../styles/main.css'


export default function App({ Component, pageProps }) {
    const router = useRouter();
    const [introContext, setIntroContext] = useState(false);

    // useEffect(() => {
    //     const handleRouteChange = (url) => {
    //     gtag.pageview(url)
    //     }
    //     router.events.on('routeChangeComplete', handleRouteChange)
    //     return () => {
    //     router.events.off('routeChangeComplete', handleRouteChange)
    //     }
    // }, [router.events])

    return (
        <>
            <IntroContext.Provider value={[introContext, setIntroContext]}>
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
            </IntroContext.Provider>
        </>
    )
}