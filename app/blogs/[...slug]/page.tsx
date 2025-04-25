import { notFound, redirect } from 'next/navigation'
import { allBlogs } from 'contentlayer/generated'

export const generateStaticParams = async () => {
  return allBlogs.map((p) => ({ slug: p.slug.split('/').map((name) => decodeURI(name)) }))
}

export default async function BlogsRedirectPage({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  const post = allBlogs.find((p) => p.slug === slug)

  if (!post) {
    return notFound()
  }

  // Redirect to the existing blog post URL
  redirect(`/blog/${slug}`)
}
