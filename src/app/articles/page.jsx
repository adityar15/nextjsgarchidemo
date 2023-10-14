
import { Articles } from '@/components/GarchiComponent'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAssetFromGarchi } from '@/lib/garchi'


export async function generateMetadata() {
  const logo = await getAssetFromGarchi('myself')
  return {
    title: 'Articles by Aditya',
    description: 'All of my long-form thoughts on programming, entrepreneurship, and more, collected in order.', 
    icons: {
      icon: logo.path,
      shortcut: logo.path,
      apple: logo.path,
      other: {
        rel: logo.path,
        url: logo.path,
      },
    }, 
  }
}

export default async function ArticlesIndex() {
 

  return (
    <SimpleLayout
      title="Writing on programming, entrepreneurship , and more"
      intro="All of my long-form thoughts on programming, entrepreneurship, and more, collected in order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          <Articles />
        </div>
      </div>
    </SimpleLayout>
  )
}
