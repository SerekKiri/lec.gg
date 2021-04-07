import 'styles/globals.css'
import React from 'react'
import { wrapper } from 'store/store'


const APP = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default wrapper.withRedux(APP)