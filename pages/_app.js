import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/style.scss'

import Layout from '../components/Layout'
// override the default app. If you want to include some component that all pages will include then this is the place.

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
