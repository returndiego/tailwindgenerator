import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function PaddingYSelector() {
  const { state, dispatch } = useContext(GlobalContext)

  return (
    <section>
      <label className="block">
        Padding Y ({state.paddingY})
        <input
          type="range"
          name="paddingY"
          defaultValue={1}
          step={1}
          min={0}
          max={8}
          onChange={(e) =>
            dispatch({ type: 'PADDING_Y', payload: `py-${e.target.value}` })
          }
          className="mt-1 w-full rounded-md dark:border-gray-600 dark:bg-gray-900 transition dark:hover:border-gray-400 focus:outline-none focus:border-blue-700 dark:focus:border-blue-400"
        />
      </label>
    </section>
  )
}
