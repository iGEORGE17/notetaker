import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const _Document = () => {
  return (
    <Html data-theme="winter">
        <Head />
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default _Document