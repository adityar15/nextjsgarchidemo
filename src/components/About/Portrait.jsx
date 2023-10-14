import Image from "next/image";


export default function Portrait({ portraitImage, ...props }) {
    return (
        <div className="lg:pl-20 w-full" {...props}>
            <div className="w-full h-96 px-2.5 relative">
                <Image
                    fill
                    src={portraitImage}
                    alt=""
                    sizes="(min-width: 1024px) 32rem, 20rem"
                    className="aspect-square rotate-3 rounded-2xl
                     bg-zinc-100 object-cover dark:bg-zinc-800"
                />
            </div>
        </div>
    )
}
