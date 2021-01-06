// The 'state' parameter for the useReducer function
// is the current state. The action is a function that gets
// called to update the state.
import { State } from '../lib/data-types'
export default function AppReducer(state: State, action: any) {
  switch (action.type) {
    case 'COLOR':
      return { ...state, color: action.payload }
    case 'ROUNDED':
      return { ...state, rounded: action.payload }
    case 'PADDING_X':
      return { ...state, paddingX: action.payload }
    case 'PADDING':
      return { ...state, padding: action.payload }
    case 'PADDING_Y':
      return { ...state, paddingY: action.payload }
    case 'FONT_SIZE':
      return { ...state, fontSize: action.payload }
    case 'FONT_WEIGHT':
      return { ...state, fontWeight: action.payload }
    default:
      return state
  }
}
