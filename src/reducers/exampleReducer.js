import { SYNC_CLICK, ASYNC_CLICK } from '../constants/actionTypes'

const initialState = {
  message: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SYNC_CLICK:
      return Object.assign({}, state, {
        message: action.payload
      })
    case ASYNC_CLICK:
      return Object.assign({}, state, {
        message: action.payload
      })
    default:
      return state
  }
}
