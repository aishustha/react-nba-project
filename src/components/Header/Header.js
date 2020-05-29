import React from 'react';
import headerStyle from './header.module.scss';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import {Link} from 'react-router-dom';

const header = (props) => {

  const logo = () => (
    <Link to="/" className={headerStyle.header__logo}>
      <img alt="nba logo" src="/images/nba_logo.png"></img>
    </Link>
  )

  const items = [
    {
      type: headerStyle.header_navigation_items,
      text: 'Home',
      link: '/'
    },
    {
      type: headerStyle.header_navigation_items,
      text: 'News',
      link: '/news'
    },
    {
      type: headerStyle.header_navigation_items,
      text: 'Videos',
      link: '/videos'
    },
    {
      type: headerStyle.header_navigation_items,
      text: 'Sign In',
      link: '/sign-in'
    },
    {
      type: headerStyle.header_navigation_items,
      text: 'Sign Out',
      link: '/sign-out'
    }

  ]

  const showItems = () => {
    return items.map((item, i) => {
      return(
        <div key={i} className={item.type}>
              <Link to={item.link}>{item.text}</Link>
          </div>
      )
    })
  }

  const navBars = () => (
    <div className={headerStyle.header__toggle_button}>
        <DrawerToggleButton click={props.drawerClickHandler} />
    </div>
  )

  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.header__navigation}>
          {navBars()}

          {logo()}
          <div className={headerStyle.spacer}/>

          {showItems()}

      </nav>
    </header>
  )
}

export default header;
