import React from 'react'
import {Provider} from 'react-redux'
import {mount} from 'enzyme'
import App from './App'
import ExampleBox from '../../components/ExampleBox'

const storeFake = (state) => {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {
      return {...state}
    }
  }
}

describe('<App />', () => {
  let app

  beforeEach(() => {
    const store = storeFake({})
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )

    app = wrapper.find(App)
  })

  it('true should be true', () => {
    expect(true).toBe(true)
  })

  it('should render', () => {
    expect(app.length).toBeTruthy()
  })

  it('should render an <ExampleBox />', () => {
    expect(app.find(ExampleBox)).toBeTruthy()
  })

  it('should have the header', () => {
    expect(app.contains(<h1>App</h1>)).toBe(true)
  })
})
