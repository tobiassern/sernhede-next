import Head from 'next/head';
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
            <h3>{item.title} {item.slug}</h3>
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
    }
  }
}