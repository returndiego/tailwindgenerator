import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function RoundedSelector() {
  const { state, dispatch } = useContext(GlobalContext)
  return (
    <section>
      <label className="block">
        Rounded Selector ({state.rounded})
        <input
          type="range"
          name="rounded"
          defaultValue={1}
          step={1}
          min={0}
          max={6}
          onChange={(e) =>
            dispatch({ type: 'ROUNDED', payload: breakpoints[+e.target.value] })
          }
          className="mt-1 w-full rounded-md dark:border-gray-600 dark:bg-gray-900 transition dark:hover:border-gray-400 focus:outline-none focus:border-blue-700 dark:focus:border-blue-400"
        />
      </label>
    </section>
  )
}

const breakpoints = [
  'rounded-none',
  'rounded-sm',
  'rounded',
  'rounded-md',
  'rounded-lg',
  'rounded-xl',
  'rounded-full',
]
