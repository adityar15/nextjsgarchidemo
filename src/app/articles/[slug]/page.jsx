import { ArticleLayout } from '@/components/ArticleLayout'
import { cleanHTML } from '@/lib/domcontent'
import { getItemBySlug } from '@/lib/garchi'
import React from 'react'

export default async function ArticlePage({
    params: { slug },
}) {

  const article = await getItemBySlug(slug)

  const articleDetails = {
    title: article.name,
    date: article.item_meta.find(meta => meta.key === "date_published").value,
  }
    
  return (
    <ArticleLayout article={articleDetails} html={cleanHTML(article.description)} />
  )
}


export async function generateMetadata({ params: { slug } }) {
    const article = await getItemBySlug(slug)
    return {
        title: article.name,
        description: article.one_liner,
    }
}