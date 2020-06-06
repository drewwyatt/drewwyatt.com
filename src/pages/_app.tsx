import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import 'normalize.css'
import '../styles.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { Component: NextPage; pageProps: any }

const RootComponent: NextPage<Props> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>I&apos;m Drew Wyatt</title>
      <meta name="description" content="I make the internet." />
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

      <meta property="og:title" content="I'm Drew Wyatt" />
      <meta property="og:description" content="I make the internet." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/share-image.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="1200" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default RootComponent
