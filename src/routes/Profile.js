import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  User,
  Transactions,
} from '../containers';

class Profile extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Profile</title> {/* TODO: Show name of user here instead */}
        </Helmet>
        <User />
        <Transactions />
      </div>
    );
  }
}

export default Profile;
