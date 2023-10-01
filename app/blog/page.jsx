import { allBlogs } from 'contentlayer/generated'
import Link from 'next/link'

export default function Blog(){
    return (
        <section>
        <h1 className="font-bold text-2xl mb-8 tracking-tighter">Read my thoughts & reflections</h1>
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-semibold">
                  {post.title}
                </p>
                <p className='text-neutral-600 text-sm'>
                  {post.summary}
                </p>
              </div>
            </Link>
          ))}
      </section>
    )
}