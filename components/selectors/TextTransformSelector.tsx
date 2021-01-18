import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function fontWeightSelector() {
  const { state, dispatch } = useContext(GlobalContext)

  return (
    <section>
      <label>
        <p>Text Transform ({state.textTransform})</p>
      </label>
      <div className="flex flex-wrap gap-3 mt-1">
        {breakpoints.map((transform, idx) => (
          <button
            key={idx}
            className={`${transform} select-none focus:outline-none transition border-2 font-medium px-3 py-1 rounded-md border-blue-600 dark:border-blue-300 text-blue-900 dark:text-blue-50 hover:bg-blue-100 dark:hover:bg-blue-800 ${
              state.textTransform === transform
                ? 'ring ring-blue-500'
                : 'focus:ring focus:ring-blue-500 focus:bg-blue-200 dark:focus:bg-blue-900'
            }`}
            onClick={() =>
              dispatch({ type: 'TEXT_TRANSFORM', payload: transform })
            }
          >
            {transform}
          </button>
        ))}
      </div>
    </section>
  )
}

const breakpoints = ['normal-case', 'uppercase', 'lowercase', 'capitalize']
