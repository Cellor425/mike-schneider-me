import React from 'react'

type Props = {
    title:string
}

function CardTitle(props: Props) {
  return (
    <div className='text-center underline underline-offset-4 uppercase text-2xl m-5'>{props.title}</div>
  )
}

export default CardTitle