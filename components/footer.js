import Container from './container'

export default function Footer({ navItems }) {
    return (
        <footer className="relative z-50 py-16 bg-black">
            <Container>
                <img className="w-[270px] mx-auto" src="/logo-circle-dark.png" alt="The Brow &amp; Beauty Studio" />

                <ul className="relative z-10 justify-around hidden max-w-lg p-4 mx-auto mt-8 text-white uppercase bg-black md:flex">
                    {navItems.map((item, i) => {
                        return(
                          <li key={i}>
                            <a data-scroll-to data-offset="-100" className="block p-2 tracking-widest" href={`#${item}`}>
                              {item}
                            </a>
                          </li>
                        )
                      })}
                </ul>

                <hr className="w-1/6 mx-auto mt-16 opacity-20" />

                <p className="px-8 mt-16 font-serif text-center text-white">&copy; Copyright The Brow & Beauty Studio 2021 - All rights reserved</p>

                
            </Container>
        </footer>
    )
}