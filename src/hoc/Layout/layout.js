import React, { Component } from 'react';
import layoutStyle from './layout.module.scss';
import Header from '../../components/Header/Header';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className={layoutStyle.navHeight}>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main className={layoutStyle.mainHeight}>
          
        </main>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default Layout;
