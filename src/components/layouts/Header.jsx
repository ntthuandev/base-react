import React from 'react'
import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../../constants/nav-links'

const Header = () => {
  return (
    <div>
      {NAV_LINKS.map((item, index) => (
        <Link to={item.path} key={index}>{item.label}</Link>
      ))}
    </div>
  )
}

export default Header