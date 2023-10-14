import dynamic from "next/dynamic"

export default function GarchiComponentDynamic({
    section,
    ...others
}) {
    if (!section) return <></>

    const Component = dynamic(() => import(`./${section?.name}`))
   
    if(!Component)
    return <></>

 
    return <Component {...section.props} subSection={section.children} />
}



