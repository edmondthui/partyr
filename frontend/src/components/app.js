import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import Splash from './splash/splash';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Livechat from './livechat/livechat_container';
import Parties from './party/index_container';
import CreatePartyForm from './party/form/create_form_container';


const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/livechattest" component={Livechat} />
      <ProtectedRoute exact path="/parties" component={Parties} />
      <ProtectedRoute exact path="/new_party" component={CreatePartyForm} />
    </Switch>
  </div>
);

export default App;