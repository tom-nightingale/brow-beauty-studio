import { useRef, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { request } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments"
import { logoBackground, logoFade, fade, backToTop } from '@/helpers/transitions'
import { instagramURL, facebookURL, phoneNumber } from '@/helpers/constants'
import Layout from '@/components/layout'
import Button from '@/components/button'
import Treatment from '@/components/treatment'
import SocialIcon from '@/components/social-icon'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { Image, renderMetaTags } from "react-datocms";
import InstagramFeed from 'react-ig-feed'
import Script from 'next/script'

export default function Home({ data: {home, site, treatments}, igUserToken }) {

  const containerRef = useRef(null);

  const navItems = [
    {
      title: "Home",
      url:  "Home"
    },
    {
      title: "Treatments",
      url:  "Treatments"
    },
    {
      title: "Treatment Menu",
      url:  "treatment-menu"
    },
    {
      title: "About",
      url:  "About"
    },
    {
      title: "Where",
      url:  "Where"
    },
    {
      title: "Contact",
      url: "Contact"
    },
    {
      title: "Social",
      url: "Social"
    }
  ];
  
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
              
              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
              >

                <m.div variants={logoBackground} className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full min-h-screen bg-white">
                  <m.div variants={logoFade} className="w-2/3 mx-auto md:w-1/3">
                    <img src="/logo-circle-dark.png" alt="The Brow &amp; Beauty Studio" className="block" />
                  </m.div>
                </m.div>
                
                <m.div variants={fade} className="relative z-50"> 

                  <Header navItems={navItems} />
                  
                  <Container>

                    <ul className="relative z-10 justify-around hidden max-w-lg p-4 mx-auto mt-8 font-medium text-white uppercase bg-black md:flex">
                      {navItems.map(({ title, url }, i) => {
                        return(
                          url == "treatment-menu" ? (
                            <li key={i}>
                              <Link href="/treatment-menu">
                                <a className="relative block p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white/25 hover:after:w-full">
                                  {title}
                                </a>
                              </Link>
                            </li>
                          ) : (
                          <li key={i}>
                            <a data-scroll-to data-offset="-100" className="relative block p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white/25 hover:after:w-full" href={`#${url}`}>
                              {title}
                            </a>
                          </li>
                          )
                        )
                      })}
                    </ul>

                    <div className="relative z-0 overflow-hidden bg-gray-200 md:-mt-8">

                      <div className="flex flex-wrap items-center justify-end w-full md:min-h-[610px]">

                        <div className="absolute top-[50%] left-0 translate-y-[-50%] z-10 opacity-20 lg:opacity-100">
                          <Image data={{...home.heroImage.responsiveImage, alt: "The Brow &amp; Beauty Studio" }} />
                        </div>

                        <img src="/logo.png" alt="" className="absolute w-full top-[50%] right-0 translate-y-[-50%] z-0 opacity-5 hidden lg:block" />

                        <div className="relative z-20 h-full max-w-screen-sm p-8 py-12 lg:p-4 lg:w-2/5">

                          <h1 className="mb-12 font-sans text-3xl tracking-widest uppercase lg:mb-16 md:text-5xl">{home.heroHeading}</h1>

                          <Button destination="#Treatments" label="Treatments" modifier="mr-4" />
                          <Button destination="#Contact" label="Contact" secondary modifier="" />

                        </div>

                      </div>

                    </div>

                    <div className="relative max-w-screen-xl py-12 mx-auto md:py-20" id="Treatments">

                        <div className="relative z-10 text-center">
                          <h2 className="lg:mt-[100px]">Treatments</h2>
                          <Link href="/treatment-menu">
                            <a className="btn text-center lg:mb-[175px] inline-block mx-auto">
                              View full treatment menu
                            </a>
                          </Link>
                        </div>

                        <img data-scroll data-scroll-sticky data-scroll-target="#Treatments" src="/logo-light-trimmed.png" alt="" className="absolute top-0 w-full" />

                        {treatments.map((treatment, i) => {
                          return (
                            <div key={i}>
                              {i %2 == 0 &&
                                <Treatment
                                  key={i}
                                  image={treatment.image}
                                  overlay={treatment.imageOverlayText}
                                  heading={treatment.heading}
                                  subHeading={treatment.subheading}
                                />
                              }

                              {i %2 != 0 && 
                                <Treatment
                                  key={i}
                                  image={treatment.image}
                                  overlay={treatment.imageOverlayText}
                                  heading={treatment.heading}
                                  subHeading={treatment.subheading}
                                  alt
                                />
                              }                          
                            </div>                          
                          )
                        })}

                        <div className="mt-8 text-center lg:mt-16">
                            <Link href="/treatment-menu">
                              <a className="inline-block mx-auto text-center btn">
                                View full treatment menu
                              </a>
                            </Link>
                        </div>
                      
                    </div>

                    <main className="flex-wrap items-center md:my-20 md:flex" id="About">

                      <article className="md:w-1/2">
                      
                        <div className="p-4 content xs:p-12 lg:p-20">

                          <h2>{home.h1}</h2>

                          <div className="content" dangerouslySetInnerHTML={{ __html: home.content }} />

                          <p className="mt-8 text-lg tracking-wider uppercase">Call for your appointment On <a className="inline-block font-bold" href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
                          
                        </div>

                      </article>

                      <div className="md:w-1/2">

                        <div className="mx-auto max-w-[500px]">

                          <Image data={{...home.contentImage.responsiveImage, alt: "The Brow &amp; Beauty Studio"}} />

                        </div>

                      </div>

                    </main>                    

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
                          
                        <a className="inline-block p-4 px-12 text-sm uppercase transition-all duration-200 -rotate-90 bg-white hover:pt-8" href="https://www.google.com/maps/search/Old+Mill+Cottage++Rolleston++Southwell+Golf+Club++Nottinghamshire++NG23+5SF/@53.0661906,-0.9024038,17z/data=!3m1!4b1" target="_blank">View map</a>
                        
                      </div>
 
                    </div>

                  </Container>


                  <div className="px-6 py-16 bg-gray-100 sm:p-8 md:p-12 lg:p-20" id="Contact">

                    <Container>

                      <p className="mb-[-6px] font-serif text-4xl leading-none text-center text-gray-300 lg:text-5xl lg:mb-[-9px]">Contact</p>
                      
                      <div className="relative max-w-screen-lg p-8 mx-auto bg-white shadow-lg sm:p-8 md:p-12 lg:p-20">

                        <div className="relative">

                          <img src="logo-circle-light.png" alt="The Brow &amp; Beauty Studio" className="absolute z-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />

                          <div className="relative z-20">

                            <p className="max-w-screen-sm mx-auto leading-relaxed text-center">If you'd like to get in touch to make a booking or ask a question please use the form below. If you'd prefer to talk, fel free to give me a call directly on <a className="inline-block font-bold" href={`tel:${phoneNumber}`}>{phoneNumber}</a>.</p>

                            <form id="form" action="" method="POST" className="relative z-10 flex flex-wrap mt-4 -m-1 overflow-x-hidden">
                              <label className="w-full md:w-1/2">
                                <input required type="text" className="w-full" name="name" placeholder="Your Name *" />
                              </label>
                              <label className="w-full md:w-1/2">
                                <input required type="text" className="w-full" name="phonenumber" placeholder="Your Number *" />
                              </label>
                              <label className="w-full md:w-1/2">
                                <select className="w-full" name="Treatment Type">
                                  <option value="Facial">Facial</option>
                                  <option value="Eyebrow Care">Eyebrow Care</option>
                                  <option value="Eyelash Extensions">Eyelash Extensions</option>
                                  <option value="Waxing">Waxing</option>
                                  <option value="Massage">Massage</option>
                                  <option value="Other">Other</option>
                                </select>
                              </label>
                              <label className="w-full md:w-1/2">
                                <input required type="tel" className="w-full" name="telephone" placeholder="Telephone" />
                              </label>
                              <label className="w-full">
                                <textarea required placeholder="Your message" name="message" className="w-full min-h-48"></textarea>
                              </label>
                              <input type="text" name="_gotcha" className="hidden" />
                              <div className="w-full mt-8 text-center">
                                <input type="submit" className="inline-block p-4 mx-auto text-sm text-white uppercase bg-black border border-black md:p-6 lg:px-8 lg:py-4" value="Send Form" />
                              </div>
                            </form>

                          </div>
                          
                        </div>
                        
                      </div>
                      
                    </Container>
                    
                  </div>

                  <div className="bg-black">

                    <div id="Social">

                      <Container>

                        <div className="p-8 md:p-12 lg:p-20">

                          <div className="flex items-center justify-center">

                            <h3 className="mb-0 mr-4 text-3xl text-center text-gray-100 xl:text-5xl">Social</h3>

                            <SocialIcon classes="mb-0 w-6 h-6 mx-2 hover:scale-110 transition duration-200 focus:scale-90" svgFill="#FFF" platform="instagram" url={instagramURL} />
                            <SocialIcon classes="mb-0 w-6 h-6 mx-2 hover:scale-110 transition duration-200 focus:scale-90" svgFill="#FFF" platform="facebook" url={facebookURL} />

                          </div>
                          
                        </div>
                        
                      </Container>
                      
                      <div className="socialFeed">
                        <InstagramFeed token={igUserToken} counter="6"/>
                      </div>

                    </div>

                    <m.div variants={fade}>
                      <Footer navItems={navItems} />
                    </m.div>

                  </div>
                  
                </m.div>

              </m.div>

            </LazyMotion>
          
          </div> {/* scroll section */}

          <LazyMotion features={domAnimation}>
            <m.div
              initial="initial"
              animate="enter"
              exit="exit"
            >
            <m.div variants={backToTop} className="fixed z-50 bottom-4 right-4">
              <a className="block" data-scroll-to href="#Home">
                <img src="/back-to-top.svg" alt="Back to top" className="w-6 h-6 transition-all duration-500 opacity-50 hover:opacity-100" />
              </a>
            </m.div>    
            </m.div>
          </LazyMotion>


          {/* iFrame for Ovatu
          <div id="bookapp-reservation-widget"></div>

          <Script id="ovatu-js" strategy="afterInteractive">
            {`
              !function(e,t,n){var u=n.queue||[];e.BookAppWidgetReady=n=function(e){n.queue.push(e)},n.queue=u;var o="script",a=t.createElement(o),i=t.getElementsByTagName(o)[0];a.src="https://cdn.book.app/embed/v1.js",a.type="text/javascript",a.async=!0,a.addEventListener("load",function(){for(;n.queue.length;)n.queue.shift()()},!1),i.parentNode.insertBefore(a,i)}(window,document,window.BookAppWidgetReady||function(){});
              BookAppWidgetReady(function () {
                BookApp.widget('#bookapp-reservation-widget', 'brow-beauty-studio');
              });
            `}
          </Script> */}

                
          
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
      title
      heroHeading
      heroImage {
        responsiveImage(imgixParams: {fm: png, fit: crop, w: 829, h: 850 }) {
          ...responsiveImageFragment
        }
      }
      h1
      content
      contentImage {
        responsiveImage(imgixParams: {fm: png, fit: crop, w: 961, h: 1817 }) {
          ...responsiveImageFragment
        }
      }
      locationImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2017, h: 1464 }) {
          ...responsiveImageFragment
        }
      }
    }
    treatments: allTreatmentCategories {
      heading
      subheading
      imageOverlayText
      image {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 500, h: 500 }) {
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

  const igUserToken = process.env.IG_USER_TOKEN;

  return {
    props: { 
      data,
      igUserToken,
    }
  }
}
