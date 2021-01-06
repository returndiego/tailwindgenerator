import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function RoundedSelector() {
  const { dispatch } = useContext(GlobalContext)
  return (
    <section className="mx-auto max-w-screen-lg p-2">
      <header>
        <h1 className="text-lg font-bold">Rounded Selector</h1>
      </header>
      <div className="flex gap-3 flex-wrap justify-evenly">
        <button
          onClick={() => dispatch({ type: 'ROUNDED', payload: 'rounded-none' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-warmGray-200 text-warmGray-900  hover:bg-warmGray-100 focus:ring-warmGray-500 focus:bg-warmGray-200 dark:bg-warmGray-900 dark:text-warmGray-50 dark:hover:bg-warmGray-800 dark:focus:bg-warmGray-900"
        >
          none
        </button>
        <button
          onClick={() => dispatch({ type: 'ROUNDED', payload: 'rounded-sm' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-warmGray-200 text-warmGray-900  hover:bg-warmGray-100 focus:ring-warmGray-500 focus:bg-warmGray-200 dark:bg-warmGray-900 dark:text-warmGray-50 dark:hover:bg-warmGray-800 dark:focus:bg-warmGray-900"
        >
          sm
        </button>
        <button
          onClick={() => dispatch({ type: 'ROUNDED', payload: 'rounded' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-warmGray-200 text-warmGray-900  hover:bg-warmGray-100 focus:ring-warmGray-500 focus:bg-warmGray-200 dark:bg-warmGray-900 dark:text-warmGray-50 dark:hover:bg-warmGray-800 dark:focus:bg-warmGray-900"
        >
          base
        </button>
        <button
          onClick={() => dispatch({ type: 'ROUNDED', payload: 'rounded-md' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-warmGray-200 text-warmGray-900  hover:bg-warmGray-100 focus:ring-warmGray-500 focus:bg-warmGray-200 dark:bg-warmGray-900 dark:text-warmGray-50 dark:hover:bg-warmGray-800 dark:focus:bg-warmGray-900"
        >
          md
        </button>
        <button
          onClick={() => dispatch({ type: 'ROUNDED', payload: 'rounded-lg' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-warmGray-200 text-warmGray-900  hover:bg-warmGray-100 focus:ring-warmGray-500 focus:bg-warmGray-200 dark:bg-warmGray-900 dark:text-warmGray-50 dark:hover:bg-warmGray-800 dark:focus:bg-warmGray-900"
        >
          lg
        </button>
        <button
          onClick={() => dispatch({ type: 'ROUNDED', payload: 'rounded-xl' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-warmGray-200 text-warmGray-900  hover:bg-warmGray-100 focus:ring-warmGray-500 focus:bg-warmGray-200 dark:bg-warmGray-900 dark:text-warmGray-50 dark:hover:bg-warmGray-800 dark:focus:bg-warmGray-900"
        >
          xl
        </button>
        <button
          onClick={() => dispatch({ type: 'ROUNDED', payload: 'rounded-2xl' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-warmGray-200 text-warmGray-900  hover:bg-warmGray-100 focus:ring-warmGray-500 focus:bg-warmGray-200 dark:bg-warmGray-900 dark:text-warmGray-50 dark:hover:bg-warmGray-800 dark:focus:bg-warmGray-900"
        >
          2xl
        </button>
        <button
          onClick={() => dispatch({ type: 'ROUNDED', payload: 'rounded-3xl' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-warmGray-200 text-warmGray-900  hover:bg-warmGray-100 focus:ring-warmGray-500 focus:bg-warmGray-200 dark:bg-warmGray-900 dark:text-warmGray-50 dark:hover:bg-warmGray-800 dark:focus:bg-warmGray-900"
        >
          3xl
        </button>
        <button
          onClick={() => dispatch({ type: 'ROUNDED', payload: 'rounded-full' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-warmGray-200 text-warmGray-900  hover:bg-warmGray-100 focus:ring-warmGray-500 focus:bg-warmGray-200 dark:bg-warmGray-900 dark:text-warmGray-50 dark:hover:bg-warmGray-800 dark:focus:bg-warmGray-900"
        >
          full
        </button>
      </div>
    </section>
  )
}
