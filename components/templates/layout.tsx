import Head from 'next/head'
import React, { ReactNode } from 'react'
import Hamburger from '../molecules/hamburger';
import Navbar from '../molecules/navbar';

type LayoutProps = {
    children: ReactNode
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
        <Head>
            <title>Mike Schneider</title>
            <meta name='desciption' content='Personal website for Michael Schneider, Software Developer' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel='icon' href='/favicon.ico' />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </Head>
        <div className="flex bg-rai-grey h- md:divide-x-2 divide-rai-lt-grey font-mono">
          <aside className='hidden md:flex md:flex-col w-2/5 lg:w-1/4 xl:w-1/5 h-screen top-0 sticky bg-rai-bone pt-2 pl-2 font-Roboto'>
            <Navbar classes='flex flex-col space-y-4'/>
          </aside>
          <main className='flex flex-col w-full text-rai-white'>
            <Hamburger classes='md:hidden flex space-x-2 bg-rai-bone text-rai-black' />
            {children}
            <footer className='bottom-0 align-bottom'>
              <div className='pt-10 text-rai-white bg-transparent'>
                <span className='block ml-5 text-xs'>Version 0.5-dev</span>
                <span className='ml-5'>&copy;2022 Michael Schneider</span>
              </div>
            </footer>
          </main>
        </div>
    </>
  )
}