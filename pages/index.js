import { useRef } from 'react'
import Head from 'next/head'
import { request } from "@/lib/datocms";
import { metaTagsFragment } from "@/lib/fragments"
import { fade } from '@/helpers/transitions'
import FancyLink from '@/components/fancyLink'
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
import Instagram from "instagram-web-api";
import { postcss } from 'postcss-nested';

export default function Home({ data: {home, site}, instagramPosts }) {

  const containerRef = useRef(null)
  
  return (

    <Layout>

      <Head>
            {renderMetaTags(home.seo.concat(site.faviconMetaTags))} 
      </Head>

      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            
            <Header />
            
            <LazyMotion features={domAnimation}>
              
              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <m.main variants={fade} className=""> 
                  
                  <Container>

                    <ul className="relative z-10 justify-around hidden max-w-lg p-4 mx-auto mt-8 font-medium text-white uppercase bg-black md:flex">
                      <li>
                        <a className="block p-2" href="">
                          Home
                        </a>
                      </li>
                        <li>
                        <a className="block p-2" href="Treatments">
                          Treatments
                        </a>
                      </li>
                        <li>
                        <a className="block p-2" href="About">
                          About
                        </a>
                      </li>
                        <li>
                        <a className="block p-2" href="">
                          Where
                        </a>
                      </li>
                        <li>
                        <a className="block p-2" href="">
                          Contact
                        </a>
                      </li>
                        <li>
                        <a className="block p-2" href="">
                          Social
                        </a>
                      </li>
                    </ul>

                    <div className="relative z-0 overflow-hidden bg-gray-200 md:-mt-8">

                      <div className="flex flex-wrap items-center justify-end w-full md:min-h-[610px]">

                        <img src="/hero-image.png" alt="" className="absolute top-[50%] left-0 translate-y-[-50%] z-10 opacity-20 lg:opacity-100" />

                        <img src="/logo.png" alt="" className="absolute w-full top-[50%] right-0 translate-y-[-50%] z-0 opacity-5 hidden lg:block" />

                        <div className="relative z-20 h-full max-w-screen-sm p-8 py-12 lg:p-4 lg:w-2/5">

                          <h1 className="mb-12 font-sans text-3xl tracking-widest uppercase lg:mb-16 md:text-5xl">Beauty treatments unique for all</h1>

                          <Button destination="#treatments" label="Treatments" modifier="mr-4" />
                          <Button destination="#contact" label="Contact" secondary modifier="" />

                        </div>

                      </div>

                    </div>

                    <div className="max-w-screen-xl mx-auto mt-8">

                      <h2 className="text-center mb-[100px]">Treatments</h2>

                      <Treatment
                        image="https://picsum.photos/400"
                        overlay="facials"
                        title="Bespoke facials"
                        description="including consultation"
                      />

                      <Treatment
                        image="https://picsum.photos/400"
                        overlay="facials"
                        title="Bespoke facials"
                        description="including consultation"
                        alt
                      />

                      <Treatment
                        image="https://picsum.photos/400"
                        overlay="facials"
                        title="Bespoke facials"
                        description="including consultation"
                      />

                      <Treatment
                        image="https://picsum.photos/400"
                        overlay="facials"
                        title="Bespoke facials"
                        description="including consultation"
                        alt
                      />

                      <Treatment
                        image="https://picsum.photos/400"
                        overlay="facials"
                        title="Bespoke facials"
                        description="including consultation"
                      />
                      
                    </div>

                    <div className="flex-wrap my-12 md:flex">

                      <article className="md:w-1/2">
                      
                        <div className="p-4 content md:p-12 lg:p-20">

                          <h2>Some example content</h2>
                          
                          <p>At the Brow and Beauty Studio we take our treatments and procedures seriously. Every guest is unique so we work with you to custom design your specific treatment to fit your requirements.</p>

                          <p>Former Personal therapist to the royal family in Dubai, celebrities and spa experience in five star resorts -The studio’s therapist, Asha brings you a new type of spa journey, in a small and quiet setting.</p>

                          <p>Our menu is small and informative for a reason as we allow time for a detailed consultation before each treatment or service so you will leave the studio feeling confident that you are in the right hands.</p>

                          <p>Should you wish to call about your treatment in advance or have a general query - please do not hesitate to do so as we will do our very best to make you feel comfortable answering all your questions and concerns.</p>

                          <p className="mt-8 text-lg tracking-wider uppercase">Call for your appointment On <a className="inline-block font-bold" href="tel:07930956003">07930 956 003</a></p>
                          
                        </div>

                      </article>

                      <div className="w-1/2 bg-gray-200">

                        //Image

                      </div>

                    </div>

                    

                    <div className="relative p-8 my-20 bg-gray-200 sm:p-12 lg:p-20">

                      <div className="sm:max-w-screen-xs">

                        <p className="mb-[-6px] font-serif text-4xl leading-none text-center text-white lg:text-5xl lg:mb-[-9px]">Where</p>

                        <div className="relative z-10 p-6 pb-16 mb-8 bg-white shadow-lg md:p-12 md:pb-20">

                            <p>A: The Brow and Beauty Studio</p>
                            <div className="pl-5 leading-relaxed">
                              <p>Old Mill Cottage</p>
                              <p>Rolleston</p>
                              <p>Southwell Golf Club</p>
                              <p>Nottinghamshire</p>
                              <p>NG23 5SF</p>
                            </div>

                            <p>T: <a className="inline-block pl-1 mt-8 font-bold" href="tel:07930956003">07930 956 003</a></p>

                            <Button
                              destination="https://www.google.com/maps/dir//Southwell+Golf+Club,+Occupation+Ln,+Southwell+NG25+0TS/@53.0661906,-0.9024038,17z/data=!4m16!1m6!3m5!1s0x4879b60c9f9d4b75:0x75f5bf1d6605ff74!2sSouthwell+Golf+Club!8m2!3d53.0661394!4d-0.9003083!4m8!1m0!1m5!1m1!1s0x4879b60c9f9d4b75:0x75f5bf1d6605ff74!2m2!1d-0.9003083!2d53.0661394!3e2"
                              modifier="mt-8 absolute -bottom-7 left-1/2 -translate-x-1/2 w-4/5 sm:w-auto text-center"
                              label="Get directions"
                              secondary
                              external
                            />

                        </div>

                      </div>

                      <div className="absolute hidden -translate-y-1/2 left-[500px] sm:block top-1/2">
                          
                        <a className="inline-block p-4 px-12 text-sm uppercase -rotate-90 bg-white" href="#">View map</a>
                        
                      </div>
 
                    </div>

                  </Container>


                  <div className="p-4 bg-gray-100 sm:p-8 md:p-12 lg:p-20">

                    <Container>

                      <p className="mb-[-6px] font-serif text-4xl leading-none text-center text-gray-300 lg:text-5xl lg:mb-[-9px]">Contact</p>
                      
                      <div className="max-w-screen-lg p-4 mx-auto bg-white shadow-lg sm:p-8 md:p-12 lg:p-20">

                        <p className="max-w-screen-sm mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada, odio eget pharetra blandit, libero diam ullamcorper lacus, in tincidunt augue sapien nec metus.</p>

                        <form id="form" action="" method="POST" className="flex flex-wrap mt-4 -m-1 overflow-x-hidden">
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
                            <input type="submit" className="inline-block p-4 mx-auto text-white uppercase bg-black border border-black md:p-6 lg:text-lg lg:px-8 lg:py-6" value="Send Form" />
                          </div>
                        </form>
                        
                      </div>
                      
                    </Container>
                    
                  </div>


                  <div className="bg-black">

                    <Container>

                      <div className="p-4 sm:p-8 md:p-12 lg:p-20">

                        <div className="flex items-center justify-center">

                          <h3 className="text-3xl text-center text-white">Social</h3>

                          <SocialIcon platform="instagram" url="https://www.instagram.com" classes="mx-2 text-white inline-block" />
                          <SocialIcon platform="facebook" url="https://www.facebook.com" classes="mx-2 text-white inline-block" />

                        </div>
                        
                      </div>
                      
                    </Container>

                    <ul className="flex flex-wrap">
                      {instagramPosts.map(({ node }, i) => {
                        return (
                          <li key={i} className="w-1/6 bg-gray-500">
                            <a
                              href={`https://www.instagram.com/p/${node.shortcode}`}
                              aria-label="view image on Instagram"
                            >
                              {/* set the image src equal to the image
                              url from the Instagram API*/}
                              <img
                                src={node.thumbnail_src}
                                alt={
                                  // the caption with hashtags removed
                                  node.edge_media_to_caption.edges[0].node.text
                                    .replace(/(#\w+)+/g, "")
                                    .trim()
                                }
                              />
                            </a>
                          </li>
                        )
                      })}
                    </ul>

                  </div>
                
                    
                      
                      
                  
                </m.main>
                
                <m.div variants={fade}>
                  <Footer />
                </m.div>
                
              </m.div>

            </LazyMotion>
          
          </div>
          
        </div>

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
    }
  }
  ${metaTagsFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY
  })

  const client = new Instagram({
    username: process.env.IG_USERNAME,
    password: process.env.IG_PASSWORD,
  });
  let posts = [];

  
  try {
    await client.login()
    // request photos for a specific instagram user
    const instagram = await client.getPhotosByUsername({
      username: process.env.IG_USERNAME,
    })

    if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
      // if we receive timeline data back
      //  update the posts to be equal
      // to the edges that were returned from the instagram API response
      posts = instagram["user"]["edge_owner_to_timeline_media"]["edges"]
    }
  } 
  catch (err) {
    // throw an error if login to Instagram fails
    console.log("Something went wrong while logging into Instagram", err)
  }  

  return {
    props: { 
      data,
      instagramPosts: posts,
    }
  }
}
