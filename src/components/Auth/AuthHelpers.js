import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper'

import Login from './Login'

const locationHelper = locationHelperBuilder({})

export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: state => (state.token !== null),
  AuthenticatingComponent: Login,
  wrapperDisplayName: 'UserIsAuthenticated',
})

export const userIsNotAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) => (
    locationHelper.getRedirectQueryParam(ownProps) || '/'
  ),
  allowRedirectBack: false,
  // Want to redirect the user when they are done loading and authenticated
  authenticatedSelector: state => (state.token === null),
  wrapperDisplayName: 'UserIsNotAuthenticated',
})

export const visibleOnlyAuthenticated = connectedAuthWrapper({
  authenticatedSelector: state => (state.token !== null),
  wrapperDisplayName: 'VisibleOnlyAuthenticated',
})

export default {
  userIsAuthenticated,
  userIsNotAuthenticated,
  visibleOnlyAuthenticated,
}
