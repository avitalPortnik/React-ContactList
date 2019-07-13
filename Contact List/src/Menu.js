import React, { Component } from 'react';
//import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer } from 'mdbreact';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';

class Menu extends Component {
    

    render(){
        return (
            <DropdownMenu position='left' >
            <MenuItem text='Home'  />
            <MenuItem text='Edit Profile'  />
            {/* <MenuItem text='Logout' location='/simple' /> */}
          </DropdownMenu>
        );
    }
}

export default Menu;