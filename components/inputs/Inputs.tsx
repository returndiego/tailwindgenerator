import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function Inputs() {
  const { state } = useContext(GlobalContext)
  const { color, fontWeight, paddingY, paddingX, rounded, border } = state
  return (
    <section className="max-w-sm mx-auto p-2 w-full px-3 py-5 sm:px-5 bg-gray-50 shadow-lg dark:bg-gray-900 rounded-md space-y-5 select-none">
      <section>
        <h1 className="text-center text-xl font-bold">Sign In</h1>
      </section>
      <section className="space-y-3">
        <label className="block font-bold">
          Email
          <input
            type="email"
            name="email"
            placeholder="someone@email.com"
            className={`mt-1 w-full dark:border-gray-600 dark:bg-gray-900 transition focus:outline-none ${border} ${fontWeight} ${paddingX} ${paddingY} ${rounded} focus:border-${color}-700 dark:focus:border-${color}-400`}
          />
        </label>
        <label className="block font-bold">
          Password
          <input
            type="password"
            name="password"
            className={`mt-1 w-full dark:border-gray-600 dark:bg-gray-900 transition focus:outline-none ${border} ${fontWeight} ${paddingX} ${paddingY} ${rounded} focus:border-${color}-700 dark:focus:border-${color}-400`}
          />
        </label>
      </section>
      <section>
        <button
          className={`transition w-full focus:outline-none ${fontWeight} ${paddingX} ${paddingY} ${rounded} bg-${color}-900 text-${color}-50 focus:ring hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-900`}
        >
          Submit
        </button>
      </section>
    </section>
  )
}
