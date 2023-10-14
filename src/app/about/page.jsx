import GarchiComponentDynamic from '@/components/About/GarchiComponentDynamic'
import { Container } from '@/components/Container'
import { getAssetFromGarchi, loadPage } from '@/lib/garchi'



export default async function About() {
  const page = await loadPage("/about")

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          {
            page.sections.map(section => <GarchiComponentDynamic key={section.id} section={section} />)
          }
      </div>
    </Container>
  )
}


export async function generateMetadata() {
  const page = await loadPage("/about")
  const logo = await getAssetFromGarchi('myself')
  return {
    title: page.title,
    description: page.description,
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