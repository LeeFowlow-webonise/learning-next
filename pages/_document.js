//Only renders on the server
//Purpose is to allow access to the html and body tags
//Can see that I've added 'lang="en"' to the HTML tag

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}