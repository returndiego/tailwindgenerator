import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { HiHeart, HiOutlineShoppingCart, HiOutlineStar } from 'react-icons/hi'
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
    border,
    ring,
  } = state

  // ------------------- BUTTON (TEXT) ----------------------
  const fillTextButton = `select-none transition focus:outline-none ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} bg-${color}-900 text-${color}-50 focus:${ring} hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-900`

  const OutlineTextButton = `select-none ${border} transition focus:outline-none focus:${ring} ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} border-${color}-300 text-${color}-800 hover:bg-${color}-800 hover:text-${color}-50 focus:text-${color}-50 focus:ring-${color}-500 focus:bg-${color}-900`

  const GhostTextButton = `select-none transition focus:outline-none focus:${ring} ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} text-${color}-800 hover:bg-${color}-800 hover:text-${color}-50 focus:text-${color}-50 focus:ring-${color}-500 focus:bg-${color}-900`

  // ------------------- BUTTON (SVG) ----------------------
  const fillSVGButton = `transition focus:outline-none ${padding} ${rounded} bg-${color}-900 text-${color}-50 focus:${ring} hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-900`

  const OutlineSVGButton = `${border} transition focus:outline-none focus:${ring} ${padding} ${rounded} border-${color}-300 text-${color}-800 hover:bg-${color}-800 hover:text-${color}-50 focus:text-${color}-50 focus:ring-${color}-500 focus:bg-${color}-900`

  const GhostSVGButton = `transition focus:outline-none focus:${ring} ${padding} ${rounded} text-${color}-900 hover:bg-${color}-800 hover:text-${color}-50 focus:text-${color}-50 focus:ring-${color}-500 focus:bg-${color}-900`

  // ------------------- LABEL (TEXT) ----------------------
  const darkFillLabel = `select-none grid place-items-center text-sm ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} bg-${color}-900 text-${color}-50`

  const outlineLabel = `select-none grid place-items-center text-sm ${border} transition ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} border-${color}-300 text-${color}-800`

  // ---------------- LABEL (TEXT & SVG) -------------------
  const darkFillSVG = `grid place-items-center ${padding} ${rounded} bg-${color}-900 text-${color}-50`

  const outlineSVG = `grid place-items-center ${border} ${padding} ${rounded} border-${color}-300 text-${color}-800`

  // ---------------- INPUT (BORDER) -------------------

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
          {/* ----------------- BUTTON (TEXT) -------------------- */}
          <section className="table-row">
            <div className="py-1 px-4 table-cell align-middle">
              Button (Text)
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="button" className={fillTextButton}>
                  Button
                </button>
                <CopyToClipbaord classes={fillTextButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="button" className={OutlineTextButton}>
                  Button
                </button>
                <CopyToClipbaord classes={OutlineTextButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="button" className={GhostTextButton}>
                  Button
                </button>
                <CopyToClipbaord classes={GhostTextButton} />
              </div>
            </div>
          </section>

          {/* ----------------- BUTTON (SVG) -------------------- */}
          <section className="table-row">
            <div className="py-1 px-4 table-cell align-middle">
              Button (SVG)
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="button" className={fillSVGButton}>
                  <HiOutlineShoppingCart className="h-5 w-5" />
                </button>
                <CopyToClipbaord classes={fillSVGButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="button" className={OutlineSVGButton}>
                  <HiOutlineShoppingCart className="h-5 w-5" />
                </button>
                <CopyToClipbaord classes={OutlineSVGButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="button" className={GhostSVGButton}>
                  <HiOutlineShoppingCart className="h-5 w-5" />
                </button>
                <CopyToClipbaord classes={GhostSVGButton} />
              </div>
            </div>
          </section>

          {/* ----------------- LABEL (TEXT) -------------------- */}
          <section className="table-row">
            <div className="py-1 px-4 table-cell align-middle">
              Label (Text)
            </div>

            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <p className={darkFillLabel}>Label</p>
                <CopyToClipbaord classes={darkFillLabel} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <p className={outlineLabel}>Label</p>
                <CopyToClipbaord classes={outlineLabel} />
              </div>
            </div>
          </section>

          {/* --------------- LABEL (TEXT & SVG) ------------------ */}
          <section className="table-row">
            <div className="py-1 px-4 table-cell align-middle">Label (SVG)</div>

            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <div className={darkFillSVG}>
                  <HiOutlineStar className="h-5 w-5" />
                </div>
                <CopyToClipbaord classes={darkFillSVG} />
              </div>
            </div>

            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <div className={outlineSVG}>
                  <HiHeart className="h-5 w-5" />
                </div>
                <CopyToClipbaord classes={outlineSVG} />
              </div>
            </div>
          </section>

          {/* ----------------- LABEL (SVG) -------------------- */}
        </div>
      </div>
    </section>
  )
}
