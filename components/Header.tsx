import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Image from 'next/image'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass = 'flex flex-col items-center w-full p-4'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle} className="mt-4 mb-4">
        <div className="flex items-center justify-center">
          <Image
            src="/static/images/logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="h-auto w-auto"
          />
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar flex max-w-full items-center gap-x-4 overflow-x-auto md:max-w-72 lg:max-w-96">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hover:text-primary-500 m-1 font-medium text-gray-900"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <SearchButton />
      </div>
    </header>
  )
}

export default Header
