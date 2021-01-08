import { useContext } from 'react'
import { HiCurrencyDollar } from 'react-icons/hi'
import { GlobalContext } from '../../context/GlobalState'
import CopyToClipbaord from './CopyToClipboard'

export default function LightOnLightDarkOnDark() {
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

  const fillTextButton = `select-none focus:outline-none focus:ring transition ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} bg-${color}-200 text-${color}-900 dark:bg-${color}-900 dark:text-${color}-50 hover:bg-${color}-100 dark:hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-200 dark:focus:bg-${color}-900`
  const OutlineTextButton = `select-none focus:outline-none focus:ring transition border-2 ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} border-${color}-600 dark:border-${color}-300 text-${color}-900 dark:text-${color}-50 hover:bg-${color}-100 dark:hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-200 dark:focus:bg-${color}-900`
  const GhostTextButton = `select-none focus:outline-none focus:ring transition ${fontWeight} ${paddingX} ${paddingY} ${textTransform} ${rounded} text-${color}-900 dark:text-${color}-50 hover:bg-${color}-100 dark:hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-200 dark:focus:bg-${color}-900`

  const fillSVGButton = `focus:outline-none focus:ring transition ${padding} ${rounded} bg-${color}-200 text-${color}-900 dark:bg-${color}-900 dark:text-${color}-50 hover:bg-${color}-100 dark:hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-200 dark:focus:bg-${color}-900`
  const OutlineSVGButton = `focus:outline-none focus:ring transition border-2 ${padding} ${rounded} border-${color}-600 dark:border-${color}-300 text-${color}-900 dark:text-${color}-50 hover:bg-${color}-100 dark:hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-200 dark:focus:bg-${color}-900`
  const GhostSVGButton = `focus:outline-none focus:ring transition ${padding} ${rounded} text-${color}-900 dark:text-${color}-50 hover:bg-${color}-100 dark:hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-200 dark:focus:bg-${color}-900`

  return (
    <section className="mx-auto max-w-screen-lg p-2">
      <header>
        <h1 className="text-lg font-bold">
          Light on Light Mode, Dark on Dark Mode
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
                  <HiCurrencyDollar className="h-5 w-5" />
                </button>
                <CopyToClipbaord classes={fillSVGButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="Close" className={OutlineSVGButton}>
                  <HiCurrencyDollar className="h-5 w-5" />
                </button>
                <CopyToClipbaord classes={OutlineSVGButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="Close" className={GhostSVGButton}>
                  <HiCurrencyDollar className="h-5 w-5" />
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
