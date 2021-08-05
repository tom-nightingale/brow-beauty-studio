import Container from './container'
import Link from 'next/link'

export default function Footer({ navItems }) {
    return (
        <footer className="relative z-50 py-16 bg-black">
            <Container>
                <img className="w-[270px] mx-auto" src="/logo-circle-dark.png" alt="The Brow &amp; Beauty Studio" />

                <ul className="relative z-10 justify-around hidden max-w-lg p-4 mx-auto mt-8 text-white uppercase bg-black md:flex">
                    {navItems.map(({ title, url }, i) => {
                        return(
                          url == "treatment-menu" ? (
                            <Link href="/treatment-menu">
                              <a className="relative block p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white hover:after:w-full">
                                {title}
                              </a>
                            </Link>
                          ) : (
                            <li key={i}>
                              <a data-scroll-to data-offset="-100" className="relative block p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white hover:after:w-full" href={`#${url}`}>
                                {title}
                              </a>
                            </li>
                          )
                        )
                      })}
                </ul>

                <hr className="w-1/6 mx-auto mt-16 opacity-20" />

                <p className="px-8 mt-16 font-serif text-center text-white">&copy; Copyright The Brow & Beauty Studio 2021 - All rights reserved</p>
                
            </Container>
        </footer>
    )
}