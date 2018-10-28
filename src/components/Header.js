import React, { Component } from 'react';
import { User } from '../containers';
import { Link } from 'react-router-dom';

class Header extends Component {
  static defaultProps = {
    className: 'header row no-gutters items-center p-0 p-md-4',
  }

  render() {
    const { className, styles } = this.props;

    return (
      <header className={className}>
        <div className="mobile-nav mr-2 hidden-md-up">
          <span className="icon-eos_icons_menu" />
        </div>
        <Link to="/">
          <img
            alt=""
            className="logo"
            src="images/logo.svg"
          />
        </Link>

        <User />
      </header>
    );
  }
}

export default Header;
