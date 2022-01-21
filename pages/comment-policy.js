import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function Comments() {
  return (
    <>
      <PageSEO
        title={`Comment Policy - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="pt-6 space-y-2 md:space-y-5 text-center">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          ULC Unofficial Comment Policy
        </h1>
      </div>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-24">
        Comments are reviewed prior to publication. Comments must contribute to the discussion;
        debate an opinion, not a person.
      </div>
    </>
  )
}
