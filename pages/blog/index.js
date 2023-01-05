import { useRef } from 'react'
import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Card from '../../components/card';
import Pagination from '../../components/pagination'
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

export default function Blog({ subscription }) {

    const {
        data: { global, blog, site, allBlogs, pagedBlogs },
    } = useQuerySubscription(subscription);
    
  const containerRef = useRef(null);
  const metaTags = blog.seo.concat(site.favicon);

  // Set up variables to pass to Pagination
  const currentPage = 1;
  const postsPerPage = 10;

  return (
    <Layout>

      <Head>
            <Head>{renderMetaTags(metaTags)}</Head> 
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

                    <div className="relative z-10 flex flex-wrap my-32">
                        {pagedBlogs.map((blog, i) => {
                        return(
                            <Card
                            key={i}
                            url={`blog/${blog.slug}`}
                            image={blog.heroImage}
                            title={blog.title}
                            date={blog.date}
                            />
                        )
                        })}
                    </div>
                    
                    
                    <Pagination
                    currentPage={currentPage}
                    postsPerPage={postsPerPage}
                    allPosts={allBlogs}
                    archive
                    pagedUrlBase="blog"
                    />


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
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        blog: blogIndex {
          heroHeading
          heroSubHeading
          heroText
          heroImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1200, h: 850 }) {
              ...responsiveImageFragment
            }
          } 
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        allBlogs {
          slug
          title
        }
        pagedBlogs: allBlogs(first: "10", orderBy: _firstPublishedAt_DESC) {
          slug 
          title
          heroImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 600, h: 425 }) {
              ...responsiveImageFragment
            }
          }
          date: _firstPublishedAt        
        }
      }
      ${metaTagsFragment}
      ${responsiveImageFragment}
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