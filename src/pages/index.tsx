import React, { FC } from 'react'
import EmptySpace from '../components/empty-space'
import { Github, Twitter } from '../components/icons'

const Page: FC = () => (
  <main>
    <article className="me">
      <img className="avatar" src="/avatar.png" />
      <h2 className="me-content green">👋 Oh, hai!</h2>
      <h1 className="me-content">
        I&apos;m <span className="pink bold">Drew Wyatt</span>
      </h1>
      <p className="me-content">
        <a target="_blank" rel="noreferrer" href="mailto:drew.j.wyatt@gmail.com">
          drew.j.wyatt@gmail.com
        </a>
      </p>
    </article>
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
      <span className="pink">Hooked on Context</span>, you can find the{' '}
      <a href="#">video of that here</a>, and the <a href="#">sample code here</a>.
    </p>
    <nav>
      <fieldset>
        <legend>You can also find me at these places</legend>
        <ul className="links">
          <li className="link">
            <a href="https://github.com/drewwyatt" rel="noreferrer" target="_blank">
              <Github />
              <EmptySpace />
              @drewwyatt
            </a>
          </li>
          <li className="link">
            <a href="https://twitter.com/djwyatt" rel="noreferrer" target="_blank">
              <Twitter />
              <EmptySpace />
              @djwyatt
            </a>
          </li>
        </ul>
      </fieldset>
    </nav>
  </main>
)

export default Page
