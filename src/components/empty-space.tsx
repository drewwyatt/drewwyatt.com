import React, { FC } from 'react'

const EmptySpace: FC = () => (
  <>
    <span className="empty-space">&nbsp;</span>
    <style jsx>{`
      .empty-space {
        text-decoration: none !important;
        text-decoration-line: none !important;
      }
    `}</style>
  </>
)

export default EmptySpace
