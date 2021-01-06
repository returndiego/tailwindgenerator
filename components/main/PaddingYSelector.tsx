import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function PaddingYSelector() {
  const { dispatch } = useContext(GlobalContext)
  return (
    <section className="mx-auto max-w-screen-lg p-2">
      <header>
        <h1 className="text-lg font-bold">Padding Y Selector (Text Only)</h1>
      </header>
      <div className="flex gap-3 flex-wrap justify-evenly">
        {breakpoints.map((breakpoint) => (
          <button
            key={breakpoint}
            onClick={() => dispatch({ type: 'PADDING_Y', payload: breakpoint })}
            className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-warmGray-200 text-warmGray-900  hover:bg-warmGray-100 focus:ring-warmGray-500 focus:bg-warmGray-200 dark:bg-warmGray-900 dark:text-warmGray-50 dark:hover:bg-warmGray-800 dark:focus:bg-warmGray-900"
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
