import React from 'react';
import { LoginForm } from '../components';

const Login = () => (
  <div className="login">
    <div className="login-header modal-header">
      <h2>Login to EOS</h2>
      <button className="js-modal-close">x</button>
    </div>
    <div className="modal-body">
      <LoginForm
        modal
      />
    </div>
  </div>
);

export default Login;
