import React from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css';
import FontAwesome from 'react-fontawesome';

const sideDrawer = (props) => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  const items = [
    {      
      icon: 'home',
      text: 'Home',
      link: '/'

    },
    {
      icon: 'newspaper',
      text: 'News',
      link: '/news'
    },
    {
      icon: 'play',
      text: 'Videos',
      link: '/videos'
    },
    {
      icon: 'sign-in-alt',
      text: 'Sign In',
      link: '/sign-in'
    },
    {
      icon: 'sign-out-alt',
      text: 'Sign Out',
      link: '/sign-out'
    }
  ]


  const showItems = () => {
    return items.map( (item, i) => {
      return(
        <div key={i}>
          <Link to={item.link}>
            <FontAwesome name={item.icon}/> 
            {item.text}
          </Link>
        </div>
      )
    })
  }
  
  return (
    <nav className={drawerClasses}>
        {showItems()}
    </nav>
  );
};

export default sideDrawer;
