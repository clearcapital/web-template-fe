'use strict'

import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import ApplicationNode from './ApplicationNode'
import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'
import { configureStore } from './store'

const preloadState = {}
const store = configureStore({ ...preloadState })
const browserHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const history = syncHistoryWithStore(browserHistory, store)

const domNode = document.createElement('div')
domNode.id = 'application'
document.body.appendChild(domNode)

render(
  <AppContainer>
    <ApplicationNode store={store} history={history} />
  </AppContainer>,
  domNode
)

// For hot reloading of react components
if (process.env.NODE_ENV !== 'production' && module && module.hot) {
  module.hot.decline('./routes.js')
  module.hot.accept('./ApplicationNode', () => {
    const NextApp = require('./ApplicationNode').default
    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      domNode
    )
  })
}
