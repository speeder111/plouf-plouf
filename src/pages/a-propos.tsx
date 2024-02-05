import Head from 'next/head'

import About from '../components/About/About'
import Layout from '../components/Layout/Layout'

const ImportPage = () => (
  <Layout>
    <Head>
      <title>À Propos - Plouf Plouf, tirage au sort en ligne par Simon🤣</title>
      <meta
        name="description"
        content="À propos de plouf-plouf : tirage au sort en ligne 100% gratuit, sans pub, dans l'irrespect total des données personnelles."
      />
    </Head>
    <About />
  </Layout>
)

export default ImportPage
