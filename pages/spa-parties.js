import { useRef } from "react";
import Head from "next/head";
import { request } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";
import { quickFade } from "@/helpers/transitions";
import Layout from "@/components/Layout";
import Where from "@/components/Where";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { renderMetaTags } from "react-datocms";
import { useRouter } from "next/router";
import Gallery from "@/components/Gallery";
import Cta from "@/components/Cta";
import { Image } from "react-datocms";

export default function Home({ data: { home, site, page } }) {
  const containerRef = useRef(null);
  const router = useRouter();

  console.log(page);

  return (
    <Layout>
      <Head>{renderMetaTags(home.seo.concat(site.faviconMetaTags))}</Head>

      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.07 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <Header url={router.pathname} />

              <m.div initial="initial" animate="enter" exit="exit">
                <m.div variants={quickFade} className="relative z-20">
                  <Container>
                    <div
                      className="relative max-w-screen-xl py-12 mx-auto md:py-20"
                      id="SpaParties"
                    >
                      <div className="relative z-10 mb-12 text-center">
                        <h2 className="mb-0">{page.title}</h2>
                        <p className="mt-0 uppercase">{page.subtitle}</p>
                      </div>

                      <div className="bg-gray-100 min-h-[400px]">
                        <Image
                          data={{
                            ...page.heroImage.responsiveImage,
                            alt: "The Brow &amp; Beauty Studio",
                          }}
                        />
                      </div>

                      <div className="max-w-md mx-auto my-12 text-center content">
                        <h2>{page.introTitle}</h2>
                        <div
                          dangerouslySetInnerHTML={{ __html: page.introText }}
                        />
                      </div>

                      {page.spaParties.map((block, i) => {
                        const type = block.__typename;
                        console.log(type);
                        switch (type) {
                          case "GalleryRecord":
                            return <Gallery />;
                          case "CtaRecord":
                            return <Cta />;
                          case "TextimageblockRecord":
                            return <div></div>;
                          default:
                            return null;
                        }
                      })}

                      <div className="flex flex-wrap my-12">
                        <div className="w-full p-20 md:w-1/2 content">
                          <h2>About us</h2>
                          <p>
                            We are delighted to introduce Mini Spa Party’s from
                            ages 5-12 years The Mini Brow and Beauty Studio
                            specialises in hosting the most exciting and
                            enchanting spa parties for children. Our dedicated
                            team of professionals are passionate about creating
                            a safe and enjoyable environment where children can
                            feel like royalty for a day. With attention to every
                            detail, we bring dreams to life and make lasting
                            memories for your little ones.
                          </p>
                        </div>

                        <div className="w-full bg-gray-100 md:w-1/2"></div>
                      </div>

                      <div className="flex flex-row-reverse flex-wrap my-12">
                        <div className="w-full p-20 md:w-1/2 content">
                          <h2>Our Services</h2>
                          <p>
                            Step into our enchanted realm and choose from an
                            array of fascinating spa packages specially designed
                            for kids. From refreshing mini manicures and
                            pedicures to gentle facials or blind folded make up
                            challenges over at the mini make over bar using
                            all-natural products, our treatments are tailored to
                            ensure the utmost comfort and delight. And to add
                            that extra sprinkle of magic, we offer delightful
                            extras such as glitter tattoos, hair braiding, and
                            temporary nail art to make their spa experience even
                            more enchanting.
                          </p>
                        </div>

                        <div className="w-full bg-gray-100 md:w-1/2"></div>
                      </div>

                      <Cta />

                      <div className="flex flex-wrap my-12">
                        <div className="w-full p-20 md:w-1/2 content">
                          <h2>Activities and Entertainment</h2>
                          <p>
                            Prepare for giggles and smiles as our team of
                            professional entertainers takes your child's spa
                            party to the next level. From captivating
                            storytelling sessions and mesmerising magic make up
                            and hair tricks to a mini disco or runway fashion
                            show where they can showcase their inner diva, our
                            entertainment options will keep the excitement
                            flowing throughout the day.
                          </p>
                        </div>

                        <div className="w-full bg-gray-100 md:w-1/2"></div>
                      </div>

                      <div className="flex flex-row-reverse flex-wrap my-12">
                        <div className="w-full p-20 md:w-1/2 content">
                          <h2>Party Decorations</h2>
                          <p>
                            Our spa party venue is transformed into a dreamlike
                            setting, where vibrant colours, beautiful
                            decorations, and a touch of sparkle create a magical
                            atmosphere. From custom banners and themed table
                            settings to colourful balloons floating in the air,
                            every detail is carefully arranged to immerse your
                            child in this fantastic world.
                          </p>
                        </div>

                        <div className="w-full bg-gray-100 md:w-1/2"></div>
                      </div>

                      <Cta />

                      <div className="flex flex-wrap my-12">
                        <div className="w-full p-20 md:w-1/2 content">
                          <h2>Safety and Hygiene</h2>
                          <p>
                            We prioritize the safety and well-being of every
                            child who walks through our doors. Our staff follows
                            strict hygiene practices, and all our products are
                            carefully selected to be child-friendly and
                            non-toxic. We ensure a clean and secure environment
                            where children can truly relax and enjoy their
                            extraordinary spa experience.
                          </p>
                        </div>

                        <div className="w-full bg-gray-100 md:w-1/2"></div>
                      </div>

                      <div className="flex flex-row-reverse flex-wrap my-12">
                        <div className="w-full p-20 md:w-1/2 content">
                          <h2>Party for Parents</h2>
                          <p>
                            While the children are pampered, we make sure
                            parents can unwind and enjoy their time too. Our
                            comfortable waiting area offers a cozy and relaxing
                            space where you can sip on complimentary
                            refreshments, browse through magazines, or simply
                            sit back and take a moment for yourself.
                          </p>
                        </div>

                        <div className="w-full bg-gray-100 md:w-1/2"></div>
                      </div>

                      <div className="w-full p-20 text-center text-white bg-black">
                        <div className="mx-auto md:max-w-md content">
                          <h2>Book Your Experience</h2>
                          <p>
                            Ready to embark on a journey that your child will
                            treasure forever?
                          </p>

                          <p>
                            Booking is as easy as a click of a button. Click the
                            button below or give us a call to reserve your
                            child's magical spa party today. We can't wait to
                            create an unforgettable experience for your little
                            prince or princess!
                          </p>

                          <a
                            data-scroll-to
                            data-offset="-100"
                            className="mt-12 btn btn--secondary"
                            href="#Contact"
                          >
                            Book now
                          </a>
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
          </div>
          {/* scroll section */}
        </div>
        {/* scroll container */}
      </LocomotiveScrollProvider>
    </Layout>
  );
}

const PAGE_QUERY = `
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
    page: miniSpa {
      title
      subtitle
      heroImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1000, h: 500 }) {
          ...responsiveImageFragment
        }
      }
      introTitle
      introText
      spaParties {
        ... on CtaRecord {
          __typename
          ctaText
        }
        ...on GalleryRecord {
          __typename
          gallery {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 500, h: 500 }) {
              ...responsiveImageFragment
            }
          }
        }
        ... on TextimageblockRecord {
          __typename
          title
          content
          image {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 800, h: 800 }) {
              ...responsiveImageFragment
            }
          }          
        }
      }
    }
  }  
  ${metaTagsFragment}
  ${responsiveImageFragment}
`;

export async function getStaticProps() {
  const data = await request({
    query: PAGE_QUERY,
  });

  return {
    props: {
      data,
    },
  };
}
