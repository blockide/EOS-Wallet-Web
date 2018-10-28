import React, { Component } from 'react';
import { PreferencesForm } from '../components';
import { Helmet } from 'react-helmet';

class Preferences extends Component {
  render() {
    return (
      <div className="profile">
        <Helmet>
          <title>Preferences</title>
        </Helmet>
        <div className="row">
          <div className="col-12">
            <h2>Preferences</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <PreferencesForm />
          </div>
          <div className="col-6">
            <h5>Profile Preview</h5>
            <div className="module">
              <div className="d-flex flex-row items-center">
                <img alt="" className="user-thumbnail" src="images/male_2.jpg" />
                <div className="profile-meta">
                  <div className="username">
                    Username
                  </div>
                  <div className="location">
                    location
                  </div>
                  <div className="website">
                    website
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a elit pulvinar, varius mauris non, condimentum tellus. Maecenas vitae ultrices diam. Lorem ipsum dolor sit amet, consectetur elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preferences;
