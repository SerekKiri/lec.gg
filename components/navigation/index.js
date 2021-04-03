import Link from 'next/link'
import Image from 'next/image'

// Icons
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdSearch, MdMenu, MdKeyboardBackspace, MdPersonOutline } from 'react-icons/md'

export const Navigation = () => {
    return (
        <div className="w-screen xl:w-1/5 xl:h-screen">
            <div className="flex flex-col items-center px-6 pt-3 xl:hidden shadow-lg">
                <div className="flex w-full font-description text-xs justify-between mb-3">
                    <div className="flex">
                        <MdPersonOutline className="text-base mr-1" />
                        Account
                    </div>

                    <div className="flex">
                        <AiOutlineShoppingCart className="text-base mr-1" />
                        (0 items)
                    </div>
                </div>

                <div className="w-full flex flex-row justify-between items-center py-2">
                    <MdMenu className="text-4xl" />
                    <Image
                        src="/shoplogo-lec-1.png"
                        alt="shoplogo"
                        width={25}
                        height={50}
                    />

                    <MdSearch className="text-4xl" />
                </div>
            </div>

            <div className="hidden w-full h-full px-10 py-6 justify-center items-center xl:flex flex-col shadow-xl">
                <div className="flex w-full font-description text-xs justify-between mb-11">
                    <div className="flex cursor-pointer	">
                        <MdPersonOutline className="text-base mr-1" />
                        Account
                    </div>

                    <div className="flex cursor-pointer	">
                        <AiOutlineShoppingCart className="text-base mr-1" />
                        (0 items)
                    </div>
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
                        <a className="flex items-center pt-4 pb-3 text-primary font-bold hover:text-primary">
                            <div className="transform rotate-180 text-3xl mr-5">
                                <MdKeyboardBackspace />
                            </div>
                            Home
                        </a>
                    </Link>

                    <Link href="/all-products">
                        <a className="pt-4 pb-3 font-bold hover:text-primary">
                            All products
                        </a>
                    </Link>

                    <a href="https://lolesports.com" className="pt-4 pb-3 font-bold hover:text-primary">
                        lol esports
                    </a>

                    <Link href="/contact">
                        <a className="pt-4 pb-3 font-bold hover:text-primary">
                            Contact
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}