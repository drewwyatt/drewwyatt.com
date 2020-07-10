import React, { FC } from 'react'
import EmptySpace from './empty-space'

const About: FC = () => (
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
      <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=8PwAfK_IutI&t=2s">video of that here</a>,
      and the <a target="_blank" rel="noreferrer" href="https://github.com/drewwyatt/hooked-on-context">sample code here</a>.
    </p>
  </div>
)

export default About
