import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { formatDate } from '@/lib/formatDate'
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
} from '@/components/SocialIcons'

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { getItems } from '@/lib/garchi'
import { async } from 'fast-glob'


const components = {
    Portfolioheader,
    Articles,
    Newsletter,
    Resume,
    Role,
    SocialLink,
    BriefcaseIcon,
    MailIcon,
    ArrowDownIcon,
    Photos,
    ArticlesNLCV
}

const socialIcons = {
    TwitterIcon,
    InstagramIcon,
    GitHubIcon,
    LinkedInIcon,
}

function MailIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function BriefcaseIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function ArrowDownIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export async function Articles({ ...props }) {

    const items = await getItems()

    return (
        <div className="flex flex-col gap-16">
            {
                items?.map(article => <Article key={article.id} article={article} />)
            }

        </div>

    )
}

function Article({ article, ...props }) {
    const datePublished = article.item_meta.find(i => i.key === "date_published")?.value
    return (
        <Card as="article">
            <Card.Title href={`/articles/${article.slug}`}>
                {article.name}
            </Card.Title>
            <Card.Eyebrow as="time" dateTime={datePublished} decorate>
                {formatDate(datePublished)}
            </Card.Eyebrow>
            <Card.Description>{article.one_liner}</Card.Description>
            <Card.Cta>Read article</Card.Cta>
        </Card>
    )
}

function SocialLink({ icon, ...props }) {

    const Icon = socialIcons[icon]

    return (
        <Link className="group -m-1 p-1" {...props}>
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    )
}


function FormInput({
    name,
    placeholder,
    type = "text",
    required = "no",
    select_options = "[]",
    select_key = "",
    select_value = "",
    ...props
}) {

    if (!name && !placeholder && !type) return (<></>)

    else if (type === "textarea")
        return (
            <textarea className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                placeholder={placeholder}
                aria-label={placeholder}
                name={name}
                required={required == 'yes' ? true : false}
                rows={5}
            ></textarea>
        )
    else if (type === "select")
        return (
            <select className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                placeholder={placeholder}
                aria-label={placeholder}
                name={name}
                required={required == 'yes' ? true : false}
            >
                <option value="" disabled selected>Select your option</option>
                {JSON.parse(select_options).map(o => <option 
                key={o[select_key] ? o[select_key] : o}
                value={
                    select_key ? o[select_key] : o
                }>
                    {select_value ? o[select_value] : o}
                </option>)}
            </select>
        )

    return (
        <input
            type={type}
            placeholder={placeholder}
            aria-label={placeholder}
            name={name}
            required={required == 'yes' ? true : false}
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
    )
}

function Newsletter({
    title,
    description,
    buttonText,
    subSection,
    ...props
}) {

    async function handleForm(formData){
        "use server"
    }

    return (
        <form
            {...props}
            action={handleForm}
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
        >
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <MailIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">{title}</span>
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {description}
            </p>
            <div className="mt-6 flex">
                {
                    subSection?.map(s => <FormInput key={s.id} {...s.props} />)
                }
                <Button type="submit" className="ml-4 flex-none">
                    {buttonText}
                </Button>
            </div>
        </form>
    )
}

function Role({
    start,
    end,
    logo,
    company,
    title,
    ...other
}) {
    let startLabel = start
    let startDate = start


    let endLabel = end
    let endDate = end

    return (
        <li className="flex gap-4" {...other}>
            <div className="relative overflow-hidden mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={logo} fill alt="" className="h-7 w-7 object-cover" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    {title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                    className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                    aria-label={`${startLabel} until ${endLabel}`}
                >
                    <time dateTime={startDate}>{startLabel}</time>{' '}
                    <span aria-hidden="true">—</span>{' '}
                    <time dateTime={endDate}>{endLabel}</time>
                </dd>
            </dl>
        </li>
    )
}

function Resume({ title, buttonText, subSection, ...props }) {


    return (
        <div {...props} className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">
                    {title}
                </span>
            </h2>
            <ol className="mt-6 space-y-4">
                {subSection.map((section) => (
                    <Role key={section.id}  {...section.props} />
                ))}
            </ol>
            <Button href="#" variant="secondary" className="group mt-6 w-full">
                {buttonText}
                <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
        </div>
    )
}

function Photos({ img1 = "", img2 = "", img3 = "", img4 = "", img5 = "", ...props }) {
    let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
    const imageArray = [img1, img2, img3, img4, img5].filter(Boolean)
    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                {imageArray.map((image, imageIndex) => (
                    <div
                        {...props}
                        key={image.src}
                        className={clsx(
                            'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                            rotations[imageIndex % rotations.length],
                        )}
                    >
                        <Image
                            src={image}
                            fill
                            alt=""
                            sizes="(min-width: 640px) 18rem, 11rem"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}


function Portfolioheader({ heading, content, subSection, ...others }) {
    return (
        <Container className="mt-9" {...others} >
            <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    {heading}
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    {content}
                </p>

                <div className="mt-6 flex gap-6">
                    {
                        subSection?.map(s => <SocialLink
                            href={s.props?.href}
                            aria-label={s.props?.label}
                            icon={s.props?.icon}
                            key={s.id}
                        />)
                    }
                </div>
            </div>
        </Container>
    )
}

function ArticlesNLCV({
    subSection,
    ...props
}) {

    return (
        <Container className="mt-24 md:mt-28" {...props}>
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <Articles />
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                    {
                        subSection?.map(s => <GarchiComponent section={s} subSection={s.children} {...s.props} key={s.id} />)
                    }
                </div>
            </div>
        </Container>
    )
}



export default function GarchiComponent({ section, subSection, ...others }) {
    if (!section) return <></>
    else if (components[section?.name] == undefined) return <></>

    const Component = components[section?.name] || <></>
    return <Component {...section.props} subSection={section.children} />
}