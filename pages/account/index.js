import React from 'react'
import Head from 'next/head'
import { useDispatch } from 'react-redux'

// Components
import privateRoute from 'components/private-route'

// Icons
import { MdImage, MdEdit } from 'react-icons/md'

// Actions
import { setLogged } from 'store/auth/actions'

const Account = () => {
    const dispatch = useDispatch()

    const signOut = () => {
        dispatch(setLogged(false))
    }

    return (
        <div>
            <Head>
                <title>Account</title>
            </Head>

            <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-gradLeft to-gradRight px-4 2xl:px-52">
                <div className="xl:mx-96 px-4 xl:px-5 pt-4 pb-4 bg-white rounded-xl flex flex-col xl:flex-row w-full flex font-title">
                    <div className="flex flex-wrap xl:flex-col justify-center xl:items-center xl:justify-start text-lg font-bold w-full xl:w-auto xl:h-96">
                        <div className="text-primary my-1 mx-1 xl:mx-0">Account</div>
                        <div className="my-1 mx-1 xl:mx-0 text-gray-500">Orders</div>
                        <div className="my-1 mx-1 xl:mx-0 text-gray-500">Other</div>

                        <div className="my-1 mx-1 xl:mx-0 text-red-500 xl:mt-auto cursor-pointer" onClick={() => signOut()}>Log out</div>
                    </div>
                    <div className="px-4 xl:pl-10 xl:pr-4 flex flex-col xl:h-96 w-full">
                        <div className="mt-2 mx-auto xl:mx-0 mb-1 xL:mb-3 text-2xl font-bold">
                            Account details
                        </div>

                        <div className="flex items-center mt-3 xl:mt-1">
                            <div className="rounded-full w-12 h-12 bg-gray-500 flex justify-center items-center text-2xl text-white">
                                <MdImage />
                            </div>

                            <div className="ml-2 text-xl font-bold">
                                Name
                            </div>
                        </div>

                        <div className="mt-3 text-lg">
                            Your email:<br />
                            <span className="font-bold">test@example.com</span>
                        </div>

                        <div className="mt-2 text-lg">
                            Your password:<br />
                            <div className="flex items-center">
                                <span className="font-bold flex mr-2">*************</span>
                                <MdEdit />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default privateRoute(Account)