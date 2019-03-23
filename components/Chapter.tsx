import React from 'react'

export const Chapter = ({ children, meta }) => (
  <article>
    <h1 className="text-purple leading-normal">{meta.title}</h1>
    {children}
  </article>
)
