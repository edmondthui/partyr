import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import Splash from './splash/splash';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Livechat from './livechat/livechat_container';
import Dashboard from './party/dashboard/dashboard_container';
import CreatePartyForm from './party/form/create_form_container';
import PartyShow from './party/show/party_show_container'
import UpcomingParties from './party/upcoming_parties/upcoming_parties_container'
import HostedParties from './party/hosted_parties/hosted_parties_container'


const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/livechattest" component={Livechat} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <ProtectedRoute exact path="/new_party" component={CreatePartyForm} />
      <ProtectedRoute exact path="/party/:partyId" component={PartyShow} />
      <ProtectedRoute exact path="/upcoming-parties" component={UpcomingParties} />
      <ProtectedRoute exact path="/hosted-parties" component={HostedParties} />
    </Switch>
  </div>
);

export default App;