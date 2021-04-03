import Link from 'next/link'
import Image from 'next/image'

// Icons
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdSearch, MdMenu, MdKeyboardBackspace, MdPersonOutline } from 'react-icons/md'

export const Navigation = () => {
    return (
        <div class="w-screen xl:w-1/5 xl:h-screen">
            <div class="flex flex-col items-center px-6 pt-3 xl:hidden">
                <div class="flex w-full font-description text-xs justify-between mb-3">
                    <div class="flex">
                        <MdPersonOutline class="text-base mr-1" />
                        Account
                    </div>

                    <div class="flex">
                        <AiOutlineShoppingCart class="text-base mr-1" />
                        (0 items)
                    </div>
                </div>

                <div class="w-full flex flex-row justify-between items-center py-2">
                    <MdMenu class="text-4xl" />
                    <Image
                        src="/shoplogo-lec-1.png"
                        alt="shoplogo"
                        width={25}
                        height={50}
                    />

                    <MdSearch class="text-4xl" />
                </div>
            </div>

            <div class="hidden w-full px-10 py-6 justify-center items-center xl:flex flex-col">
                <div class="flex w-full font-description text-xs justify-between mb-11">
                    <div class="flex">
                        <MdPersonOutline class="text-base mr-1" />
                        Account
                    </div>

                    <div class="flex">
                        <AiOutlineShoppingCart class="text-base mr-1" />
                        (0 items)
                    </div>
                </div>

                <Image
                    src="/shoplogo-lec-1.png"
                    alt="shoplogo"
                    width={70}
                    height={140}
                />

                <div class="relative flex w-full items-center justify-end">
                    <input id="search" name="search" placeholder="Search" class="mt-9 my-2 w-full outline-none bg-grey rounded-xl px-4 py-3 border-4 text-sm border-none" />
                    <button class="absolute mt-7 mr-3">
                        <MdSearch />
                    </button>
                </div>


                <div class="flex flex-col mt-6 items-start h-full w-full text-left text-lg font-title uppercase">
                    <Link href="/">
                        <a class="flex items-center pt-4 pb-3 text-primary font-bold hover:text-primary">
                            <div class="transform rotate-180 text-3xl mr-5">
                                <MdKeyboardBackspace />
                            </div>
                        Home
                    </a>
                    </Link>

                    <Link href="/all-products">
                        <a class="pt-4 pb-3 font-bold hover:text-primary">
                            All products
                    </a>
                    </Link>

                    <a href="https://lolesports.com" class="pt-4 pb-3 font-bold hover:text-primary">
                        lol esports
                </a>

                    <Link href="/contact">
                        <a class="pt-4 pb-3 font-bold hover:text-primary">
                            Contact
                    </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}