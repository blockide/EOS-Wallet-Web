import React, { Component } from 'react';
import { Users as UsersContainer } from '../containers';
import { Helmet } from 'react-helmet';

class Users extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Users</title>
        </Helmet>
        <div className="container-full">
          <div className="d-md-flex justify-content-between items-center">
            <div>
              <h2>Users</h2>
            </div>
            <div className="items-center mb-2 mb-md-0">
              <div className="module-search">
                <input
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <UsersContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
