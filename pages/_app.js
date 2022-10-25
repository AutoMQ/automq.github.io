import '../styles/globals.css'
import '../styles/github-markdown-style.css'
import '../styles/variables.css'
import '../styles/content.css'
import Layout from '../components/layout'
import DocLayout from '../components/doc_layout'

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith('/docs')) {
    return <DocLayout>
      <Component {...pageProps} />
    </DocLayout>
  }
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
