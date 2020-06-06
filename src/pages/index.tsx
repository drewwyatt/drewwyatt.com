import React, { FC } from 'react'
import About from '../components/about'
import Links from '../components/links'
import Me from '../components/me'

const Page: FC = () => (
  <>
    <div className="container">
      <Me />
      <About />
      <Links />
    </div>
    <style global jsx>{`
      .container {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        margin: 0 auto;
        max-width: 600px;
        padding: 20px;
        width: 100%;
      }

      .container > * {
        margin: 10px 0;
      }
    `}</style>
  </>
)

export default Page
