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
import Where from 'components/Where'
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
                      <m.div variants={logoFade} className="w-2/3 mx-auto md:w-1/3 mt-[-100px] sm:mt-0">
                        <img src="/logo-circle-dark.png" width="1400" height="1050" alt="The Brow &amp; Beauty Studio" className="block" />
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
                                <a className="text-xs lg:text-sm xl:text-base relative block p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white/25 hover:after:w-full">
                                  {title}
                                </a>
                              </Link>
                            </li>
                          ) : (
                            url == "Home" ? (
                               <li key={i}>
                                <Link href={`/${url}`}>
                                  <a className="text-xs lg:text-sm xl:text-base relative hidden p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white/25 hover:after:w-full">
                                    {title}
                                  </a>
                                </Link>
                              </li>
                            )
                            : (
                              <li key={i}>
                                <a data-scroll-to data-offset="-100" className="text-xs lg:text-sm xl:text-base relative block p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white/25 hover:after:w-full" href={`#${url}`}>
                                  {title}
                                </a>
                              </li>
                            )
                          )
                        )
                      })}
                    </ul>

                    <div className="relative z-0 pb-12 overflow-hidden bg-gray-200 md:pb-0 md:-mt-8">

                      <div className="flex flex-wrap items-center justify-start xl:justify-end w-full md:min-h-[610px]">

                        <div className="absolute top-[50%]  left-0 translate-y-[-50%] z-10 opacity-20 xl:opacity-100 h-full xl:w-1/2">
                          <Image data={{...home.heroImage.responsiveImage, alt: "The Brow &amp; Beauty Studio" }} />
                        </div>

                        <img src="/logo.png" width="1600" height="421" alt="" className="absolute w-full top-[50%] right-0 translate-y-[-50%] z-0 opacity-5 hidden lg:block" />

                        <div className="relative z-20 h-full max-w-screen-sm p-8 py-12 lg:w-3/5 xl:max-w-none xl:w-1/2 xl:p-12 2xl:p-24">

                          <h1 className="mb-12 text-3xl lg:mb-16 md:text-5xl">{home.heroHeading}</h1>

                          <Button destination="#Treatments" label="Treatments" modifier="mr-4" />
                          <Button destination="#Contact" label="Contact" secondary modifier="" />

                        </div>

                      </div>

                    </div>

                    <div className="relative z-50 w-32 h-32 mx-auto -mt-12">
                      <Image className="border-4 border-white rounded-full" data={{...home.profilePhoto.responsiveImage, alt: "The Brow &amp; Beauty Studio"}} />
                    </div>

                    <div className="relative max-w-screen-xl py-12 mx-auto -mt-12 md:py-20" id="Treatments">

                        <div className="relative z-10 text-center">
                          <h2 className="lg:mt-[30px] leading-tight">{home.treatmentHeadingTitle} <span className="block text-2xl font-script lg:text-4xl">{home.treatmentHeadingScript}</span></h2>
                          
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

                        <img data-scroll data-scroll-sticky data-scroll-target="#Treatments" src="/logo-light-trimmed.png" alt="" width="1600" height="908" className="absolute top-0 w-full" />

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

                    <Where />

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
                  <img src="/back-to-top.svg" width="24" height="24" alt="Back to top" className="w-6 h-6 transition-all duration-500 opacity-50 hover:opacity-100" />
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
      treatmentHeadingTitle
      treatmentHeadingScript
      h1
      content
      contentImage {
        responsiveImage(imgixParams: {fm: png, fit: crop, w: 961, h: 1817 }) {
          ...responsiveImageFragment
        }
      }
      profilePhoto {
        responsiveImage(imgixParams: {fm: png, fit: crop, w: 200, h: 200 }) {
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
