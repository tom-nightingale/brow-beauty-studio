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
import Link from "next/link";
import Packages from "@/components/Packages";

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

                      <div className="bg-gray-100">
                        <Image
                          data={{
                            ...page.heroImage.responsiveImage,
                            alt: "The Brow &amp; Beauty Studio",
                          }}
                          className="w-full h-auto"
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
                          case "PackagegroupRecord":
                            return (
                              <Packages key={i} packages={block.packages} />
                            );
                          default:
                            return null;
                        }
                      })}

                      {/* <div className="w-full mt-12 text-center md:py-8 xl:py-20">
                        <h3 className="mb-0 xl:mb-8">View Amazing Packages</h3>

                        <div className="flex-wrap xl:flex">
                          {page.packages.map((item, index) => {
                            return (
                              <div
                                className={`relative w-full p-12 xl:w-1/3 xl:p-8 ${
                                  index === 1 && "text-white bg-black"
                                }`}
                                key={index}
                              >
                                <img
                                  src="/logo-circle-dark.png"
                                  alt=""
                                  className="block w-20 mx-auto mb-4"
                                />

                                <h3 className="inline-block mx-auto mb-0">
                                  {item.title}
                                </h3>
                                <p className="tracking-widest uppercase">
                                  {item.subtitle}
                                </p>

                                <div
                                  className="mx-auto mt-8 text-sm content"
                                  dangerouslySetInnerHTML={{
                                    __html: item.content,
                                  }}
                                />

                                {index === 1 ? (
                                  <Link href="/book">
                                    <a
                                      aria-label="Book your party now"
                                      className="mt-12 btn btn--secondary"
                                    >
                                      Book now
                                    </a>
                                  </Link>
                                ) : null}
                              </div>
                            );
                          })}
                        </div>
                      </div> */}

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

                          <Link href="/book">
                            <a
                              aria-label="Book your party now"
                              className="mt-12 btn btn--secondary"
                            >
                              Book now
                            </a>
                          </Link>
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
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 650, h: 500 }) {
              ...responsiveImageFragment
            }
          }          
        }
        ... on PackagegroupRecord {
          __typename
          packages{
            title
            subtitle
            content
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
