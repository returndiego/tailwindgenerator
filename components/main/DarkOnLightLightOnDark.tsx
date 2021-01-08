import { useContext } from 'react'
import { HiOutlineCheckCircle } from 'react-icons/hi'
import { GlobalContext } from '../../context/GlobalState'
import CopyToClipbaord from './CopyToClipboard'

export default function LightOnDarkDarkOnLight() {
  const { state } = useContext(GlobalContext)
  const { color, fontWeight, paddingY, paddingX, rounded, padding } = state

  const fillTextButton = `transition focus:ring focus:outline-none ${fontWeight} ${paddingX} ${paddingY} ${rounded} dark:bg-${color}-200 dark:text-${color}-900 bg-${color}-900 text-${color}-50 dark:hover:bg-${color}-100 hover:bg-${color}-800 focus:ring-${color}-500 dark:focus:bg-${color}-200 focus:bg-${color}-900`
  const OutlineTextButton = `transition focus:ring focus:outline-none border-2 ${fontWeight} ${paddingX} ${paddingY} ${rounded} text-${color}-900 dark:border-${color}-600 border-${color}-300 dark:text-${color}-100 dark:hover:bg-${color}-100 hover:bg-${color}-800 dark:hover:text-${color}-900 hover:text-${color}-100 focus:ring-${color}-500 dark:focus:bg-${color}-200 dark:focus:text-${color}-900 focus:text-${color}-100 focus:bg-${color}-900`
  const GhostTextButton = `transition focus:ring focus:outline-none ${fontWeight} ${paddingX} ${paddingY} ${rounded} text-${color}-900 dark:text-${color}-100 dark:hover:bg-${color}-100 hover:bg-${color}-800 dark:hover:text-${color}-900 hover:text-${color}-100 focus:ring-${color}-500 dark:focus:bg-${color}-200 dark:focus:text-${color}-900 focus:text-${color}-100 focus:bg-${color}-900`

  const fillSVGButton = `transition focus:ring focus:outline-none ${padding} ${rounded} dark:bg-${color}-200 dark:text-${color}-900 bg-${color}-900 text-${color}-50 dark:hover:bg-${color}-100 hover:bg-${color}-800 focus:ring-${color}-500 dark:focus:bg-${color}-200 focus:bg-${color}-900`
  const OutlineSVGButton = `transition focus:ring focus:outline-none border-2 ${padding} ${rounded} text-${color}-900 dark:border-${color}-600 border-${color}-300 dark:text-${color}-100 dark:hover:bg-${color}-100 hover:bg-${color}-800 dark:hover:text-${color}-900 hover:text-${color}-100 focus:ring-${color}-500 dark:focus:bg-${color}-200 dark:focus:text-${color}-900 focus:text-${color}-100 focus:bg-${color}-900`
  const GhostSVGButton = `transition focus:ring focus:outline-none ${padding} ${rounded} text-${color}-900 dark:text-${color}-100 dark:hover:bg-${color}-100 hover:bg-${color}-800 dark:hover:text-${color}-900 hover:text-${color}-100 focus:ring-${color}-500 dark:focus:bg-${color}-200 dark:focus:text-${color}-900 focus:text-${color}-100 focus:bg-${color}-900`

  return (
    <section className="mx-auto max-w-screen-lg p-2">
      <header>
        <h1 className="text-lg font-bold">
          Dark on Light Mode, Light on Dark Mode
        </h1>
      </header>
      <div className="table mx-auto rounded shadow-md overflow-hidden border-2 mt-5">
        <header className="table-header-group">
          <section className="table-row">
            <div className="py-1 px-4 table-cell text-center">Type</div>
            <div className="py-1 px-4 table-cell text-center ">
              <div className="grid justify-items-center">
                <button className="flex gap-2 items-center font-semibold">
                  <p>Fill</p>
                </button>
              </div>
            </div>
            <div className="py-1 px-4 table-cell text-center">
              <div className="grid justify-items-center">
                <button className="flex gap-2 items-center font-semibold">
                  <p>Outline</p>
                </button>
              </div>
            </div>
            <div className="py-1 px-4 table-cell text-center">
              <div className="grid justify-items-center">
                <button className="flex gap-2 items-center font-semibold">
                  <p>Ghost</p>
                </button>
              </div>
            </div>
          </section>
        </header>
        <div className="table-row-group">
          <section className="table-row">
            <div className="py-1 px-4 table-cell align-middle">Text</div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="Close" className={fillTextButton}>
                  Button
                </button>
                <CopyToClipbaord classes={fillTextButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="Close" className={OutlineTextButton}>
                  Button
                </button>
                <CopyToClipbaord classes={OutlineTextButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="Close" className={GhostTextButton}>
                  Button
                </button>
                <CopyToClipbaord classes={GhostTextButton} />
              </div>
            </div>
          </section>
          <section className="table-row">
            <div className="py-1 px-4 table-cell align-middle">SVG</div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid grid-flow-col justify-items-center">
                <button aria-label="Close" className={fillSVGButton}>
                  <HiOutlineCheckCircle className="h-5 w-5" />
                </button>
                <CopyToClipbaord classes={fillSVGButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid grid-flow-col gap-2 justify-items-center">
                <button aria-label="Close" className={OutlineSVGButton}>
                  <HiOutlineCheckCircle className="h-5 w-5" />
                </button>
                <CopyToClipbaord classes={OutlineSVGButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="Close" className={GhostSVGButton}>
                  <HiOutlineCheckCircle className="h-5 w-5" />
                </button>
                <CopyToClipbaord classes={GhostSVGButton} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
