import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function BorderSelector() {
  const { state, dispatch } = useContext(GlobalContext)

  return (
    <section>
      <label className="block">
        Border Selector ({state.border})
        <input
          type="range"
          name="border"
          defaultValue={2}
          step={1}
          min={0}
          max={3}
          onChange={(e) =>
            dispatch({ type: 'BORDER', payload: breakpoints[+e.target.value] })
          }
          className="mt-1 w-full rounded-md dark:border-gray-600 dark:bg-gray-900 transition dark:hover:border-gray-400 focus:outline-none focus:border-blue-700 dark:focus:border-blue-400"
        />
      </label>
    </section>
  )
}

const breakpoints = ['border-0', 'border', 'border-2', 'border-4']
