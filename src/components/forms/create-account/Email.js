import React from 'react';

const Email = () => (
  <form>
    <h2>Next your email</h2>
    <p>Enter your email below.</p>

    <fieldset className="form-group">
      <label htmlFor="username">Email</label>
      <div clasName="input-container">
        <div className="icon" />
        <div className="input-prefix">
          <input
            aria-describedby="username"
            className="form-control form-control-lg prefix"
            id="username"
            name="username"
            required
            type="email"
          />
        </div>
      </div>
    </fieldset>
    <div className="modal-cta">
      <div className="row col-12 no-gutters p-0">
        <div className="col-sm-auto col-12 pl-0 pr-sm-2 pr-0 mb-sm-0 mb-3">
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Continue
          </button>
        </div>
      </div>
    </div>
  </form>
);

export default Email;

