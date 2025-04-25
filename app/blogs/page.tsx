import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from '../Main'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Blogs' })

export default async function BlogsPage() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
