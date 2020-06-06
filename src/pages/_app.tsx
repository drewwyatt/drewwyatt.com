import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import '../styles.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { Component: NextPage; pageProps: any }

const RootComponent: NextPage<Props> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Oh, hai! I&apos;m Drew Wyatt</title>
      <meta
        name="description"
        content="Software developer and native Texan living in New York City"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
      <text y=%22.9em%22 font-size=%2290%22>
        👋
      </text>
    </svg>"
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
