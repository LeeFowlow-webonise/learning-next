import Head from 'next/head'//custom titles or meta tags

export default function Home() {
  return (
    <div>
      <Head>
        <title>Learning Next</title>
        <meta name='keywords' keywords='web development, programming, Next.js'></meta>
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  )
}
