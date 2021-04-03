import Head from 'next/head'

// Components
import { Navigation } from '../components/navigation'

export default function Store({ children }) {
    return (
        <div className="w-screen xl:flex">
            <Head>
                <link href="/fonts/fonts.css" rel="stylesheet" />
            </Head>

            <Navigation />

            {children}
        </div>
    )
}