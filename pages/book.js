import { useRef } from 'react'
import Head from 'next/head'
import { request } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments"
import { quickFade } from '@/helpers/transitions'
import { phoneNumber } from '@/helpers/constants'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { Image, renderMetaTags } from "react-datocms";
import Script from 'next/script'

export default function Home({ data: {home, site} }) {

  const containerRef = useRef(null);  
  
  return (

    <Layout>

      <Head>
            {renderMetaTags(home.seo.concat(site.faviconMetaTags))} 
      </Head>

      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.07,  }}
        containerRef={containerRef}
        watch={[]}
      >

        <div data-scroll-container ref={containerRef} id="scroll-container">
            
          <div data-scroll-section>            
            
            <LazyMotion features={domAnimation}>

              <Header />  
              
              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
              >

                <m.div variants={quickFade} className="relative z-20"> 
                  
                  <Container>

                    <div className="relative max-w-screen-xl py-12 mx-auto md:py-20" id="Treatments">

                      <div className="relative z-10 text-center">
                      
                        <h2>Book Online</h2>

                        {/* iFrame for Ovatu */}
                        
                        <div className="p-10 my-10" id="bookapp-reservation-widget"></div>

                        <Script id="ovatu-js" strategy="afterInteractive">
                          {`
                            !function(e,t,n){var u=n.queue||[];e.BookAppWidgetReady=n=function(e){n.queue.push(e)},n.queue=u;var o="script",a=t.createElement(o),i=t.getElementsByTagName(o)[0];a.src="https://cdn.book.app/embed/v1.js",a.type="text/javascript",a.async=!0,a.addEventListener("load",function(){for(;n.queue.length;)n.queue.shift()()},!1),i.parentNode.insertBefore(a,i)}(window,document,window.BookAppWidgetReady||function(){});
                            BookAppWidgetReady(function () {
                              BookApp.widget('#bookapp-reservation-widget', 'brow-beauty-studio');
                            });
                          `}
                        </Script> 

                      </div>    

                    </div>                       

                    <div className="relative p-8 my-20 overflow-hidden bg-gray-200 sm:p-12 lg:p-20" id="Where">

                      <div className="sm:max-w-screen-xs">

                        <p className="mb-[-6px] font-serif text-4xl leading-none text-center text-white lg:text-5xl lg:mb-[-9px] relative z-50" data-scroll-direction="horizontal" data-scroll-speed="-0.1" data-scroll>Where</p>

                        <div className="relative z-10 p-6 pb-16 mb-8 bg-white shadow-lg md:p-12 md:pb-20">

                            <p>A: The Brow and Beauty Studio</p>
                            <div className="pl-5 leading-relaxed">
                              <p>Old Mill Cottage</p>
                              <p>Rolleston</p>
                              <p>Southwell Golf Club</p>
                              <p>Nottinghamshire</p>
                              <p>NG23 5SF</p>
                            </div>

                            <p>T: <a className="inline-block pl-1 mt-8 font-bold" href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>

                            <Button
                              destination="https://www.google.com/maps/dir//Southwell+Golf+Club,+Occupation+Ln,+Southwell+NG25+0TS/@53.0661906,-0.9024038,17z/data=!4m16!1m6!3m5!1s0x4879b60c9f9d4b75:0x75f5bf1d6605ff74!2sSouthwell+Golf+Club!8m2!3d53.0661394!4d-0.9003083!4m8!1m0!1m5!1m1!1s0x4879b60c9f9d4b75:0x75f5bf1d6605ff74!2m2!1d-0.9003083!2d53.0661394!3e2"
                              modifier="mt-8 absolute -bottom-7 left-1/2 -translate-x-1/2 w-4/5 sm:w-auto text-center"
                              label="Get directions"
                              secondary
                              external
                            />

                        </div>
                        
                        <div className="absolute top-0 left-0 z-0 w-full h-full overflow-hidden">
                          <Image data={{...home.locationImage.responsiveImage, alt: "The Brow &amp; Beauty Studioooo"}} className="absolute w-[220%] md:w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                        </div>

                      </div>

                      <div className="absolute hidden -translate-y-1/2 left-[500px] sm:block top-1/2">
                          
                        <a className="inline-block p-4 px-12 text-sm uppercase -rotate-90 bg-white" href="#">View map</a>
                        
                      </div>
 
                    </div>

                  </Container>

                  <Contact />

                  <Footer />
                  
                </m.div>
                
              </m.div>

            </LazyMotion>
          
          </div> {/* scroll section */}
          
        </div> {/* scroll container */}

      </LocomotiveScrollProvider>

    </Layout>

  )
}

const HOMEPAGE_QUERY = `
  query HomePage {
    site: _site {
      faviconMetaTags {
        ...metaTagsFragment
      }
    }
    home {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      locationImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2017, h: 1464 }) {
          ...responsiveImageFragment
        }
      }
    }
  }  
  ${metaTagsFragment}
  ${responsiveImageFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY
  })

  return {
    props: { 
      data,
    }
  }
}
