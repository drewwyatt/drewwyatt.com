import React, { FC } from 'react'
import About from '../components/about'
import Links from '../components/links'
import Me from '../components/me'

const Page: FC = () => (
  <div className="container">
    <Me />
    <About />
    <Links />
  </div>
)

export default Page
