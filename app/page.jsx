import Image from 'next/image'
import Link from 'next/link'
import GithubLogo from '../public/imgs/social-logos/github-logo.png'
import TwitterLogo from '../public/imgs/social-logos/twitter-logo.png'
import Profile from '../public/imgs/profile.jpg'

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

function SocialMediaLink({ img, href, text, username }) {
  return (
    <a target="_blank" href={href}>
      <div className='border border-neutral-300 dark:border-neutral-700 bg-neutral-50 transition-all ease-in hover:bg-neutral-200 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full truncate'>
        <div className='flex items-center space-x-3'>
          <Image
            src={img}
            height={40}
            width={40}
            />
          <div className='flex flex-col'>
            <div className='font-bold truncate'>{'@' + username}</div>
            <div className='hidden sm:block truncate'>{text}</div>
          </div>
        </div>
        <LinkIcon />
      </div>
    </a>
  )
}

export default function Home() {
  return (
      <div className='flex flex-col gap-8'>
        <h1 className='text-3xl'>Hey, I'm Micah.</h1>
        <p>Welcome to my corner of the internet. I'm a software engineer from Toronto, Canada.
          Currently I'm working on a universal search tool, and studying CS @ UWaterloo.
        </p>
        <div className='flex gap-4'>
            <Image
              src={Profile} 
              width={175}
              height={100}
              className='rounded-full'
            />
          <div className='flex flex-col justify-center space-y-4 w-5/6'>
              <SocialMediaLink
                img={GithubLogo}
                href={"https://github.com/gl0git"}
                text={"Check me out on GitHub"}
                username={"gl0git"}
              />
              <SocialMediaLink
                img={TwitterLogo}
                href={"https://twitter.com/"}
                text={"Follow me on Twitter! (soon)"}
                username={"comingsoon..."}
              />
          </div>
        </div>
        <p>
          I enjoy building software products that help deliver better end-user experiences.
          I'm passionate about software, writing, and psychology, and will be writing thoughts and reflections on these topics in my blog.
        </p>
      </div>
  )
}
