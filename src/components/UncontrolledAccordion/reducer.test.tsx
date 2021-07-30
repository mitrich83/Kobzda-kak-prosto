import {reducer, StateType, TOGGLE_COLLAPSED} from './Reducer';

test('collapsed should true', () => {
//data
    const state: StateType = {
        collapsed: false
    }

    //action
 const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(true)
})

test('collapsed should false', () => {
//data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(false)
})

test('fake type for action', () => {
//data
    const state: StateType = {
        collapsed: true
    }

    //action


    //expectation
  expect(()=> {reducer(state, {type:'FAKETYPE'})
  }).toThrowError() //wait error
})