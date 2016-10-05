import * as types from '../constants/actionTypes'
import * as actions from './exampleAction'

describe('exampleActions', () => {
  describe('exampleActionSync', () => {
    it('should create a synchronous action', () => {
      const expectedAction = {
        type: types.SYNC_CLICK,
        payload: 'test sync click'
      }

      expect(actions.exampleActionSync()).toEqual(expectedAction)
    })
  })
})
