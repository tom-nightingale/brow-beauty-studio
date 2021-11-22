import { useRouter } from 'next/router'
import Link from 'next/link'
import InstagramFeed from 'react-ig-feed'
import { m } from 'framer-motion'
import { navItems } from '@/lib/navItems'
import { instagramURL, facebookURL } from '@/helpers/constants'
import { fade } from '@/helpers/transitions'
import Container from '@/components/Container'
import SocialIcon from '@/components/SocialIcon'

export default function Footer() {

    const router = useRouter();
    let currentPath = router.pathname;

    return (
      <m.div variants={fade}>
      
        <div className="bg-black">

          <div id="Social">

            <Container>

              <div className="p-8 md:p-12 lg:p-20">

                <div className="flex items-center justify-center">

                  <h3 className="mb-0 mr-4 text-3xl text-center text-gray-100 xl:text-5xl">Social</h3>

                  <SocialIcon classes="mb-0 w-8 h-8 mx-2 hover:scale-110 transition duration-200 focus:scale-90" svgFill="#FFF" platform="instagram" url={instagramURL} />
                  <SocialIcon classes="mb-0 w-8 h-8 mx-2 hover:scale-110 transition duration-200 focus:scale-90" svgFill="#FFF" platform="facebook" url={facebookURL} />

                </div>
                
              </div>
              
            </Container>
            
            <div className="socialFeed">
              <InstagramFeed token="IGQVJXVXJWa0l2UGpWNTllREFMZAE02cmhxX0w3cG5SdGY4NmVocWJoYm9Ic1BtUUU2b0tTRlo4cXZA5YUMzc3dIZAW1jZAW1zZAGRXcFFiTW1aUXFIcHRWNS1QRFdZAMXNZALU5KOVZANRHVfb211a0xkclF6SwZDZD" counter="6"/>
            </div>

          </div>

          <footer className="relative z-50 py-16 bg-black">
            <Container>
                <img className="w-[270px] mx-auto" width="1400" height="1050" src="/logo-circle-dark.png" alt="The Brow &amp; Beauty Studio" />

                <ul className="relative z-10 justify-around hidden max-w-lg p-4 mx-auto mt-8 text-white uppercase bg-black md:flex">
                      {navItems.map(({ title, url, type }, i) => {
                        return(
                            type === "route" ? (
                                <li className="mb-5 text-center" key={i}>
                                    { currentPath == "/treatment-menu" || currentPath == "/book" ? (
                                        <Link href={`/${url}`}>
                                            <a className="relative p-2 inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white hover:after:w-full">
                                                {title}
                                            </a>
                                        </Link>
                                    ) : (
                                        <Link href={`/${url}`}>
                                            <a className="relative p-2 inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white hover:after:w-full">
                                                {title}
                                            </a>
                                        </Link>
                                    ) }
                                </li>
                            ) : (
                                <li className="mb-5 text-center" key={i}>
                                    { currentPath == "/treatment-menu" || currentPath == "/book" ? (
                                        <Link href={`/#${url}`}>
                                            <a className="relative p-2 inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white hover:after:w-full">
                                                {title}
                                            </a>
                                        </Link>
                                    ) : (
                                        <a data-scroll-to data-offset="-100" className="relative p-2 inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white hover:after:w-full" href={`#${url}`}>
                                            {title}
                                        </a>
                                    )}                                    
                                </li>
                            )                        
                        )
                    })}
                </ul>

                <hr className="w-1/6 mx-auto mt-16 opacity-20" />

                <p className="px-8 mt-16 font-serif text-center text-white">Asha Mackin - ABT Accredited Course.</p>
                
                <p className="px-8 mt-8 font-serif text-center text-white">&copy; Copyright The Brow & Beauty Studio 2021 - All rights reserved</p>

                
            </Container>

          </footer>

        </div>
      
      </m.div>
        
    )
}