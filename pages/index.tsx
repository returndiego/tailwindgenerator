import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Main from '../components/main/Main'
import Nav from '../components/Nav'
import Head from 'next/head'

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Tailwind CSS Generator</title>
      </Head>
      <Nav />
      <Main />
      <Footer />
    </Layout>
  )
}
