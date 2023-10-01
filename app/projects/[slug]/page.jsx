import { notFound } from 'next/navigation';
import { Mdx } from '../../../components/Mdx';
import { allProjects } from 'contentlayer/generated';
import Balancer from 'react-wrap-balancer';
import { Suspense } from 'react';
import Link from 'next/link'

const LinkIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export async function generateMetadata({ params, }) {
  const post = allProjects.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://micah.vercel.app/projects/${slug}`,
    },
  };
}

function formatDate(date) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate} (${formattedDate})`;
}

export default async function Blog({ params }) {
  const post = allProjects.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.structuredData),
        }}
      ></script>
      <div className='flex items-center'>
        <h1 className="font-bold text-2xl flex tracking-tighter max-w-[650px]">
            <Balancer>{post.title}</Balancer>
        </h1>
        <div className='mx-2 text-xl'> | </div>
        <div className='text-md'>{post.technologies}</div>
      </div>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {post.description}
        </p>
        {/* I also want an error boundary here */}
        <Suspense>
          {post.publishedAt}
        </Suspense>
      </div>
      {post.repoUrl &&
        <a className='flex space-x-1 my-6 border border-neutral-300 dark:border-neutral-700 bg-neutral-50 transition-all ease-in hover:bg-neutral-200 dark:bg-neutral-800 rounded items-center justify-between px-3 py-4 w-full truncate'
          target='_blank' 
          href={post.repoUrl}>
          <div className='flex flex-col'>
            <div className='font-bold truncate'>{post.repoUrl}</div>
            <div className='hidden sm:block truncate'>Check out the repository</div>
          </div>
          <LinkIcon />
        </a>}
      <Mdx code={post.body.code} />
    </section>
  );
}