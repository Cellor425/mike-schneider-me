import { ReactElement } from 'react'
import Image from 'next/image'
import Layout from '../components/templates/layout'
import { NextPageWithLayout } from './_app'
import React from 'react'
import Card from '../components/organisms/card'
import BackToTop from '../components/atoms/backToTop'

const LINKEDIN_IMG: string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAYFBMVEUAd7X///8Ac7NGlMRGk8QAdrUAbLAAbrDZ7PXV6fPy+fw9ir/p9Pkugbo0hr3D2umz0ORUnMh3q9C72eplocoIe7dsps6dxN6lyeCDs9TL4u+WwNzg7vVTmMYhg7uy1OcLxWtDAAABaklEQVRIie3W7Y6CMBAFUBxohwIK8qEIgu//lltou7TortNu9p83MRGSIzgzlEaHwETyU51jr5wrBWsODDzCgNcLrHjkHV5JOIE/hEnCOATGEiYhMHGgLBELgdi1lxlJ1IH8uvS17CjShtiriRCekM1mlm7oBaE2sCEMhA1vBg5+kCUG9n63GmGqXJYTqmNDlhcrrAkXdPsIx3FI+4TidpPDkHNOm7ndrP6U9TH/5VZxDewPsEvaS5t0CK8h9qXKSd4tq9T3EaC73rOl2EVp/X0bcqcddzMMU7YtbFuHHShsqH+lnJwlsUIqFIW7mLZAhPuYOfaGh5nR4fBotgLVQIWik+PE+11h38NCLUGmV+Ypfw9HdQU0j/lAhfr9AKafggizXHc81/VJibA4qvKzk4HE4nzgB/4jfLU8UiA26RqxQn0wfEOhTjTPMEIdZh9EOsw9QXzpPOdvMHgTGLztDN7oBm+twzfzYfkCChobmnKthiYAAAAASUVORK5CYII=';

const Index: NextPageWithLayout  = () => {
  return (
    <div className='flex flex-col py-10'>
      <div className='pb-10'>
        <div className='flex flex-col place-items-center text-6xl text-center text-rai-bone'>
          <Image src='/KeysBanner.webp' layout='fixed' alt='profile picture' width='300' height='300' className='rounded-full' />
          Michael Schneider
        </div>
      </div>
      <div className="flex flex-col w-full pb-10 divide-y space-y-5 divide-rai-bone">
        <div className='hidden' />
        <Card title='A little about myself'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non orci eu neque 
            egestas commodo at ac arcu. Vestibulum interdum lorem eget erat tempus, vel pretium 
            ligula pharetra. Vestibulum a consectetur orci. Vivamus justo tortor, mollis sit amet 
            hendrerit a, hendrerit eget lacus. Maecenas euismod nisl congue metus pretium tincidunt. 
            Nunc ex risus, luctus a tempus vehicula, fringilla in leo. Nulla at laoreet lacus. Donec 
            eu tortor elit. Nunc diam odio, sagittis sit amet pretium eu, pellentesque ut justo. 
            Sed quis risus in eros eleifend vehicula sed et neque. Nullam egestas tortor sit amet 
            nibh faucibus tincidunt.
        </Card>
        <Card title='A little about my work'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non orci eu neque 
          egestas commodo at ac arcu. Vestibulum interdum lorem eget erat tempus, vel pretium 
          ligula pharetra. Vestibulum a consectetur orci. Vivamus justo tortor, mollis sit amet 
          hendrerit a, hendrerit eget lacus. Maecenas euismod nisl congue metus pretium tincidunt. 
          Nunc ex risus, luctus a tempus vehicula, fringilla in leo. Nulla at laoreet lacus. Donec 
          eu tortor elit. Nunc diam odio, sagittis sit amet pretium eu, pellentesque ut justo. 
          Sed quis risus in eros eleifend vehicula sed et neque. Nullam egestas tortor sit amet 
          nibh faucibus tincidunt.
        </Card>
        <Card title='Want to reach out?'>
          <div className='flex m-auto'>
            <a href='https://www.linkedin.com/in/michael-schneider-145250141/'>
              <Image src={LINKEDIN_IMG} layout='fixed' height={50} width={50} className='m-auto'/>
            </a>
            <div className='flex flex-col px-5'>
              <p>mschneider2628@gmail.com</p>
              <p>(715) 432-9101</p>
            </div>
            </div>
        </Card>
      </div>
        <BackToTop />
    </div>
  )
}

export default Index

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}