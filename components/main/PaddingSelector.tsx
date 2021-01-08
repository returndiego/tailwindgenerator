import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function PaddingSelector() {
  const { state, dispatch } = useContext(GlobalContext)
  const { padding } = state

  return (
    <section>
      <header>
        <h1 className="text-lg font-bold">Padding Selector (SVG Only)</h1>
      </header>
      <div className="grid gap-3 grid-cols-2">
        {breakpoints.map((breakpoint) => (
          <button
            key={breakpoint}
            onClick={() => dispatch({ type: 'PADDING', payload: breakpoint })}
            className={`font-medium px-3 py-1 rounded-md transition focus:outline-none bg-warmGray-200 text-warmGray-900  hover:bg-warmGray-100 dark:bg-warmGray-900 dark:text-warmGray-50 dark:hover:bg-warmGray-800 ${
              padding === breakpoint
                ? 'ring ring-warmGray-500 bg-warmGray-200 dark:bg-warmGray-900'
                : 'focus:ring focus:ring-warmGray-500 focus:bg-warmGray-200 dark:focus:bg-warmGray-900'
            }`}
          >
            {breakpoint}
          </button>
        ))}
      </div>
    </section>
  )
}

const breakpoints = ['p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'p-6']
