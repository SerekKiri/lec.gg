import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

// Components
import publicComponent from 'components/public-route'

// Actions
import { setLogged } from 'store/auth/actions'

const SignIn = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const signIn = (e) => {
        e.preventDefault()
        dispatch(setLogged(true))
        router.push('/')
    }

    return (
        <div>
            <Head>
                <title>Sign In</title>
            </Head>

            <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-gradLeft to-gradRight">
                <div className="px-16 pt-4 pb-2 bg-white rounded-xl">
                    <img src="/home/logo.png" className="w-56 my-6" alt="sign_up_logo" />
                    <div className="flex justify-center font-title text-2xl">
                        Welcome back!
                    </div>
                    <form className="flex flex-col mt-2 mb-2" onSubmit={signIn}>
                        <input placeholder="E-mail" type="email" className="my-2 focus:outline-none font-title border-b-2 px-2 border-primary py-1" />
                        <input placeholder="Password" type="password" className="my-3 focus:outline-none font-title border-b-2 px-2 border-primary py-1" />

                        <button className="mt-1 self-end bg-primary py-2 px-4 focus:outline-none rounded-xl text-white" type="submit">Sign In</button>
                        <span className="mx-auto mt-3 text-xs">No account? <Link href="/sign-up"><a className="text-primary">Create a new one!</a></Link></span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default publicComponent(SignIn)