import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function fontWeightSelector() {
  const { state, dispatch } = useContext(GlobalContext)
  const { fontWeight } = state
  return (
    <section>
      <header>
        <h1 className="text-lg font-bold">Font Weight Selector</h1>
      </header>
      <div className="grid gap-3">
        {breakpoints.map((breakpoint) => (
          <button
            key={breakpoint}
            onClick={() =>
              dispatch({ type: 'FONT_WEIGHT', payload: breakpoint })
            }
            className={`font-medium px-3 py-1 rounded-md transition focus:outline-none bg-warmGray-200 text-warmGray-900  hover:bg-warmGray-100 dark:bg-warmGray-900 dark:text-warmGray-50 dark:hover:bg-warmGray-800 ${
              fontWeight === breakpoint
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
