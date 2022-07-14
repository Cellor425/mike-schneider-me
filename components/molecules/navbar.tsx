import React from 'react'
import NavLink from './navlink'

type Props = {
  classes?: string
}

export default function Navbar(props: Props) {
  return (
    <nav className={props.classes + ' p-5 w-full'}>
      <NavLink name='Home' href='/' icon='home'/>
      <NavLink name='Resume' href='/resume' icon='description' />
      <NavLink name='Portfolio' href='/portfolio' icon='folder_open' />
    </nav>
  )
}
