import React, { FC } from 'react'

type Props ={
    title: string
}

const PageTitle: FC<Props> = ({title}) => {
  return (
    <h3 className={'text-6xl text-center pb-10'}>{title}</h3>
  )
}

export default PageTitle