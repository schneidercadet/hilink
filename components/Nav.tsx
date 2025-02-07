import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Button from './Button'
import Modal from './Modal'

const Nav = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link href="/">
        <Image src='/hilink-logo.svg' alt="logo" width={74} height={29} />
      </Link>

      <div className='flex flex-1 justify-center items-center'>
        <ul className='hidden h-full gap-12 lg:flex'>
          {NAV_LINKS.map((link) => (
            <Link key={link.key} href={link.href} className='regular-16 text-gray-50 flexCenter
            cursor-pointer pb-1.5 transition-all hover:font-bold'>
              {link.label}
            </Link>
          ))}
        </ul>
      </div>

      <div className='lg:flex hidden items-center'>
        <Button 
          type='button'
          title='Login'
          icon='/user.svg'
          variant='btn_dark_green'
        />
      </div>

      <div className='lg:hidden'>
        <Modal />
      </div>
    </nav>
  )
}

export default Nav