import React from 'react'
import { Route } from 'react-router'

import App from './containers/App'
import TestContainer from './containers/TestContainer'

export default (
  <Route path='/' component={App}>
    <Route path='test' component={TestContainer} />
  </Route>
)
