import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import NavBarWrapper from './style'
import { Link } from 'react-router-dom'

import menulist from '@/config/menu.config'
import { Close, Menu } from '@mui/icons-material'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  const [clicked, setClicked] = useState(false)
  return (
    <NavBarWrapper>
      <nav className="NavBarItem">
        <h1>CODERZZX</h1>
        <div className="MenuIcon" onClick={() => setClicked(!clicked)}>
          {clicked ? <Close /> : <Menu />}
        </div>
        <ul className="NavMenu">
          {menulist.map((item) => {
            return (
              <li key={item.id}>
                <Link className="NavLinks" to={item.url}>
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </NavBarWrapper>
  )
}

export default memo(NavBar)
