import React, { Component } from 'react';
// import validation
// import mutation

class PreferencesForm extends Component {
  render() {
    return (
      <form>
        <fieldset className="form-group">
          <label htmlFor="pictureURL">Picture URL</label>
          <input
            aria-describedby="pictureURL"
            className="form-control form-control-lg"
            name="pictureURL"
            required
            type="text"
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="displayName">Display Name</label>
          <input
            aria-describedby="displayName"
            className="form-control form-control-lg"
            name="displayName"
            required
            type="text"
          />
        </fieldset>
      
        <fieldset className="form-group">
          <label htmlFor="about">About</label>
          <input
            aria-describedby="about"
            className="form-control form-control-lg"
            name="about"
            required
            type="text"
          />
        </fieldset>
      
        <fieldset className="form-group">
          <label htmlFor="location">Location</label>
          <input
            aria-describedby="location"
            className="form-control form-control-lg"
            name="location"
            required
            type="text"
          />
        </fieldset>
      
        <fieldset className="form-group">
          <label htmlFor="website">Website</label>
          <input
            aria-describedby="website"
            className="form-control form-control-lg"
            name="website"
            required
            type="text"
          />
        </fieldset>

        <button
          className="btn btn-primary btn-lg"
          type="submit"
        >Update Information
        </button>
      </form>
    );
  }
}

export default PreferencesForm;
