import React, { FC, PropsWithChildren, ReactNode } from 'react'
import Image from 'next/image'
import CardTitle from '../atoms/cardTitle'

type Props = {
    title: string,
    children?: ReactNode,
    imgsrc: string
}

const CardWithImage: FC<PropsWithChildren<Props>> = ({title, children, imgsrc}) => {
  return (
    <div className='cursor-pointer hover:bg-rai-bone hover:text-rai-black m-auto max-w-md w-full rounded-xl transition ease-in-out delay-150 hover:scale-105 hover:translate-y-1 shadow-xl'>
        <div className='flex m-auto pt-5 justify-center'>
            <Image src={imgsrc} layout='fixed' height={200} width={200} className='rounded-2xl'/>
        </div>
        <CardTitle title={title} />
        <div className='flex text-normal text-lg pb-10 px-5 mx-auto'>
          {children}
        </div>
    </div>
  )
}

export default CardWithImage