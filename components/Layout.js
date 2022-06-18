import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Layout = ({ title, sitename, children }) => {
    return (
        <>
            <Head>
                <title>{title ? title + ` - ${sitename}`: sitename }</title>
                <meta name="description" content="Ecommerce Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex flex-col min-h-screen justify-between'>
                <header>
                    <nav className='flex flex-row h-12 items-center px-4 justify-between shadow-md'>
                        <Link href="/">
                            <a className="text-lg font-bold">{sitename}</a>
                        </Link>
                        <div>
                            <Link href="/cart"><a className='p-2'>Cart</a></Link>
                            <Link href="/login"><a className='p-2'>Login</a></Link>
                        </div>
                    </nav>
                </header>
                <main className='container m-auto mt-4 px-4'>
                    {children}
                </main>
                <footer className='flex flex-row justify-center items-center h-10 shadow-inner'>
                    <p>Copyright &#169; 2022 {sitename}</p>
                </footer>
            </div>
        </>
    )
}

export default Layout