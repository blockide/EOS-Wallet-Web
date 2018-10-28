import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Helmet } from 'react-helmet';
import {
  Header,
  Footer,
  Navbar } from '../components';
import {
  About,
  Faq,
  NoMatch,
  Permissions,
  Preferences,
  Profile,
  TransactionHistory,
  Transfer,
  Users } from '../routes';
import Modal from 'react-modal';
import Login from './Login';
import CreateAccount from './CreateAccount';

const Scene = ({
  children,
  className = 'main-content',
  location,
  computedMatch,
  ...props }) => (
  <div
    className={className}
    {...props}
  >
    {children}
  </div>
);

const modalRoutes = Object.freeze([
  '/create-account',
  '/login',
]);

class App extends Component {
  static defaultProps = {
    className: 'app container-fluid p-0 row no-gutters d-flex',
  }

  constructor(props, context) {
    super(props, context);

    this.previousLocation = {
      pathname: '/about',
      hash: '',
      search: '',
    };
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props;

    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { className, location } = this.props;
    const isModal = modalRoutes.some(r => new RegExp(r).test(location.pathname));

    location.state = { modal: isModal };

    return (
      <main className={className}>
        <Helmet titleTemplate="%s | EOS Wallet" defaultTitle="EOS Wallet" />

        <Header />
        <div className="flex-fill">
          <Navbar />
          <Scene>
            <Switch location={isModal ? this.previousLocation : location}>
              <Route
                component={Transfer}
                exact
                path="/(|transfer)/"
              />
              <Route
                component={TransactionHistory}
                path="/transactions"
              />
              <Route
                component={Permissions}
                path="/permissions"
              />
              <Route
                component={Profile}
                path="/user/:id"
              />
              <Route
                component={About}
                path="/about"
              />
              <Route
                component={Faq}
                path="/faq"
              />
              <Route
                component={Users}
                path="/users"
              />
              <Route
                component={Preferences}
                path="/preferences"
              />
              <Route
                component={NoMatch}
              />
            </Switch>
            <Footer />
          </Scene>
        </div>

        {isModal ?
          <Modal
            isOpen
            contentLabel={location.pathname}
          >
            <Route
              component={Login}
              path="/login"
            />
            <Route
              component={CreateAccount}
              path="/create-account"
            />
          </Modal> : null}
      </main>
    );
  }
}

export default App;
