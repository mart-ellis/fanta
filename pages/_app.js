import '../styles/globals.css'

import 'swiper/swiper-bundle.css';

import Layout from '../layout/Layout'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import {SelectedProvider} from '../context/SelectedContext';

function MyApp({ Component, pageProps, router }) {

  return (
    <SelectedProvider>
      <Layout>
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route}/>
          </AnimatePresence>
        </AnimateSharedLayout>
      </Layout>
    </SelectedProvider>
  )
}

export default MyApp
