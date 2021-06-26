'use strict';
import Link from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <>
            <nav className='flex items-center flex-wrap bg-green p-3 sticky top'>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <span className='text-2xl text-blue font-raleway uppercase tracking-wide'>
                            Robert Woods
                        </span>
                    </a>
                </Link>
                <button className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-blue ml-auto hover:text-blue outline-none' onClick={handleClick}>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue font-raleway items-center justify-center hover:bg-green-600 hover:text-white '>
                                Home
                            </a>
                        </Link>
                        <Link href='/projects'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue font-raleway items-center justify-center hover:bg-green-600 hover:text-white'>
                                Projects
                            </a>
                        </Link>
                        <Link href='/experience'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue font-raleway items-center justify-center hover:bg-green-600 hover:text-white'>
                                Experience
                            </a>
                        </Link>
                        <Link href='/contact'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue font-raleway items-center justify-center hover:bg-green-600 hover:text-white'>
                                Contact
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}