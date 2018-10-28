import React, { Component } from 'react';
import { ResetPasswordForm } from '../components';
import { Helmet } from 'react-helmet';

class Permissions extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Permissions</title>
        </Helmet>
        <h2>Permissions</h2>
        <div className="section">
          <h4>Keystore</h4>

          <div className="keystore">
            <h6>Active</h6>
            <div className="list-item d-flex flex-row justify-content-between items-center">
              <div>
                <img
                  alt=""
                  src=""
                />
                <span>IEfja89uewaejwfawe0fjaewf98hwf8ejfhefwfebfaiuewfeuifh</span>
              </div>
              <button className="btn btn-primary btn-xsm">Show Private Key</button>
            </div>

            <p>The active key is used to make transfers...</p>
          </div>

          <div className="keystore">
            <h6>Owner</h6>
            <div className="list-item d-flex flex-row justify-content-between items-center">
              <div>
                <img
                  alt=""
                  src=""
                />
                <span>IEfja89uewaejwfawe0fjaewf98hwf8ejfhefwfebfaiuewfeuifh</span>
              </div>
              <button className="btn btn-primary btn-xsm">Show Private Key</button>
            </div>

            <p>The owner key is the master key...<br />The private key or password for the owner..</p>
          </div>
        </div>
      
        <div className="section">
          <h3>Reset Password</h3>
          <div className="row">
            <div className="col-12 col-md-6">
              <ResetPasswordForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Permissions;
