import React from 'react'

export const Chapter = ({ children, meta }) => (
  <article>
    <h1>{meta.title}</h1>
    {children}
  </article>
)
