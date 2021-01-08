import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import CopyToClipbaord from '../main/CopyToClipboard'
import { HiOutlineStar, HiHeart } from 'react-icons/hi'

export default function Inputs() {
  const { state } = useContext(GlobalContext)
  const { color, fontWeight, paddingY, paddingX, rounded, border } = state

  const borderInput = `w-full dark:border-gray-600 dark:bg-gray-900 transition focus:outline-none ${border} ${fontWeight} ${paddingX} ${paddingY} ${rounded} focus:border-${color}-700 dark:focus:border-${color}-400`
  const fillTextButton = `transition w-full focus:outline-none ${fontWeight} ${paddingX} ${paddingY} ${rounded} bg-${color}-900 text-${color}-50 focus:ring hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-900`
  const fillLabel = `select-none grid place-items-center text-sm ${fontWeight} ${paddingX} ${paddingY} ${rounded} bg-${color}-200 text-${color}-900`
  const fillLabelSVG = `grid grid-flow-col gap-1 place-items-center text-sm ${fontWeight} ${paddingX} ${paddingY} ${rounded} bg-${color}-200 text-${color}-900`
  const outlineLabel = `grid place-items-center text-sm border-2 ${fontWeight} ${paddingX} ${paddingY} ${rounded} border-${color}-600 text-${color}-900 dark:text-${color}-100`
  const outlineLabelSVG = `grid grid-flow-col gap-1 place-items-center text-sm border-2 ${fontWeight} ${paddingX} ${paddingY} ${rounded} border-${color}-600 text-${color}-900 dark:text-${color}-100`

  return (
    <section className="max-w-sm mx-auto p-2 w-full px-3 py-5 sm:px-5 bg-gray-50 shadow-lg dark:bg-gray-900 rounded-md space-y-5">
      <section>
        <h1 className="text-center text-xl font-bold">Sign In</h1>
      </section>
      <section className="flex justify-between">
        <div className="flex gap-2">
          <CopyToClipbaord classes={outlineLabel} />
          <p className={outlineLabel}>Label</p>
        </div>
        <div className="flex gap-2">
          <p className={fillLabel}>Label</p>
          <CopyToClipbaord classes={fillLabel} />
        </div>
      </section>
      <section className="flex justify-between">
        <div className="flex gap-2">
          <CopyToClipbaord classes={outlineLabelSVG} />
          <p className={outlineLabelSVG}>
            Label
            <HiOutlineStar className="h-5 w-5" />
          </p>
        </div>
        <div className="flex gap-2">
          <p className={fillLabelSVG}>
            <HiHeart className="h-5 w-5" />
            Label
          </p>
          <CopyToClipbaord classes={fillLabelSVG} />
        </div>
      </section>
      <section className="space-y-3">
        <div className="flex gap-2">
          <CopyToClipbaord classes={borderInput} />
          <label className="block font-bold">
            <p className="mb-1">Email</p>
            <input
              type="email"
              name="email"
              placeholder="someone@email.com"
              className={borderInput}
            />
          </label>
        </div>
        <div className="flex gap-2">
          <CopyToClipbaord classes={borderInput} />
          <label className="block font-bold">
            <p className="mb-1">Password</p>
            <input type="password" name="password" className={borderInput} />
          </label>
        </div>
      </section>
      <section className="flex gap-2">
        <CopyToClipbaord classes={fillTextButton} />
        <button className={fillTextButton}>Submit</button>
      </section>
    </section>
  )
}
