const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.GARCHI_API_KEY}`,
}

const spaceUID = "your_space_uid"

export async function loadPage(slug = "/"){
    const pageResponse = await fetch(`${process.env.GARCHI_API_URL}/page`, {
        method: "POST",
        headers: headers,
        next: {
            revalidate: 15,
        },
        // cache: "no-store",
        body: JSON.stringify({ slug, mode: "live", space_uid: spaceUID })
    })

    const page = await pageResponse.json()
    return page
}


export async function getItems()
{
    const itemResponse = await fetch(`${process.env.GARCHI_API_URL}/space/${spaceUID}/items`, {
        headers: headers,
    })
    const items = await itemResponse.json()
    return items.data
}

export async function getItemBySlug(slug)
{
    const itemResponse = await fetch(`${process.env.GARCHI_API_URL}/item/${slug}`, {
        headers: headers,
        next: {
            revalidate: 15,
        }
    })
    const item = await itemResponse.json()
    return item.data[0]
}



export async function getAssetFromGarchi(name)
{
    const assetResponse = await fetch(`${process.env.GARCHI_API_URL}/space/assets/${name}?space_uid=${spaceUID}`, {
        headers: headers,
    })
    const asset = await assetResponse.json()
    return asset
}