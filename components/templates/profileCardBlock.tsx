import React, { FC, PropsWithChildren, ReactNode } from 'react'
import BackToTop from '../atoms/backToTop'

type Props = {
    children: ReactNode
}

const ProfileCardBlock: FC<PropsWithChildren<Props>> = ({children}) => {
  return (
    <>
        <div className='flex justify-center flex-wrap m-auto divide-y divide-rai-bone'>
            <div className="hidden"></div>
            {children}
        </div>
        <div className='hidden 2xl:flex 4xl:h-96 h-48'></div>
        <BackToTop />
    </>
  )
}

export default ProfileCardBlock