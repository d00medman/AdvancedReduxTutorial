import { FETCH_WEATHER } from '../actions/index'

// reducers are always functions
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // never mutate state; always return a completely new instance of state,
      // This state.concat method will do the trick, as it takes the existing state and concatenates the new data on to it
      // return state.concat([action.payload.data])
      // This is a piece of es6 magic which essentially does the same thing
      return [ action.payload.data, ... state ]
  }
  return state
}

// Never manipulate state in redux, we always want new ones
