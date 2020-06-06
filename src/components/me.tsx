import React, { FC } from 'react'

const Me: FC = () => (
  <>
    <article className="me">
      <img className="avatar" src="/avatar.png" />
      <h2 className="content green">👋 Oh, hai!</h2>
      <h1 className="content">
        I&apos;m <span className="pink bold">Drew Wyatt</span>
      </h1>
      <p className="content">
        <a target="_blank" rel="noreferrer" href="mailto:drew.j.wyatt@gmail.com">
          drew.j.wyatt@gmail.com
        </a>
      </p>
    </article>
    <style jsx>{`
      .me {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: center;
      }

      .content {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </>
)

export default Me
