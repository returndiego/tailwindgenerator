import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function ColorSelector() {
  const { dispatch } = useContext(GlobalContext)

  return (
    <section className="mx-auto max-w-screen-lg p-2">
      <header>
        <h1 className="text-lg font-bold">Color Selector</h1>
      </header>
      <div className="flex gap-3 flex-wrap justify-evenly">
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'blueGray' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-blueGray-200 text-blueGray-900  hover:bg-blueGray-100 focus:ring-blueGray-500 focus:bg-blueGray-200 dark:bg-blueGray-900 dark:text-blueGray-50 dark:hover:bg-blueGray-800 dark:focus:bg-blueGray-900"
        >
          blueGray
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'coolGray' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-coolGray-200 text-coolGray-900  hover:bg-coolGray-100 focus:ring-coolGray-500 focus:bg-coolGray-200 dark:bg-coolGray-900 dark:text-coolGray-50 dark:hover:bg-coolGray-800 dark:focus:bg-coolGray-900"
        >
          coolGray
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'gray' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-gray-200 text-gray-900  hover:bg-gray-100 focus:ring-gray-500 focus:bg-gray-200 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus:bg-gray-900"
        >
          gray
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'trueGray' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-trueGray-200 text-trueGray-900  hover:bg-trueGray-100 focus:ring-trueGray-500 focus:bg-trueGray-200 dark:bg-trueGray-900 dark:text-trueGray-50 dark:hover:bg-trueGray-800 dark:focus:bg-trueGray-900"
        >
          trueGray
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'warmGray' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-warmGray-200 text-warmGray-900  hover:bg-warmGray-100 focus:ring-warmGray-500 focus:bg-warmGray-200 dark:bg-warmGray-900 dark:text-warmGray-50 dark:hover:bg-warmGray-800 dark:focus:bg-warmGray-900"
        >
          warmGray
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'red' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-red-200 text-red-900  hover:bg-red-100 focus:ring-red-500 focus:bg-red-200 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-800 dark:focus:bg-red-900"
        >
          red
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'orange' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-orange-200 text-orange-900  hover:bg-orange-100 focus:ring-orange-500 focus:bg-orange-200 dark:bg-orange-900 dark:text-orange-50 dark:hover:bg-orange-800 dark:focus:bg-orange-900"
        >
          orange
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'amber' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-amber-200 text-amber-900  hover:bg-amber-100 focus:ring-amber-500 focus:bg-amber-200 dark:bg-amber-900 dark:text-amber-50 dark:hover:bg-amber-800 dark:focus:bg-amber-900"
        >
          amber
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'yellow' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-yellow-200 text-yellow-900  hover:bg-yellow-100 focus:ring-yellow-500 focus:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-50 dark:hover:bg-yellow-800 dark:focus:bg-yellow-900"
        >
          yellow
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'lime' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-lime-200 text-lime-900  hover:bg-lime-100 focus:ring-lime-500 focus:bg-lime-200 dark:bg-lime-900 dark:text-lime-50 dark:hover:bg-lime-800 dark:focus:bg-lime-900"
        >
          lime
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'green' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-green-200 text-green-900  hover:bg-green-100 focus:ring-green-500 focus:bg-green-200 dark:bg-green-900 dark:text-green-50 dark:hover:bg-green-800 dark:focus:bg-green-900"
        >
          green
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'emerald' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-emerald-200 text-emerald-900  hover:bg-emerald-100 focus:ring-emerald-500 focus:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-50 dark:hover:bg-emerald-800 dark:focus:bg-emerald-900"
        >
          emerald
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'teal' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-teal-200 text-teal-900  hover:bg-teal-100 focus:ring-teal-500 focus:bg-teal-200 dark:bg-teal-900 dark:text-teal-50 dark:hover:bg-teal-800 dark:focus:bg-teal-900"
        >
          teal
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'cyan' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-cyan-200 text-cyan-900  hover:bg-cyan-100 focus:ring-cyan-500 focus:bg-cyan-200 dark:bg-cyan-900 dark:text-cyan-50 dark:hover:bg-cyan-800 dark:focus:bg-cyan-900"
        >
          cyan
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'lightBlue' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-lightBlue-200 text-lightBlue-900  hover:bg-lightBlue-100 focus:ring-lightBlue-500 focus:bg-lightBlue-200 dark:bg-lightBlue-900 dark:text-lightBlue-50 dark:hover:bg-lightBlue-800 dark:focus:bg-lightBlue-900"
        >
          lightBlue
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'blue' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-blue-200 text-blue-900  hover:bg-blue-100 focus:ring-blue-500 focus:bg-blue-200 dark:bg-blue-900 dark:text-blue-50 dark:hover:bg-blue-800 dark:focus:bg-blue-900"
        >
          blue
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'indigo' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-indigo-200 text-indigo-900  hover:bg-indigo-100 focus:ring-indigo-500 focus:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-50 dark:hover:bg-indigo-800 dark:focus:bg-indigo-900"
        >
          indigo
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'violet' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-violet-200 text-violet-900  hover:bg-violet-100 focus:ring-violet-500 focus:bg-violet-200 dark:bg-violet-900 dark:text-violet-50 dark:hover:bg-violet-800 dark:focus:bg-violet-900"
        >
          violet
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'purple' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-purple-200 text-purple-900  hover:bg-purple-100 focus:ring-purple-500 focus:bg-purple-200 dark:bg-purple-900 dark:text-purple-50 dark:hover:bg-purple-800 dark:focus:bg-purple-900"
        >
          purple
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'fuchsia' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-fuchsia-200 text-fuchsia-900  hover:bg-fuchsia-100 focus:ring-fuchsia-500 focus:bg-fuchsia-200 dark:bg-fuchsia-900 dark:text-fuchsia-50 dark:hover:bg-fuchsia-800 dark:focus:bg-fuchsia-900"
        >
          fuchsia
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'pink' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-pink-200 text-pink-900  hover:bg-pink-100 focus:ring-pink-500 focus:bg-pink-200 dark:bg-pink-900 dark:text-pink-50 dark:hover:bg-pink-800 dark:focus:bg-pink-900"
        >
          pink
        </button>
        <button
          onClick={() => dispatch({ type: 'COLOR', payload: 'rose' })}
          className="font-medium px-3 py-1 rounded-md transition focus:ring focus:outline-none bg-rose-200 text-rose-900  hover:bg-rose-100 focus:ring-rose-500 focus:bg-rose-200 dark:bg-rose-900 dark:text-rose-50 dark:hover:bg-rose-800 dark:focus:bg-rose-900"
        >
          rose
        </button>
      </div>
    </section>
  )
}
