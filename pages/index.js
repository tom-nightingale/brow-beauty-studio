import Head from 'next/head'
import { request } from "../lib/datocms";
import { metaTagsFragment } from "../lib/fragments"
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import FancyLink from '../components/fancyLink'
import { motion } from 'framer-motion'
import { Image, renderMetaTags } from "react-datocms";

export default function Home({ data: {home, site} }) {

  return (

    <Layout>

        <Head>
            {renderMetaTags(home.seo.concat(site.faviconMetaTags))} 
        </Head>

        <Header />

        <Container>

          <motion.div 
            key={home.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration: .25}}
          >

            <h1 role="heading" aria-level="1">{home.title}</h1>

            {/* <div className="content" dangerouslySetInnerHTML={{ __html: home.content }} /> */}

           

          </motion.div>

        </Container>

        <Footer />

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
  return {
    props: { data }
  }
}
