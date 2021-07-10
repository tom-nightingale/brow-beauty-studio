import Container from './container'

export default function Footer() {
    return (
        <footer className="py-16 bg-black">
            <Container>
                <img className="w-[270px] mx-auto" src="/logo-circle-dark.png" alt="The Brow &amp; Beauty Studio" />

                <ul className="relative z-10 justify-around hidden max-w-lg p-4 mx-auto mt-8 text-white uppercase bg-black md:flex">
                    <li>
                    <a className="block p-2" href="Treatments">
                        Treatments
                    </a>
                    </li>
                    <li>
                    <a className="block p-2" href="About">
                        About
                    </a>
                    </li>
                    <li>
                    <a className="block p-2" href="">
                        Where
                    </a>
                    </li>
                    <li>
                    <a className="block p-2" href="">
                        Contact
                    </a>
                    </li>
                    <li>
                    <a className="block p-2" href="">
                        Social
                    </a>
                    </li>
                </ul>

                <hr className="w-1/6 mx-auto mt-16 opacity-20" />

                <p className="mt-16 font-serif text-center text-white">&copy; Copyright The Brow & Beauty Studio 2021 - All rights reserved</p>

                
            </Container>
        </footer>
    )
}