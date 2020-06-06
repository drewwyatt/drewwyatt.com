import React, { FC } from 'react'
import EmptySpace from '../components/empty-space'
import { Github, Twitter } from '../components/icons'

const Links: FC = () => (
  <>
    <nav className="nav">
      <fieldset className="container">
        <legend className="label">You can also find me at these places</legend>
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
    <style jsx>{`
      .nav {
        width: 100%;
      }

      .container {
        border-color: var(--yellow);
        color: var(--yellow);
        text-align: center;
      }

      .label {
        color: var(--yellow);
        font-size: 1em;
        text-align: center;
      }

      .links {
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding: 0;
        margin: inherit 0;
      }

      .link,
      .link a {
        display: flex;
        height: 30px;
        line-height: 30px;
        vertical-align: middle;
      }

      @media (max-width: 600px) {
        .label {
          font-size: 0.75em;
        }
      }

      @media (max-width: 320px) {
        .label {
          font-size: 0.65em;
        }
      }
    `}</style>
  </>
)
export default Links
