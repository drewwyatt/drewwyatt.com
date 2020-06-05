import React, { FC } from 'react'
import { Github, Twitter } from '../components/icons'

const Page: FC = () => (
  <main>
    <article className="me">
      <img className="avatar" src="/avatar.png" />
      <h1 className="green">👋 Oh, hai!</h1>
      <h2>
        I&apos;m <span className="pink bold">Drew Wyatt</span>
      </h2>
      <p>
        I make the internet. Right now I mostly make it for{' '}
        <a href="https://www.onepeloton.com/">Peloton Interactive</a>.
      </p>
      <p>
        I gave a talk at React Week in 2019 called{' '}
        <span className="pink">Hooked on Context</span>, you can find the{' '}
        <a href="#">video of that here</a>, and the <a href="#">sample code here</a>.
      </p>
      <p>
        My email address is{' '}
        <a className="green" href="mailto:drew.j.wyatt@gmail.com">
          drew.j.wyatt@gmail.com
        </a>
      </p>
    </article>
    <nav>
      <fieldset>
        <legend>You can also find me at these places</legend>
        <ul>
          <li>
            <a href="https://github.com/drewwyatt" rel="noreferrer" target="_blank">
              <Github />
              @drewwyatt
            </a>
          </li>
          <li>
            <a href="https://twitter.com/djwyatt">
              <Twitter />
              @djwyatt
            </a>
          </li>
        </ul>
      </fieldset>
    </nav>
  </main>
)

export default Page
