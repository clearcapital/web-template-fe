'use strict'

import debug from 'debug'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'

import App from './containers/App'
import reducers from './reducers'

const log = debug('application:bootstrap')

log('creating state container')
const middleware = [thunk, multi, ReduxPromise]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
const store = createStoreWithMiddleware(reducers)
const history = syncHistoryWithStore(browserHistory, store)

log('creating application node')
const applicationNode = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App} />
    </Router>
  </Provider>
)

log('creating dom node')
const domNode = document.createElement('div')
domNode.id = 'application'
document.body.appendChild(domNode)

log('rendering application to DOM')
render(applicationNode, domNode, () => {
  log('finished mounting application')
})
