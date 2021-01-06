import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function PaddingXSelector() {
  const { dispatch } = useContext(GlobalContext)
  return (
    <section className="mx-auto max-w-screen-lg p-2">
      <header>
        <h1 className="text-lg font-bold">Padding X Selector (Text Only)</h1>
      </header>
      <div className="flex gap-3 flex-wrap justify-evenly">
        {breakpoints.map((breakpoint) => (
          <button
            key={breakpoint}
            onClick={() => dispatch({ type: 'PADDING_X', payload: breakpoint })}
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
  'px-px',
  'px-0',
  'px-0.5',
  'px-1',
  'px-1.5',
  'px-2',
  'px-2.5',
  'px-3',
  'px-3.5',
  'px-4',
  'px-5',
  'px-6',
  'px-7',
  'px-8',
  'px-9',
  'px-10',
]
