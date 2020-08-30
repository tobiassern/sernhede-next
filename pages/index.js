import Head from 'next/head';
import Link from 'next/link'
import PersonalCard from 'components/PersonalCard';
import { getSortedPostsData } from 'lib/posts';

export default function Home({allPostsData}) {
  return (
    <>
      <Head>
        <title>Tobias Sernhede</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PersonalCard />
      {allPostsData.map((item, index) => {
        return (

          <div key={`${index}`}>
            <Link href="/posts/[id]" as={`/posts/${item.slug}`}>
              <a><h3>{item.title} {item.slug}</h3></a>
            </Link>
          </div>
        )
        }) 
      }
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData
    },
    revalidate: 60
  }
}