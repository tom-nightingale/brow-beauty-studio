import { useRef } from 'react'
import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { request } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { quickFade } from '@/helpers/transitions'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import Where from 'components/Where'
import Contact from 'components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { format, parseISO } from 'date-fns'

export default function Blog({ subscription }) {

    const {
    data: { blog, site },
  } = useQuerySubscription(subscription);
    
  const containerRef = useRef(null);
  const metaTags = blog.seo.concat(site.favicon);
  const newDate = parseISO(blog.date);    

  return (
    <Layout>

      <Head>
            {renderMetaTags(metaTags)}
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

                    <div className="relative max-w-screen-xl py-12 pb-6 mx-auto md:py-20 md:pb-12" id="Treatments">

                      <div className="relative z-10 text-center">
                          <h2>{blog.heroHeading}</h2>
                          <p className="max-w-sm mx-auto">{blog.heroText}</p>
                        </div>

                      <img data-scroll data-scroll-sticky data-scroll-target="#Treatments" src="/logo-light-trimmed.png" alt="" className="absolute top-0 w-full" />

                      <div className="relative z-50 mb-12 md:mb-24">
                        <Container>
                            <div className="flex flex-wrap items-center justify-center">
                            <div className="w-full mb-6 md:w-3/5 md:mb-0 md:px-5">
                                <div className="w-full">
                                { blog.heroSubHeading && (
                                    <span className="block mb-2 text-xl italic leading-none text-green-light font-display md:text-2xl lg:text-3xl xl:text-4xl">{ blog.heroSubHeading }</span>
                                )}
                                <h1 className="text-4xl leading-none md:text-5xl lg:text-6xl xl:text-7xl">{ blog.title }</h1>
                                <small>
                                    <span>{format(newDate, 'MMMM Do, yyyy')}</span>
                                </small>
                                { blog.content && (
                                    <div
                                    className="content lg:text-lg lg:leading-relaxed lg:my-8"
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                    />
                                )}                      
                                </div>
                            </div>
                            </div>
                        </Container>
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
  )
}

export async function getStaticProps() {
  const graphqlRequest = {
    query: `
      query Post($slug: String) {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        blog(filter: {slug: {eq: $slug}}) {
            slug
            title
            content
            seo: _seoMetaTags {
                ...metaTagsFragment
            }
            date: _firstPublishedAt
        }
      }
      ${metaTagsFragment}
    `
  };

  return {
    props: {
      subscription: {
        enabled: false,
        initialData: await request(graphqlRequest),
      }
    },
  };
}

export async function getStaticPaths() {
  const data = await request({ 
      query: `{ allBlogs { slug } }` 
  });

  return {
    paths: data.allBlogs.map((blog) => `/blog/${blog.slug}`),
    fallback: false,
  };
}