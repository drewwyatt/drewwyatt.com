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

      .avatar {
        border-radius: 50%;
        margin: 0 auto 20px;
        max-width: 200px;
        width: 50%;
      }

      .content {
        margin: 0;
        padding: 0;
      }

      @media (max-width: 600px) {
        .avatar {
          width: 35%;
        }
      }
    `}</style>
  </>
)

export default Me
