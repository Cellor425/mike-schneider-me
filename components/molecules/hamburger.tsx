import React, { FC, useState } from 'react'
import NavLink from './navlink';

type Props = {
    classes?: string
}

const Hamburger: FC<Props> = ({classes}) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    return (
    <>
        <nav className={classes + ' p-5 w-full'}>
            <div onClick={() => setIsNavOpen((prev) => !prev)}>
                <span className="material-symbols-outlined scale-150">
                    menu
                </span>
            </div>

            <div className={(isNavOpen ? "showMenuNav" : "hideMenuNav")}>
                <div className="flex absolute top-0 left-0 px-4 py-4 ml-5 mt-5 hover:bg-rai-blue bg-rai-green rounded hover:cursor-pointer"
                     onClick={() => setIsNavOpen(false)}>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </div>
                <ul className="flex flex-col w-full bg-rai-bone space-y-3 pt-20 pb-5 px-5 rounded-bl-xl rounded-tl-xl mt-2 ring-2 ring-rai-green">
                    <li className="border-b border-rai-bone">
                        <NavLink name='Home' href='/' icon='home' />
                    </li>
                    <li className="border-b border-rai-bone">
                        <NavLink name='Resume' href='/resume' icon='description'/>
                    </li>
                    <li className="border-b border-rai-bone">
                        <NavLink name='Portfolio' href='/portfolio' icon='folder_open' />
                    </li>
                </ul>
            </div>
        </nav>

        <style>{`
            .hideMenuNav {
              display: none;
            }
            .showMenuNav {
              display: block;
              position: absolute;
              width: 100%;
              height: 50vh;
              top: 0;
              left: 0;
              background: rai-bone;
              z-index: 10;
              flex-direction: column;
              justify-content: space-evenly;
              align-items: center;
            }
        `}</style>
    </>
    )
}

export default Hamburger