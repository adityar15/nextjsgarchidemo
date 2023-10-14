import React from 'react'
import { Prose } from '../Prose'
import { cleanHTML } from '@/lib/domcontent'

export default function Brief({ title, content, ...props }) {
   
    return (
        <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {title}
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <Prose dangerouslySetInnerHTML={{ __html: cleanHTML(content) }} />
            </div>
        </div>
    )
}
