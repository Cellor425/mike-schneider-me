import React, { FC, PropsWithChildren, ReactNode } from 'react'
import BackToTop from '../atoms/backToTop'

type Props = {
    children: ReactNode
}

const ProfileCardBlock: FC<PropsWithChildren<Props>> = ({children}) => {
  return (
    <>
        <div className='flex justify-center 2xl:flex-row md:flex-wrap flex-col m-auto divide-y divide-rai-bone 2xl:space-x-5 space-y-5'>
            <div className="hidden"></div>
            {children}
        </div>
        <BackToTop />
    </>
  )
}

export default ProfileCardBlock