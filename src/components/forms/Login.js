import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import validation
// import mutation

class Login extends Component {
  render() {
    const { username, handleClose, modal } = this.props;

    return (
      <form>
        <p>This operation requires your Active Key or Master password.</p>
        <fieldset className="form-group">
          <label htmlFor="username">Username</label>
          <div clasName="input-container">
            <div className="icon" />
            <div className="input-prefix">
              <input
                aria-describedby="username"
                className="form-control form-control-lg prefix"
                id="username"
                name="username"
                required
                type="text"
                value={username}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="username">Password</label>
          <input
            aria-describedby="password"
            className="form-control form-control-lg"
            id="password"
            name="password"
            required
            type="text"
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="keepLoggedIn">Keep me logged in</label>
          <input name="keepLoggedIn" type="checkbox" className="ml-2" />
        </fieldset>

        <div className={`button-group ${modal && 'modal-cta'}`}>
        <div className="row col-12 no-gutters p-0">
          <div className="col-sm-auto col-12 pl-0 pr-sm-2 pr-0 mb-3">
            <button
              className="btn btn-primary btn-lg btn-block"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="col-sm-auto col-12 p2-2 pl-sm-2 pl-0 mb-3">
            {modal &&
              <button
                className="btn btn-secondary btn-lg btn-block"
                onClick={handleClose}
              >
                Cancel
              </button>}
            </div>
            <div className="col-12 text-center text-sm-left">
              <Link to="/create-account" className="text-link">Don't have an account?</Link>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
