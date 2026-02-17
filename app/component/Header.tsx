import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HamburgerMenu from './Hamburger'

export default function Header() {
    return (
        <header className='flex justify-between items-center p-8 bg-white/40 py-3 px-16 fixed top-0 left-0 right-0 z-50'>
            <Link href="/" className='flex items-center gap-2'>
                <Image src="/assets/sosui.PNG" alt="sosui" width={50} height={50} />
                <h1 className='text-2xl font-bold'>SOSUI GROUP</h1>
            </Link>
            <div className='ml-auto'>
                <HamburgerMenu />
            </div>

        </header>
    )
}