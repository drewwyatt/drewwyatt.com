import React, { FC } from 'react'
import EmptySpace from '../components/empty-space'
import Me from '../components/me'
import { Github, Twitter } from '../components/icons'

const Page: FC = () => (
  <div className="container">
    <Me />
    <div className="about">
      <p>
        I make the internet.
        <br />
        Right now I mostly make it for
        <EmptySpace />
        <a target="_blank" rel="noreferrer" href="https://www.onepeloton.com/">
          Peloton Interactive
        </a>
        .
      </p>
      <p>
        I gave a talk at React Week in 2019 called
        <EmptySpace />
        <span className="pink">Hooked on Context</span>, you can find the
        <EmptySpace />
        <a href="#">video of that here</a>, and the <a href="#">sample code here</a>.
      </p>
    </div>
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
