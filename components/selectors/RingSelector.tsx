import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function BorderSelector() {
  const { state, dispatch } = useContext(GlobalContext)

  return (
    <section>
      <label className="block">
        Ring ({state.ring})
        <input
          type="range"
          name="border"
          defaultValue={1}
          step={1}
          min={0}
          max={4}
          onChange={(e) =>
            dispatch({ type: 'RING', payload: breakpoints[+e.target.value] })
          }
          className="mt-1 w-full rounded-md dark:border-gray-600 dark:bg-gray-900 transition dark:hover:border-gray-400 focus:outline-none focus:border-blue-700 dark:focus:border-blue-400"
        />
      </label>
    </section>
  )
}

const breakpoints = ['ring-1', 'ring-2', 'ring', 'ring-4', 'ring-8']
