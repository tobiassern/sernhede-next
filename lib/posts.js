import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

function parsePost({ fields }) {
  console.log(fields);
  return {
    title: fields.title
  }
}

function parsePostEntries(entries, cb = parsePost) {
  return entries?.items?.map(cb)
}

export async function getSortedPostsData() {
  const entries = await client.getEntries({
    content_type: 'course',
  })
  return parsePostEntries(entries);
}