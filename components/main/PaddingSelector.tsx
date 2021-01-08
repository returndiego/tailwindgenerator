import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function PaddingSelector() {
  const { state, dispatch } = useContext(GlobalContext)

  return (
    <section>
      <label className="block">
        Padding Selector ({state.padding}) (SVG Only)
        <input
          type="range"
          name="padding"
          defaultValue={1}
          step={1}
          min={0}
          max={6}
          onChange={(e) =>
            dispatch({ type: 'PADDING', payload: `p-${e.target.value}` })
          }
          className="mt-1 w-full rounded-md dark:border-gray-600 dark:bg-gray-900 transition dark:hover:border-gray-400 focus:outline-none focus:border-blue-700 dark:focus:border-blue-400"
        />
      </label>
    </section>
  )
}
