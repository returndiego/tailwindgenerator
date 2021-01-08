import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function fontWeightSelector() {
  const { state, dispatch } = useContext(GlobalContext)

  return (
    <section>
      <label className="block">
        Text Transform Selector ({state.textTransform})
        <input
          type="range"
          name="textTransform"
          defaultValue={0}
          step={1}
          min={0}
          max={3}
          onChange={(e) =>
            dispatch({
              type: 'TEXT_TRANSFORM',
              payload: breakpoints[+e.target.value],
            })
          }
          className="mt-1 w-full rounded-md dark:border-gray-600 dark:bg-gray-900 transition dark:hover:border-gray-400 focus:outline-none focus:border-blue-700 dark:focus:border-blue-400"
        />
      </label>
    </section>
  )
}

const breakpoints = ['normal-case', 'uppercase', 'lowercase', 'capitalize']
