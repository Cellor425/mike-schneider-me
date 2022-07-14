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
          Working with computers in some form has been a passion of mine from a very young age and has 
          allowed me to express my creativity in a variety of ways. Early on, I would use map editors
          to create fantastic worlds and was the first time I was exposed to scripts. In junior high school,
          I was able to take my first programming class that used Visual Basic. It wouldn't be till senior
          year of high school, when I was able to take another programming class, that I would learn that I
          a talent for programming. Being a quick learner, I was able to go ahead of the rest of the class and 
          complete a simple solitare game. Because of my aptitude the instructor asked a simple question that would
          set me on the path of becoming a developer: "Have you ever considered doing this as a career?". Through my years
          in post-secondary education my strong problem solving skills, creative out of the box thinking, desire for learning
          new technologies, and initiative for leadship has earned the praise of many of my instructors and peers.
        </Card>
        <Card title='A little about my work'>
          In any project that I work on, I strive for a high standard of quality from myself and from my team. I have always
          had an affinity towards leadership and, from my many years in competative games, retail work, and group projects in 
          school, I have developed the organization and communication skills needed to make my teams successful. When collaborating
          with a team, I always leave my ego at the door to create the best possible product. When designing interfaces for my
          projects I am a function above form kind of person. I create a products that have a great user experience and are
          easy to use before worrying about the aesthetic.
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