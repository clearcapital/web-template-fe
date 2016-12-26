import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import DevTools from './components/DevTools'
import routes from './routes'

const ApplicationNode = ({store, history}) => {
  return (
    <Provider store={store}>
      <div>
        {process.env.NODE_ENV !== 'production' && <DevTools /> }
        <Router history={history} routes={routes} />
      </div>
    </Provider>
  )
}

ApplicationNode.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.any
}

export default ApplicationNode
