import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function PaddingYSelector() {
  const { state, dispatch } = useContext(GlobalContext)
  const { paddingY } = state

  return (
    <section>
      <header>
        <h1 className="text-lg font-bold">Padding Y Selector (Text Only)</h1>
      </header>
      <div className="grid gap-3 grid-cols-2">
        {breakpoints.map((breakpoint) => (
          <button
            key={breakpoint}
            onClick={() => dispatch({ type: 'PADDING_Y', payload: breakpoint })}
            className={`font-medium px-3 py-1 rounded-md transition focus:outline-none bg-warmGray-200 text-warmGray-900  hover:bg-warmGray-100 dark:bg-warmGray-900 dark:text-warmGray-50 dark:hover:bg-warmGray-800 ${
              paddingY === breakpoint
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

const breakpoints = [
  'py-px',
  'py-0',
  'py-0.5',
  'py-1',
  'py-1.5',
  'py-2',
  'py-2.5',
  'py-3',
  'py-3.5',
  'py-4',
  'py-5',
  'py-6',
  'py-7',
  'py-8',
]
