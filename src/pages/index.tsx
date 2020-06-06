import React, { FC } from 'react'
import About from '../components/about'
import EmptySpace from '../components/empty-space'
import { Github, Twitter } from '../components/icons'
import Me from '../components/me'

const Page: FC = () => (
  <div className="container">
    <Me />
    <About />
    <nav>
      <fieldset>
        <legend>You can also find me at these places</legend>
        <ul className="links">
          <li className="link">
            <a href="https://github.com/drewwyatt" rel="noreferrer" target="_blank">
              <Github />
              <EmptySpace nonBreaking />
              @drewwyatt
            </a>
          </li>
          <li className="link">
            <a href="https://twitter.com/djwyatt" rel="noreferrer" target="_blank">
              <Twitter />
              <EmptySpace nonBreaking />
              @djwyatt
            </a>
          </li>
        </ul>
      </fieldset>
    </nav>
  </div>
)

export default Page
