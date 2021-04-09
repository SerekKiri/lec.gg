import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

// Icons
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdSearch, MdMenu, MdKeyboardBackspace, MdPersonOutline } from 'react-icons/md'

const Navigation = ({ items }) => {
    const [path, setPath] = useState('')
    const router = useRouter()

    useEffect(() => {
        setPath(router.route.replace("/", ""))
    }, [router])

    return (
        <div className="w-screen xl:w-1/5 xl:max-w-xs xl:h-screen">
            <div className="w-full bg-white flex flex-col items-center px-6 pt-3 xl:hidden shadow-lg fixed">
                <div className="flex w-full font-description text-xs justify-between mb-3">
                    <Link href="/account">
                        <a className={`flex ${path === 'account' ? 'text-primary' : ''}`}>
                            <MdPersonOutline className="text-base mr-1" />
                            Account
                        </a>
                    </Link>

                    <Link href="/cart">
                        <a className={`flex ${path === 'cart' ? 'text-primary' : ''}`}>
                            <AiOutlineShoppingCart className="text-base mr-1" />
                        ({items} items)
                        </a>
                    </Link>
                </div>

                <div className="w-full flex flex-row justify-between items-center py-2">
                    <MdMenu className="text-4xl" />

                    <Link href="/all-products">
                        <a>
                            <Image
                                src="/shoplogo-lec-1.png"
                                alt="shoplogo"
                                width={25}
                                height={50}
                            />
                        </a>
                    </Link>

                    <MdSearch className="text-4xl" />
                </div>
            </div>

            <div className="hidden w-full h-full px-10 py-6 justify-center items-center xl:flex flex-col shadow-xl">
                <div className="flex w-full font-description text-xs justify-between mb-11">
                    <Link href="/account">
                        <a className={`flex ${path === 'account' ? 'text-primary' : ''}`}>
                            <MdPersonOutline className="text-base mr-1" />
                            Account
                        </a>
                    </Link>

                    <Link href="/cart">
                        <a className={`flex ${path === 'cart' ? 'text-primary' : ''}`}>
                            <AiOutlineShoppingCart className="text-base mr-1" />
                        ({items} items)
                        </a>
                    </Link>
                </div>

                <div className="w-20">
                    <Image
                        src="/shoplogo-lec-1.png"
                        alt="shoplogo"
                        width="auto"
                        height="auto"
                    />
                </div>

                <div className="relative flex w-full items-center justify-end">
                    <input id="search" name="search" placeholder="Search" className="mt-9 my-2 w-full outline-none bg-grey rounded-xl px-4 py-3 border-4 text-sm border-none" />
                    <button className="absolute mt-7 mr-3">
                        <MdSearch />
                    </button>
                </div>

                <div className="flex flex-col mt-6 items-start h-full w-full text-left text-lg font-title uppercase">
                    <Link href="/">
                        <a className={`flex items-center pt-4 pb-3 font-bold hover:text-primary ${path === '' ? 'text-primary' : ''}`}>
                            {path === '' ? <div className="transform rotate-180 text-3xl mr-5">
                                <MdKeyboardBackspace />
                            </div> : ''}
                            Home
                        </a>
                    </Link>

                    <Link href="/all-products">
                        <a className={`flex items-center pt-4 pb-3 font-bold hover:text-primary ${path.includes('all-products') ? 'text-primary' : ''}`}>
                            {path.includes('all-products') ? <div className="transform rotate-180 text-3xl mr-5">
                                <MdKeyboardBackspace />
                            </div> : ''}
                            All products
                        </a>
                    </Link>

                    <a href="https://lolesports.com" className="flex items-center pt-4 pb-3 font-bold hover:text-primary">
                        lol esports
                    </a>

                    <Link href="/contact">
                        <a className={`flex items-center pt-4 pb-3 font-bold hover:text-primary ${path === 'contact' ? 'text-primary' : ''}`}>
                            {path === 'contact' ? <div className="transform rotate-180 text-3xl mr-5">
                                <MdKeyboardBackspace />
                            </div> : ''}
                            Contact
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation