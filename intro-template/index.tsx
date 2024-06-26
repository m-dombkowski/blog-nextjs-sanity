import NewsletterSignup from 'components/NewsletterSignup'
import Image from 'next/image'
import Link from 'next/link'
import { memo, useSyncExternalStore } from 'react'

import cover from './cover.png'

const subscribe = () => () => {}

export default memo(function IntroTemplate() {
  const studioURL = useSyncExternalStore(
    subscribe,
    () => `${window.location.origin}/studio`,
    () => null,
  )
  const createPostURL = useSyncExternalStore(
    subscribe,
    () =>
      `${window.location.origin}/studio/intent/create/template=post;type=post/`,
    () => null,
  )
  const isLocalHost = useSyncExternalStore(
    subscribe,
    () => window.location.hostname === 'localhost',
    () => false,
  )
  const hasUTMtags = useSyncExternalStore(
    subscribe,
    () => window.location.search.includes('utm'),
    () => false,
  )

  const hasEnvFile = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const hasRepoEnvVars =
    process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER &&
    process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER &&
    process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG
  const repoURL = `https://${process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER}.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}`
  const removeBlockURL = hasRepoEnvVars
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER}.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}/blob/main/README.md#how-can-i-remove-the-next-steps-block-from-my-blog`
    : `https://github.com/sanity-io/nextjs-blog-cms-sanity-v3#how-can-i-remove-the-next-steps-block-from-my-blog`

  if (hasUTMtags || !studioURL) {
    return
  }

  return (
    <div className="flex justify-center bg-gray-50">
      {/* <NewsletterSignup /> */}
    </div>
  )
})

function Box({
  circleTitle,
  element,
}: {
  circleTitle: string
  element: JSX.Element
}) {
  return (
    <li className="mt-2 grid grid-flow-col grid-rows-1 place-content-start gap-3">
      <div className="row-span-3 select-none">
        <div className="relative flex h-6 w-6 select-none items-center justify-center rounded-full bg-gray-200 p-4 text-center">
          {circleTitle}
        </div>
      </div>
      {element}
    </li>
  )
}

function BlueLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="text-blue-500 underline hover:text-blue-800"
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  )
}

const RemoveBlock = ({ url }) => (
  <a
    className="hover:text-blue-800"
    href={url}
    target="_blank"
    rel="noreferrer"
  >
    How to remove this block?
  </a>
)

function getGitProvider() {
  switch (process.env.NEXT_PUBLIC_VERCEL_GIT_PROVIDER) {
    case 'gitlab':
      return 'GitLab'
    case 'bitbucket':
      return 'Bitbucket'
    default:
      return 'GitHub'
  }
}
