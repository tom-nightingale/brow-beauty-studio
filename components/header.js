import Container from '@/components/container'
import MobileMenu from '@/components/mobile-menu'
import SocialIcon from '@/components/social-icon'

export default function Header({navItems}) {
    return (

        <header className="relative" id="Home">

          <div className="absolute top-1/2 -translate-y-1/2 left-[2%] flex-col justify-center hidden w-1/5 md:flex">
            <SocialIcon classes="w-8 h-8 mb-5 hover:scale-110 transition duration-200 focus:scale-90" svgFill="#1D1D1B" platform="instagram" url="https://www.instagram.com" />
            <SocialIcon classes="w-8 h-8 mb-5 hover:scale-110 transition duration-200 focus:scale-90" svgFill="#1D1D1B" platform="facebook" url="https://www.facebook.com" />
          </div>   
                      
            <Container>

              <div className="flex flex-wrap items-center justify-start p-4 md:justify-center">

                <div className="w-9/12 2xl:w-full">
                  <img className="w-full max-w-[750px] mx-auto" src="logo.png" alt="The Birth Mum" />
                </div>

               <MobileMenu />

              </div>
                
            </Container>
            
        </header>
    )
}

