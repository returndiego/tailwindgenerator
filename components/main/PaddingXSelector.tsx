import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function PaddingXSelector() {
  const { state, dispatch } = useContext(GlobalContext)
  const { paddingX } = state

  return (
    <section>
      <header>
        <h1 className="text-lg font-bold">Padding X Selector (Text Only)</h1>
      </header>
      <div className="grid gap-3 grid-cols-2">
        {breakpoints.map((breakpoint) => (
          <button
            key={breakpoint}
            onClick={() => dispatch({ type: 'PADDING_X', payload: breakpoint })}
            className={`font-medium px-3 py-1 rounded-md transition focus:outline-none bg-warmGray-200 text-warmGray-900  hover:bg-warmGray-100 dark:bg-warmGray-900 dark:text-warmGray-50 dark:hover:bg-warmGray-800 ${
              paddingX === breakpoint
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
  'px-0',
  'px-1',
  'px-2',
  'px-3',
  'px-4',
  'px-5',
  'px-6',
  'px-7',
  'px-8',
  'px-9',
  'px-10',
]
