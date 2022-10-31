import '../styles/globals.css'
import '../styles/github-markdown-style.css'
import '../styles/variables.css'
import '../styles/content.css'
import Layout from '../components/layout'
import DocLayout from '../components/doc_layout'
import GlobalHeader from '../components/header'
import GlobalFooter from '../components/footer'

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith('/docs')) {
    return <DocLayout>
      <Component {...pageProps} />
    </DocLayout>
  }
  if (router.pathname.startsWith('/404')) {
    return <div className="page-wrapper absolute w-full h-screen overflow-hidden overflow-y-auto">

      <GlobalHeader />
      <div className="w-full pt-8 h-auto overflow-y-auto overflow-x-hidden">
        <Component {...pageProps} />
      </div>
    </div>
  }
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
