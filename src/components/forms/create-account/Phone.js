import React from 'react';

const Phone = () => (
  <form>
    <h2>Next your phone</h2>
    <p>Enter your phone below.</p>

    <fieldset className="form-group">
      <label htmlFor="username">Phone number</label>
      <div clasName="input-container">
        <div className="icon" />
        <div className="input-prefix">
          <input
            aria-describedby="phone"
            className="form-control form-control-lg prefix"
            id="phone"
            name="phone"
            required
            type="phone"
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

export default Phone;
