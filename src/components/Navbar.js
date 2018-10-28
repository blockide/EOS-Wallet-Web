import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from './forms/Login';
import {
  Balance,
  List,
} from './';

const NavbarLink = ({
  className = 'col-link p3',
  text,
  ...props }) => (
  <NavLink
    className={className}
    {...props}
  >
    {text}
  </NavLink>
);

const UserLink = ({
  className = 'col-link p3',
  iconClass,
  text,
  ...props }) => (
  <NavLink
    className={className}
    {...props}
  >
    <span className={iconClass} />
    {text}
  </NavLink>
);

const activeClassName = 'active';

class Navbar extends Component {
 static defaultProps = {
   className: 'left-nav',
   styles: {
     list: 'navbar-links',
     userActions: '-is-logged-in',
     userActionsList: '-links',
   },
   isLoggedIn: true,
   userActions: [
     { to: '/transfer', text: 'Transfer', iconClass: 'icon-eos_icons_transfer', activeClassName },
     { to: '/transactions', text: 'Transaction History', iconClass: 'icon-eos_icons_history', activeClassName },
     { to: '/permissions', text: 'Permissions', iconClass: 'icon-eos_icons_permissions', activeClassName },
   ],
   links: [
     { to: '/users', text: 'Users', activeClassName },
     { to: '/about', text: 'About', activeClassName },
     { to: '/faq', text: 'FAQ', activeClassName },
   ],
 }

 render() {
   const { className, links, styles, userActions, isLoggedIn } = this.props;

   return (
     <nav className={className}>
       <div className={styles.userActions}>
         {isLoggedIn ? <Balance /> : <LoginForm />}
         {isLoggedIn &&
           <List
             className={styles.userActionLinks}
             data={userActions}
             renderItem={UserLink}
           />
         }
       </div>

       <List
         className={styles.list}
         data={links}
         renderItem={NavbarLink}
       />
     </nav>
   );
 }
}

export default Navbar;
