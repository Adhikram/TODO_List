import React, { Fragment, useState,Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
// import { connect } from 'react-redux';
// import RegisterModal from './auth/RegisterModal';
// import LoginModal from './auth/LoginModal';
// import Logout from './auth/Logout';
// import { IAppNavbar, IAuthReduxProps } from '../types/interfaces';


class AppNavbar extends Component{
  state={
    isOpen: false
  }
  toggle=()=>{
    this.setState({
      isOpen:!this.state.isOpen
    });
  }
  render(){
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">TODO-List</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavLink href ="">Github</NavLink>
                {/* {auth && auth.isAuthenticated ? authLinks : guestLinks} */}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }

}


// const AppNavbar = ({ auth }: IAppNavbar) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => setIsOpen(!isOpen);

//   const authLinks = (
//     <Fragment>
//       <NavItem>
//         <span className="navbar-text mr-3">
//           <strong>
//             {auth && auth.user ? `Welcome ${auth.user.name}` : ''}
//           </strong>
//         </span>
//       </NavItem>
//       <NavItem>
//         <Logout />
//       </NavItem>
//     </Fragment>
//   );

//   const guestLinks = (
//     <Fragment>
//       <NavItem>
//         <RegisterModal />
//       </NavItem>
//       <NavItem>
//         <LoginModal />
//       </NavItem>
//     </Fragment>
//   );

  
// };

// const mapStateToProps = (state: IAuthReduxProps) => ({
//   auth: state.auth
// });

export default AppNavbar;
