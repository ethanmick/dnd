import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export const Layout = ({ children }) => (
  <main className="container mx-auto">{children}</main>
)
