import Head from 'next/head'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useAllPostsQuery } from '@/graphql/generated/client'
import { dehydrate, QueryClient } from '@tanstack/react-query'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data } = useAllPostsQuery()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <article>
          <h1>All posts</h1>
          {data?.Posts?.docs?.map((post, index) => {
            return (
              <article key={index}>
                <h1>{post?.title}</h1>
              </article>
            )
          })}
        </article>
      </main>
    </>
  )
}

export async function getStaticProps() {
  /*
  If you want to use props, then this is how you would destructure the hook query and `data` will be the end result:

  const data = await useAllPostsQuery.fetcher().call({})
  const posts = data.Posts?.docs
   */
  const fetchAllPosts = useAllPostsQuery.fetcher()
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(useAllPostsQuery.getKey(), fetchAllPosts)

  return {
    props: {
      //data: posts, <- pass our data directly as props
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 78000,
  }
}