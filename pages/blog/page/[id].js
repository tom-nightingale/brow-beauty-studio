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
import Card from '@/components/Card';
import Pagination from '@/components/Pagination'

export default function Blog({ subscription, blogData }) {

    const {
        data: { data, blogIndex, site, allBlogs, pagedBlogs},
    } = useQuerySubscription(subscription);

    const { currentPage, postsPerPage } = blogData;

  const containerRef = useRef(null);
  const metaTags = blogIndex.seo.concat(site.favicon);

  return (
    <Layout>

      <Head>{renderMetaTags(metaTags)}</Head> 
      
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

                      <img data-scroll data-scroll-sticky data-scroll-target="#Treatments" src="/logo-light-trimmed.png" alt="" className="absolute top-0 w-full" />

                    </div>

                    <div className="relative z-10 flex flex-wrap">
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

export async function getStaticProps({params}) {

  const pageId = parseInt(params.id);
  const postsPerPage = 8;
  const skip = pageId*postsPerPage-postsPerPage; 
  
  const graphqlRequest = {
    query: `
      query Blog($first: IntType, $skip: IntType) {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        home {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        allBlogs {
          slug
          title
        }
        pagedBlogs: allBlogs(first: $first, skip: $skip orderBy: _firstPublishedAt_DESC) {
          slug 
          title
          heroImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 600, h: 425 }) {
              ...responsiveImageFragment
            }
          }          
        }
        blogIndex {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
      }
      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
    variables: {
        skip: skip,
        first: postsPerPage,
    }
  };

  return {
    props: {
      subscription: {
        enabled: false,
        initialData: await request(graphqlRequest),
      },
      blogData: {
        currentPage: pageId,
        postsPerPage: postsPerPage,
      }
    },
  };
}

export async function getStaticPaths() {
  const data = await request({ 
      query: `{ queryPosts: allBlogs { slug id } }` 
  });
  const postsPerPage = 8;
  const totalPosts = data.queryPosts.length;
  const totalPages = Math.ceil(totalPosts/postsPerPage);

  return {
      paths: Array.from({ length: totalPages }).map((_, i) => {
      return {
        params: {
          id: (i + 1).toString(),
        },
      };
    }),
    fallback: false,
  };
}