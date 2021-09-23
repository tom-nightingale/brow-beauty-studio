import { useContext, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { Image, renderMetaTags } from "react-datocms";

import { request } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments"
import { navItems } from '@/lib/navItems'

import { phoneNumber } from '@/helpers/constants'

import { IntroContext } from '@/context/intro'

import Layout from '@/components/Layout'
import Button from '@/components/Button'
import Treatment from '@/components/Treatment'
import Container from '@/components/Container'
import Contact from 'components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home({ data: {home, site, treatments} }) {

  const containerRef = useRef(null);
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 2750);
  },[]);

  const fade = {
    initial: { opacity: 0 },
    enter: { 
      opacity: 1,
      transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1], delay: introContext ? 0 : 2.75 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
    }
  }

  const fadeIn = {
    initial: { opacity: introContext ? 1 : 0 },
    enter: { 
      opacity: 1,
      transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1], delay: introContext ? 0 : 2.75 }
    },
    exit: {
      opacity: 1,
      transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
    }
  }

  const logoBackground = {
    initial: {
      opacity: introContext ? 0 : 1,
    },
    enter: {
      opacity: 0,
      transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: 2 }
    },  
    exit: {
      opacity: 0,
      zIndex: -100,
    }
  }

  const logoFade = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: introContext ? 0 : 1,
      transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
    },  
    exit: {
      opacity: 0,
      transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
    }
  }

  const backToTop = {
    initial: {
      opacity: 0,
    },
    enter: { 
      opacity: 1,
      transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: 5 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
    }
  }
  
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

                {/* Start Intro */}
                  {!introContext &&
                    <m.div variants={logoBackground} className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full min-h-screen bg-white">
                      <m.div variants={logoFade} className="w-2/3 mx-auto md:w-1/3">
                        <img src="/logo-circle-dark.png" alt="The Brow &amp; Beauty Studio" className="block" />
                      </m.div>
                    </m.div>
                  }
                {/* End intro */}

                {/* Start constant header */}
                  <m.div variants={fadeIn}>
                    <Header />  
                  </m.div>
                {/* End constant header */}
              </m.div>
              
              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
              >  
                
                <m.div variants={fade} className="relative z-20">   
                  
                  <Container>

                    <ul className="relative z-10 justify-around hidden max-w-lg p-4 mx-auto mt-8 font-medium text-white uppercase bg-black md:flex">
                      {navItems.map(({ title, url, type }, i) => {
                        return(
                          type == "route" ? (
                            <li key={i}>
                              <Link href={`/${url}`}>
                                <a className="relative block p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white/25 hover:after:w-full">
                                  {title}
                                </a>
                              </Link>
                            </li>
                          ) : (
                            url == "Home" ? (
                              <>
                              </>
                            )
                            : (
                              <li key={i}>
                                <a data-scroll-to data-offset="-100" className="relative block p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white/25 hover:after:w-full" href={`#${url}`}>
                                  {title}
                                </a>
                              </li>
                            )
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
                          <h2 className="lg:mt-[80px]">Treatments</h2>
                          
                          <div className="flex flex-col">
                            <Link href="/treatment-menu">
                              <a className="inline-block mx-auto mb-5 text-center btn">
                                View full treatment menu
                              </a>
                            </Link>
                            <Link href="/book">
                              <a className="btn btn--secondary text-center mb-8 lg:mb-[175px] inline-block mx-auto">
                                Book online
                              </a>
                            </Link>
                          </div>
                          
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

                  <Contact />

                  <Footer />
                  
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

  return {
    props: { 
      data,
    }
  }
}
