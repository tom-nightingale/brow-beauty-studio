import Container from '@/components/container'
import MobileMenu from '@/components/mobile-menu'
import SocialIcon from '@/components/social-icon'

export default function Header({navItems}) {
    return (

        <header>
                      
            <Container>

              <div className="flex flex-wrap items-center justify-between p-4">

                <div className="flex-col justify-center hidden w-1/5 md:flex md:pl-[2%]">
                  <SocialIcon classes="w-8 h-8 mb-5" svgFill="#1D1D1B" platform="instagram" url="https://www.instagram.com" />
                  <SocialIcon classes="w-8 h-8 mb-5" svgFill="#1D1D1B" platform="facebook" url="https://www.facebook.com" />
                </div>

                <div className="w-3/5">
                  <img className="w-full max-w-[750px] mx-auto" src="logo.png" alt="The Birth Mum" />
                </div>

                <div className="w-1/5 bg-gray-200">
                  <MobileMenu />
                </div>

              </div>
                
            </Container>
            
        </header>
    )
}

