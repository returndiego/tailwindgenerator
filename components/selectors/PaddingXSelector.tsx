import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function PaddingXSelector() {
  const { state, dispatch } = useContext(GlobalContext)

  return (
    <section>
      <label className="block">
        Padding X ({state.paddingX})
        <input
          type="range"
          name="paddingX"
          defaultValue={3}
          step={1}
          min={0}
          max={10}
          onChange={(e) =>
            dispatch({ type: 'PADDING_X', payload: `px-${e.target.value}` })
          }
          className="mt-1 w-full rounded-md dark:border-gray-600 dark:bg-gray-900 transition dark:hover:border-gray-400 focus:outline-none focus:border-blue-700 dark:focus:border-blue-400"
        />
      </label>
    </section>
  )
}
