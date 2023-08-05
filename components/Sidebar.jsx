"use client";
import Link from 'next/link'
import { useState } from 'react'

export default function Sidebar(){
    const [activeTab, setActiveTab] = useState("home")

    const pages = [
        "home",
        "projects",
        "blog"
    ]

    return (
        <div className='flex flex-col gap-2'>
            {pages.map((page) => {
                return (
                    <div>
                        <Link 
                            className={`p-2 text-center rounded ${page == activeTab ? "bg-stone-200" : ""} transition-all ease-in`} 
                            href={`${page == "home" ? "/" : `/${page}`}`} onClick={() => setActiveTab(page)}>
                            {page}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}