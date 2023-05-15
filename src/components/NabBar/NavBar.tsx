import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import NavBarWrapper from './style'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'

import menulist from '@/config/menu.config'
import { Close, Menu } from '@mui/icons-material'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  const [clicked, setClicked] = useState(false)
  const { pathname } = useLocation()
  return (
    <NavBarWrapper>
      <nav className="NavBarItem">
        <h1>CODERZZX</h1>
        <div className="MenuIcon" onClick={() => setClicked(!clicked)}>
          {clicked ? <Close /> : <Menu />}
        </div>
        <ul className={clicked ? 'NavMenu active' : 'NavMenu'}>
          {menulist.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={item.url}
                  className={classnames('links', {
                    setLinks: pathname === item.url ? true : false
                  })}
                >
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
