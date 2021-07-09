import Container from './container'
import MobileMenu from '../components/mobile-menu'
import Link from 'next/link'
import FancyLink from '../components/fancyLink'

export default function Header({navItems}) {
    return (

        <header>
                      
            <Container>

              <div className="flex flex-wrap p-4">

                <div className="w-2/3">
                  <img className="w-full" src="logo.png" alt="The Birth Mum" />
                </div>

                <div className="w-1/3">
                  <MobileMenu />
                </div>

              </div>
                
                
            </Container>
            
        </header>
    )
}

