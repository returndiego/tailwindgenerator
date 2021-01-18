import { useContext } from 'react'
import { HiHeart, HiOutlineCheckCircle, HiOutlineStar } from 'react-icons/hi'
import { GlobalContext } from '../../context/GlobalState'
import CopyToClipbaord from './CopyToClipboard'

export default function LightOnDarkDarkOnLight() {
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
  const fillTextButton = `select-none transition focus:${ring} focus:outline-none ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} dark:bg-${color}-200 dark:text-${color}-900 bg-${color}-900 text-${color}-50 dark:hover:bg-${color}-100 hover:bg-${color}-800 focus:ring-${color}-500 dark:focus:bg-${color}-200 focus:bg-${color}-900`

  const OutlineTextButton = `select-none transition focus:${ring} focus:outline-none ${border} ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} text-${color}-900 dark:border-${color}-600 border-${color}-300 dark:text-${color}-100 dark:hover:bg-${color}-100 hover:bg-${color}-800 dark:hover:text-${color}-900 hover:text-${color}-100 focus:ring-${color}-500 dark:focus:bg-${color}-200 dark:focus:text-${color}-900 focus:text-${color}-100 focus:bg-${color}-900`

  const GhostTextButton = `select-none transition focus:${ring} focus:outline-none ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} text-${color}-900 dark:text-${color}-100 dark:hover:bg-${color}-100 hover:bg-${color}-800 dark:hover:text-${color}-900 hover:text-${color}-100 focus:ring-${color}-500 dark:focus:bg-${color}-200 dark:focus:text-${color}-900 focus:text-${color}-100 focus:bg-${color}-900`

  // ------------------- BUTTON (SVG) ----------------------
  const fillSVGButton = `transition focus:${ring} focus:outline-none ${padding} ${rounded} dark:bg-${color}-200 dark:text-${color}-900 bg-${color}-900 text-${color}-50 dark:hover:bg-${color}-100 hover:bg-${color}-800 focus:ring-${color}-500 dark:focus:bg-${color}-200 focus:bg-${color}-900`

  const OutlineSVGButton = `transition focus:${ring} focus:outline-none ${border} ${padding} ${rounded} text-${color}-900 dark:border-${color}-600 border-${color}-300 dark:text-${color}-100 dark:hover:bg-${color}-100 hover:bg-${color}-800 dark:hover:text-${color}-900 hover:text-${color}-100 focus:ring-${color}-500 dark:focus:bg-${color}-200 dark:focus:text-${color}-900 focus:text-${color}-100 focus:bg-${color}-900`

  const GhostSVGButton = `transition focus:${ring} focus:outline-none ${padding} ${rounded} text-${color}-900 dark:text-${color}-100 dark:hover:bg-${color}-100 hover:bg-${color}-800 dark:hover:text-${color}-900 hover:text-${color}-100 focus:ring-${color}-500 dark:focus:bg-${color}-200 dark:focus:text-${color}-900 focus:text-${color}-100 focus:bg-${color}-900`

  // ------------------- LABEL (TEXT) ----------------------

  const darkFillLabel = `select-none grid place-items-center text-sm ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} bg-${color}-900 text-${color}-50 dark:bg-${color}-200 dark:text-${color}-900`

  const outlineLabel = `select-none grid place-items-center text-sm ${border} transition ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} border-${color}-300 text-${color}-800 dark:border-${color}-600 dark:text-${color}-100`

  // ---------------- LABEL (TEXT & SVG) -------------------

  const darkFillSVG = `grid place-items-center ${padding} ${rounded} bg-${color}-900 text-${color}-50 dark:bg-${color}-200 dark:text-${color}-900`

  const outlineSVG = `grid place-items-center ${border} ${padding} ${rounded} border-${color}-300 text-${color}-800 dark:border-${color}-600 dark:text-${color}-100`

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
          <section className="table-row">
            <div className="py-1 px-4 table-cell align-middle">
              Button (SVG)
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid grid-flow-col justify-items-center">
                <button aria-label="button" className={fillSVGButton}>
                  <HiOutlineCheckCircle className="h-5 w-5" />
                </button>
                <CopyToClipbaord classes={fillSVGButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid grid-flow-col gap-2 justify-items-center">
                <button aria-label="button" className={OutlineSVGButton}>
                  <HiOutlineCheckCircle className="h-5 w-5" />
                </button>
                <CopyToClipbaord classes={OutlineSVGButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="button" className={GhostSVGButton}>
                  <HiOutlineCheckCircle className="h-5 w-5" />
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
        </div>
      </div>
    </section>
  )
}
