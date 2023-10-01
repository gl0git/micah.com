import { allProjects } from 'contentlayer/generated'
import Link from 'next/link'

export default function Blog(){
    return (
        <section>
        <h1 className="font-bold text-2xl mb-8 tracking-tighter">Check out my projects (links below)</h1>
        {allProjects
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((project) => (
            <Link
              key={project.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/projects/${project.slug}`}
            >
              <div className="w-full flex flex-col">
                <div className='flex'>
                  <p className="text-neutral-900 font-semibold dark:text-neutral-100 tracking-tight">
                    {project.title}
                  </p>
                  <div className='mx-2'> | </div>
                  <p className="">
                    {project.technologies}
                  </p>
                </div>
                <p className='text-neutral-600 text-sm'>
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
      </section>
    )
}