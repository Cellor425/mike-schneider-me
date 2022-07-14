import React, { FC, PropsWithChildren, ReactNode } from 'react'
import CardTitle from '../atoms/cardTitle'

type Props = {
    title: string,
    children?: ReactNode,
}

const Card: FC<PropsWithChildren<Props>> = ({title, children}) => {
  return (
    <div className='cursor-pointer hover:bg-rai-bone hover:text-rai-black m-auto w-full md:w-5/6 xl:w-4/5 rounded-xl transition ease-in-out delay-150 hover:scale-110 shadow-xl'>
        <CardTitle title={title} />
        <div className='flex lg:text-lg xl:text-xl 2xl:text-2xl text-normal pb-10 px-10 mx-auto 2xl:w-2/3'>
          {children}
        </div>
    </div>
  )
}

export default Card