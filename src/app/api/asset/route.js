import { getAssetFromGarchi } from "@/lib/garchi";
import { NextResponse } from 'next/server'
export async function GET(request)
{
    const { searchParams } = new URL(request.url)
    const assetDetails = await getAssetFromGarchi(searchParams.get("name"))
    return NextResponse.json(assetDetails)
}