import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import CopyToClipbaord from '../main/CopyToClipboard'

export default function Inputs() {
  const { state } = useContext(GlobalContext)
  const { color, fontWeight, paddingY, paddingX, rounded, border } = state

  const borderInput = `w-full dark:border-gray-600 dark:bg-gray-900 transition focus:outline-none ${border} ${fontWeight} ${paddingX} ${paddingY} ${rounded} focus:border-${color}-700 dark:focus:border-${color}-400`

  return (
    <section className="max-w-sm mx-auto p-2 w-full px-3 py-5 sm:px-5 bg-gray-50 shadow-lg dark:bg-gray-900 rounded-md space-y-5">
      <section className="space-y-3">
        <div className="flex gap-2">
          <CopyToClipbaord classes={borderInput} />
          <label className="block font-bold">
            <p className="mb-1">Input</p>
            <input
              type="email"
              name="email"
              placeholder="someone@email.com"
              className={borderInput}
            />
          </label>
        </div>
      </section>
    </section>
  )
}
