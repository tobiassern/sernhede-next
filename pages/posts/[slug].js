// import Head from 'next/head';
// import Layout from 'components/layout';
// import Date from 'components/Date';
import { getPostData, getAllPostsWithSlug } from 'lib/posts';
import { useRouter } from 'next/router';

// import utilStyles from 'styles/utils.module.css'

export default function Post({post}) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (!post) {
    return <div>No post</div>
  }


  return (
    <>
      {post.coverImage && <img src={post.coverImage.url} />}
      <p>{post.title}</p>
    </>
  )
}

export async function getStaticProps({ params }) {
  const data = await getPostData(params.slug)

  return {
    props: {
      post: data?.post ?? null,
      fallback: true,
    },
    revalidate: 60
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}