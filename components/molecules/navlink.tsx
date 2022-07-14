import Link from 'next/link'
import React, {FC, PropsWithChildren} from 'react'

type Props = {
  name: string,
  href: string,
  icon?: string,
  classes?: string
}

const NavLink: FC<PropsWithChildren<Props>> = ({name, href, icon, classes}) => {
  return (
    <Link href={href}>
        <div className= {classes + 
          ' flex flex-row text-lg md:text-xl xl:text-2xl w-full rounded-md hover:-translate-y-2 ' + 
          'p-3 font-bold hover:shadow-xl hover:shadow-rai-blue bg-rai-green'}>
            <span className="material-symbols-outlined pr-2">{icon}</span>
            <h3>{name}</h3>
        </div>
    </Link>
  )
}

export default NavLink