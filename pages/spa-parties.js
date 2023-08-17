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
import TextWithImage from "@/components/TextWithImage";
import { Image } from "react-datocms";

export default function Home({ data: { home, site, page } }) {
  const containerRef = useRef(null);
  const router = useRouter();

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
                      className="relative max-w-screen-xl py-12 mx-auto md:pt-20"
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
                          className="min-h-[400px] w-full h-full"
                          pictureClassName="object-cover object-center"
                        />
                      </div>

                      <div className="max-w-md px-4 mx-auto my-12 text-center content">
                        <h2>{page.introTitle}</h2>
                        <div
                          dangerouslySetInnerHTML={{ __html: page.introText }}
                        />
                      </div>

                      {page.spaParties.map((block, i) => {
                        const type = block.__typename;
                        switch (type) {
                          case "GalleryRecord":
                            return <Gallery key={i} images={block.gallery} />;
                          case "CtaRecord":
                            return <Cta content={block.ctaText} key={i} />;
                          case "TextimageblockRecord":
                            return (
                              <TextWithImage
                                key={i}
                                index={i}
                                title={block.title}
                                content={block.content}
                                image={block.image}
                              />
                            );
                          default:
                            return null;
                        }
                      })}

                      <div className="w-full p-20 mt-12 text-center text-white bg-black">
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
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 250, h: 200 }) {
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
