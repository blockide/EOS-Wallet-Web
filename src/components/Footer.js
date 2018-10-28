import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
 static defaultProps = {
   className: 'Nav row no-gutters items-center justify-content-center',
 }

 render() {
   const { className } = this.props;

   return (
     <footer className={className}>
       <div className="col-md-6 text-center text-md-left">
         <small>Copyright 2017 | All Rights Reserved</small>
       </div>
       <div className="col-md-6 text-center text-md-right">
         <Link to="/privacy">Privacy Policy</Link>
         <span> | </span>
         <Link to="/terms">Terms of Service</Link>
       </div>
     </footer>
   );
 }
}

export default Footer;
