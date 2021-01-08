import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import CopyToClipbaord from './CopyToClipboard'

export default function DarkOnly() {
  const { state } = useContext(GlobalContext)
  const {
    color,
    fontWeight,
    paddingY,
    paddingX,
    rounded,
    padding,
    textTransform,
  } = state

  const fillTextButton = `select-none transition focus:outline-none ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} bg-${color}-900 text-${color}-50 focus:ring hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-900`
  const OutlineTextButton = `select-none border-2 transition focus:outline-none focus:ring ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} border-${color}-300 text-${color}-800 hover:bg-${color}-800 hover:text-${color}-50 focus:text-${color}-50 focus:ring-${color}-500 focus:bg-${color}-900`
  const GhostTextButton = `select-none transition focus:outline-none focus:ring ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} text-${color}-800 hover:bg-${color}-800 hover:text-${color}-50 focus:text-${color}-50 focus:ring-${color}-500 focus:bg-${color}-900`

  const fillSVGButton = `transition focus:outline-none ${padding} ${rounded} bg-${color}-900 text-${color}-50 focus:ring hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-900`
  const OutlineSVGButton = `border-2 transition focus:outline-none focus:ring ${padding} ${rounded} border-${color}-300 text-${color}-800 hover:bg-${color}-800 hover:text-${color}-50 focus:text-${color}-50 focus:ring-${color}-500 focus:bg-${color}-900`
  const GhostSVGButton = `transition focus:outline-none focus:ring ${padding} ${rounded} text-${color}-900 hover:bg-${color}-800 hover:text-${color}-50 focus:text-${color}-50 focus:ring-${color}-500 focus:bg-${color}-900`

  return (
    <section className="mx-auto max-w-screen-lg p-2">
      <header>
        <h1 className="text-lg font-bold">Dark</h1>
      </header>
      <div className="table mx-auto rounded shadow-md overflow-hidden border-2 bg-gray-100 text-gray-900 mt-5">
        <header className="table-header-group">
          <section className="table-row">
            <div className="py-1 px-4 table-cell text-center">Type</div>
            <div className="py-1 px-4 table-cell text-center ">
              <div className="grid justify-items-center">
                <p>Fill</p>
              </div>
            </div>
            <div className="py-1 px-4 table-cell text-center">
              <div className="grid justify-items-center">
                <p>Outline</p>
              </div>
            </div>
            <div className="py-1 px-4 table-cell text-center">
              <div className="grid justify-items-center">
                <p>Ghost</p>
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
              <div className="flex gap-2 justify-items-center">
                <button aria-label="Close" className={fillSVGButton}>
                  <HiOutlineShoppingCart className="h-5 w-5" />
                </button>
                <CopyToClipbaord classes={fillSVGButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="Close" className={OutlineSVGButton}>
                  <HiOutlineShoppingCart className="h-5 w-5" />
                </button>
                <CopyToClipbaord classes={OutlineSVGButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="Close" className={GhostSVGButton}>
                  <HiOutlineShoppingCart className="h-5 w-5" />
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
