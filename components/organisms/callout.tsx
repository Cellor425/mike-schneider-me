import React, { FC, PropsWithChildren, ReactNode } from 'react'
import Image from 'next/image'
import CardTitle from '../atoms/cardTitle'

type Props = {
    title: string,
    imgsrc: string,
    date: string,
    children: ReactNode
}

const Callout: FC<PropsWithChildren<Props>> = ({title, imgsrc, date, children}) => {  
  return (
    <div className='flex flex-col w-full hover:grayscale-0 hover:scale-110 transition ease-in-out delay-150 grayscale bg-gradient-to-br from-rai-md-blue via-rai-bone to-rai-green pb-10 text-rai-black rounded-3xl bg-blend-'>
        <CardTitle title={title} />
        <span className='text-center'>{date}</span>
        <div className='flex justify-center w-full mx-auto xl:space-x-20 mt-10'>
            <div className='xl:flex hidden'>
                <Image src={imgsrc} layout='fixed' height={200} width={200} className='rounded-full'/>
            </div>
            <div className='flex xl:mx-0 mx-5'>
                {/** Callout Content here */}
                {children}
            </div>
        </div>
    </div>
  )
}

export default Callout