import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getAllPostsWithSlug() {
  const entries = await client.getEntries({
    content_type: 'post',
    select: 'fields.slug',
  })
  return parsePostEntries(entries, (post) => post.fields)
}

function parsePost({ fields }) {
  console.log(fields);
  return {
    title: fields.title,
    slug: fields.slug
  }
}

function parsePostEntries(entries, cb = parsePost) {
  return entries?.items?.map(cb)
}

export async function getSortedPostsData() {
  const entries = await client.getEntries({
    content_type: 'post',
  })
  return parsePostEntries(entries);
}

export async function getPostData(slug) {
  const entry = await client.getEntries({
    content_type: 'post',
    limit: 1,
    'fields.slug[in]': slug,
  })
  return {
    post: parsePostEntries(entry)[0]
  }
}