import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import '../styles.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { Component: NextPage; pageProps: any }

const RootComponent: NextPage<Props> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>👋 Oh, hai! I'm Drew Wyatt.</title>
      <meta
        name="description"
        content="Drew Wyatt is a software developer and native Texan living in New York City."
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </>
)

export default RootComponent
