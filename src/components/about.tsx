import React, { FC } from 'react'
import EmptySpace from './empty-space'

const About: FC = () => (
  <>
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
    <style jsx>{`
      .about {
      }
    `}</style>
  </>
)

export default About
