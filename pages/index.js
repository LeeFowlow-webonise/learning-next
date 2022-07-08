import Head from 'next/head'//custom titles or meta tags
import ArticleList from '../components/ArticleList';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>Learning Next</title>
        <meta name='keywords' keywords='web development, programming, Next.js'></meta>
      </Head>
      <ArticleList articles={articles}/>
    </div>
  )
}