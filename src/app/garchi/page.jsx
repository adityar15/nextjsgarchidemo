
import { loadPage } from "@/lib/garchi"

import GarchiComponent from "@/components/GarchiComponent"



export default async function Home() {
    const page = await loadPage("/garchi")



    return (
        <>
            {
                page?.sections.map(section => <GarchiComponent key={section.id} section={section} />)
            }
     
        </>
    )
}


export async function generateMetadata() {
    const page = await loadPage("/garchi")
    const logo = page?.sections.find(section => section.name === "Logo").props.src
    return {
        title: page.title,
        icons: {
            icon: logo,
            shortcut: logo,
            apple: logo,
            other: {
              rel: logo,
              url: logo,
            },
          },
        description: page.description,
    }
}