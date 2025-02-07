'use client';
import Button from './Button';
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { X } from 'lucide-react'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Hamburger Button */}
            <Image 
                src='/menu.svg' 
                alt="menu" 
                width={32} 
                height={32}
                className='inline-block cursor-pointer lg:hidden' 
                onClick={() => setIsOpen(true)}
            />
            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
                    {/* Modal Content */}
                    <div className="fixed right-0 top-0 h-full w-[300px] bg-white transform transition-transform duration-300 ease-in-out">
                        {/* Close Button */}
                        <button
                            className="absolute right-4 top-4 p-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
                        </button>

                        {/* Navigation Links */}
                        <nav className="flex flex-col items-center justify-center h-full">
                            <ul className="flex flex-col items-center gap-10">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.key}>
                                        <Link
                                            href={link.href}
                                            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal