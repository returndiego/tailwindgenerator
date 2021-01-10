import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { HiAdjustments, HiHeart, HiOutlineStar } from 'react-icons/hi'
import CopyToClipbaord from './CopyToClipboard'

export default function LightOnly() {
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

  // ------------------- BUTTON (TEXT) ----------------------
  const fillTextButton = `select-none transition focus:outline-none ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} bg-${color}-200 text-${color}-900 focus:ring hover:bg-${color}-100 focus:ring-${color}-500 focus:bg-${color}-200`

  const OutlineTextButton = `select-none border-2 transition focus:outline-none focus:ring ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} border-${color}-600 text-${color}-900 hover:bg-${color}-100 hover:text-${color}-900 focus:text-${color}-900 focus:ring-${color}-500 focus:bg-${color}-200`

  const GhostTextButton = `select-none transition focus:outline-none focus:ring ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} text-${color}-900 hover:bg-${color}-100 hover:text-${color}-900 focus:text-${color}-900 focus:ring-${color}-500 focus:bg-${color}-200`

  // ------------------- BUTTON (SVG) ----------------------
  const fillSVGButton = `transition focus:outline-none ${padding} ${rounded} bg-${color}-200 text-${color}-900 focus:ring hover:bg-${color}-100 focus:ring-${color}-500 focus:bg-${color}-200`

  const OutlineSVGButton = `border-2 transition focus:outline-none focus:ring ${padding} ${rounded} border-${color}-600 text-${color}-900 hover:bg-${color}-100 hover:text-${color}-900 focus:text-${color}-900 focus:ring-${color}-500 focus:bg-${color}-200`

  const GhostSVGButton = `transition focus:outline-none focus:ring ${padding} ${rounded} text-${color}-900 hover:bg-${color}-100 hover:text-${color}-900 focus:text-${color}-900 focus:ring-${color}-500 focus:bg-${color}-200`

  // ------------------- LABEL (TEXT) ----------------------
  const fillLabel = `select-none grid place-items-center text-sm ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} bg-${color}-200 text-${color}-900`

  const outlineLabel = `select-none grid place-items-center text-sm border-2 transition ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} border-${color}-600 text-${color}-800`

  // ---------------- LABEL (TEXT & SVG) -------------------
  const fillSVG = `grid place-items-center ${padding} ${rounded} bg-${color}-200 text-${color}-900`

  const outlineSVG = `grid place-items-center border-2 ${padding} ${rounded} border-${color}-600 text-${color}-800`

  return (
    <section className="mx-auto max-w-screen-lg p-2">
      <header>
        <h1 className="text-lg font-bold">Light</h1>
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
              <div className="grid grid-flow-col gap-2 place-items-center">
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
          <section className="table-row">
            <div className="py-1 px-4 table-cell align-middle">SVG</div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="button" className={fillSVGButton}>
                  <HiAdjustments className="h-5 w-5" />
                </button>
                <CopyToClipbaord classes={fillSVGButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="button" className={OutlineSVGButton}>
                  <HiAdjustments className="h-5 w-5" />
                </button>
                <CopyToClipbaord classes={OutlineSVGButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="button" className={GhostSVGButton}>
                  <HiAdjustments className="h-5 w-5" />
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
                <p className={fillLabel}>Label</p>
                <CopyToClipbaord classes={fillLabel} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <p className={outlineLabel}>Label</p>
                <CopyToClipbaord classes={outlineLabel} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle"></div>
          </section>

          {/* --------------- LABEL (TEXT & SVG) ------------------ */}
          <section className="table-row">
            <div className="py-1 px-4 table-cell align-middle">Label (SVG)</div>

            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <div className={fillSVG}>
                  <HiOutlineStar className="h-5 w-5" />
                </div>
                <CopyToClipbaord classes={fillSVG} />
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
            <div className="py-1 px-4 table-cell align-middle"></div>
          </section>
        </div>
      </div>
    </section>
  )
}
