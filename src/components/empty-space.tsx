import React, { FC } from 'react'

type Props = {
  nonBreaking?: boolean
}

const EmptySpace: FC<Props> = ({ nonBreaking }) => (
  <>
    <span className="empty-space">{nonBreaking ? ' ' : ' '}</span>
    <style jsx>{`
      .empty-space {
        text-decoration: none !important;
        text-decoration-line: none !important;
      }
    `}</style>
  </>
)

export default EmptySpace
