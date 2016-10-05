import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'

export default (
  <Route path='/' component={App}>
    {/* Examples
      <IndexRoute component={'/SomeComponent'} />
      <Route path="other-component" component={SomeOtherComponent} />
    */}
  </Route>
)
