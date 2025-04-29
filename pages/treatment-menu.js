import { useRef } from 'react'
import Head from 'next/head'
import { request } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments"
import { quickFade } from '@/helpers/transitions'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { renderMetaTags } from "react-datocms";
import Where from '@/components/Where'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function Home({ data: {home, site, treatmentCategory} }) {

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
                          <h2>Treatments</h2>
                        </div>

                        <img data-scroll data-scroll-sticky data-scroll-target="#Treatments" src="/logo-light-trimmed.png" alt="" className="absolute top-0 w-full" />

                        <div className="relative z-10 flex-wrap grid-flow-col p-8 pt-0 md:flex">

                          
                            {/* Splitting items into two columns for a better layout */}

                            {/* <div className="w-full md:w-1/2">

                              {treatmentCategory.map((category, i) => {
                                return (
                                    (category.id !== "50993166" && category.id !== "58367412") &&
                                    i < 3 &&
                                    <div key={i} className={`relative w-full p-8 text-center lg:p-16`}>
                                      <div className="py-4 border-b border-b-black/50">
                                        <h3 className="inline-block px-4 mx-auto mb-0">{category.heading}</h3>
                                        <p className="tracking-widest uppercase">{category.subheading}</p>
                                      </div>
                                      {category.treatments.map((treatment, i) => {
                                        return (
                                          <div className="relative" key={i}>
                                            <div className="py-10 lg:py-12">
                                              <h4 className="mb-2">{treatment.treatmentHeading}</h4>
                                              <p className="mb-4 font-serif">
                                              {treatment.treatmentSubheading &&
                                                <>
                                                | {treatment.treatmentSubheading} |
                                                </>
                                              }
                                              {treatment.treatmentPrice && 
                                                <>{treatment.treatmentPrice ? ` £${treatment.treatmentPrice}` : ``}
                                               </>
                                              }
                                              </p>
                                              {treatment.treatmentDescription && 
                                                <p className="text-sm">{treatment.treatmentDescription}</p>
                                              }
                                              <img src="/logo-circle-dark.png" alt="" className="absolute block w-20 transform -translate-x-1/2 -bottom-8 left-1/2" />
                                            </div>
                                          </div>
                                        )
                                      })}
                                    </div>                                      
                                )
                              })}  

                            </div> */}

                            {/* <div className="w-full md:w-1/2">

                              {treatmentCategory.map((category, i) => {
                                return (
                                   (category.id !== "50993166" && category.id !== "58367412") &&
                                    i > 2 &&
                                    <div key={i} className={`relative w-full p-8 text-center lg:p-16`}>
                                      <div className="py-4 border-b border-b-black/50">
                                        <h3 className="inline-block px-4 mx-auto mb-0">{category.heading}</h3>
                                        <p className="tracking-widest uppercase">{category.subheading}</p>
                                      </div>
                                      {category.treatments.map((treatment, i) => {
                                        return (
                                          <div className="relative" key={i}>
                                            <div className="py-10 lg:py-12">
                                              <h4 className="mb-2">{treatment.treatmentHeading}</h4>
                                              <p className="mb-4 font-serif">
                                              {treatment.treatmentSubheading &&
                                                <>
                                                | {treatment.treatmentSubheading} |
                                                </>
                                              }
                                              {treatment.treatmentPrice && 
                                                <>
                                                {treatment.treatmentPrice ? ` £${treatment.treatmentPrice} |` : ``}
                                                </>
                                              }
                                              </p>
                                              {treatment.treatmentDescription && 
                                                <p className="text-sm">{treatment.treatmentDescription}</p>
                                              }
                                              <img src="/logo-circle-dark.png" alt="" className="absolute block w-20 transform -translate-x-1/2 -bottom-8 left-1/2" />
                                            </div>
                                          </div>
                                        )
                                      })}
                                    </div>                                      
                                )
                              })}  

                            </div> */}

                            <div className="w-full">
                              {treatmentCategory.map((category, i) => {
                                return (
                                  // (category.id === "50993166" || category.id === "58367412") &&
                                  // i > 1 &&
                                  <div key={i} className={`relative w-full p-8 text-center lg:p-16`}>
                                    <div className="py-4 border-b border-b-black/50">
                                      <h3 className="inline-block px-4 mx-auto mb-0">{category.heading}</h3>
                                      <p className="tracking-widest uppercase">{category.subheading}</p>
                                    </div>
                                    <div className="max-w-md mx-auto mt-8 text-sm content" dangerouslySetInnerHTML={{ __html: category.description }} />
                                    {category.treatments.map((treatment, i) => {
                                      return (
                                        <div className="relative" key={i}>
                                          <div className="py-10 lg:py-12">
                                            <h4 className="mb-2">{treatment.treatmentHeading}</h4>
                                            <p className="mb-4 font-serif">
                                            {treatment.treatmentSubheading &&
                                              <>
                                              {treatment.treatmentSubheading} |
                                              </>
                                            }
                                            {treatment.treatmentPrice && 
                                              <>
                                              {treatment.treatmentPrice ? ` £${treatment.treatmentPrice}` : ``}
                                              </>
                                            }
                                            </p>
                                            <p className="max-w-md mx-auto text-sm">{treatment.treatmentDescription}</p>
                                            <img src="/logo-circle-dark.png" alt="" className="absolute block w-20 transform -translate-x-1/2 -bottom-8 left-1/2" />
                                          </div>
                                        </div>
                                      )
                                    })}
                                  </div>
                                );
                              })}  
                            </div>

                        </div> 
                        
                    </div>                                      

                    <Where />

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
  );
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
    }
    treatmentCategory: allTreatmentCategories {
      id
      heading
      subheading
      description
      treatments {
        treatmentHeading
        treatmentSubheading
        treatmentDescription
        treatmentPrice
      }
    }
  }  
  ${metaTagsFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY
  })

  return {
    props: { data }
  }
}
