import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = props => (
  <>
    <Head>
      <title>Your Header Title</title>
    </Head>
    <Header />
    {props.children}
    <Footer />
  </>
)

export default Layout
