import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function fontWeightSelector() {
  const { dispatch } = useContext(GlobalContext)
  return (
    <section className="mx-auto max-w-screen-lg p-2">
      <header>
        <h1 className="text-lg font-bold">Font Weight Selector</h1>
      </header>
      <div className="flex gap-3 flex-wrap justify-evenly">
        {breakpoints.map((breakpoint) => (
          <button
            key={breakpoint}
            onClick={() =>
              dispatch({ type: 'FONT_WEIGHT', payload: breakpoint })
            }
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
  'font-thin',
  'font-extralight',
  'font-light',
  'font-normal',
  'font-medium',
  'font-semibold',
  'font-bold',
  'font-extrabold',
  'font-black',
]
