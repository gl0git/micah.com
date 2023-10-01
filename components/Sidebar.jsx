"use client";
import Link from 'next/link'
import localFont from 'next/font/local'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Sidebar(){
    let pathname = usePathname() || '/'
    if (pathname.includes('/blog/')) pathname = '/blog'
    if (pathname.includes('/projects/')) pathname = '/projects'
    const [activeTab, setActiveTab] = useState("Home")

    const pages = {
        '/': {
            name: 'Home'
        },
        '/projects': {
            name: 'Projects'
        },
        '/blog': {
            name: 'Blog'
        }
    }

    return (
            <div className='flex max-w-8xl gap-2'>
                <div className='flex gap-4'>
                    {Object.entries(pages).map(([path, { name }]) => {
                        const isActive = path == pathname
                        return (
                            <Link 
                                className={`text-center rounded ${isActive ? "border-divider-color" : "text-secondary-color"} hover:text-primary-color transition-all ease-in py-2`} 
                                href={path}>
                                <span className="relative">
                                    {name}
                                        {path === pathname ? (
                                            <motion.div
                                                className="absolute h-[1px] top-7 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
                                                layoutId="sidebar"
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 350,
                                                    damping: 30,
                                                }}
                                            />
                                    ) : null}
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </div>
    )
}