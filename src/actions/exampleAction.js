import {SYNC_CLICK, ASYNC_CLICK} from '../constants/actionTypes'
import Api from '../services/Api'

const api = new Api('https://api.github.com')

export function exampleActionSync () {
  return {
    type: SYNC_CLICK,
    payload: 'test sync click'
  }
}

export function exampleActionAsync () {
  return async (dispatch) => {
    const results = await api.get('orgs/clearcapital/repos')

    dispatch({
      type: ASYNC_CLICK,
      payload: `GH: Clear Capital has ${results.length} repos`
    })
  }
}
