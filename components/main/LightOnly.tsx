import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { HiAdjustments } from 'react-icons/hi'
import CopyToClipbaord from './CopyToClipboard'

export default function LightOnly() {
  const { state } = useContext(GlobalContext)
  const { color, fontWeight, paddingY, paddingX, rounded, padding } = state

  const fillTextButton = `transition focus:outline-none ${fontWeight} ${paddingX} ${paddingY} ${rounded} bg-${color}-200 text-${color}-900 focus:ring hover:bg-${color}-100 focus:ring-${color}-500 focus:bg-${color}-200`
  const OutlineTextButton = `border-2 transition focus:outline-none focus:ring ${fontWeight} ${paddingX} ${paddingY} ${rounded} border-${color}-600 text-${color}-900 hover:bg-${color}-100 hover:text-${color}-900 focus:text-${color}-900 focus:ring-${color}-500 focus:bg-${color}-200`
  const GhostTextButton = `transition focus:outline-none focus:ring ${fontWeight} ${paddingX} ${paddingY} ${rounded} text-${color}-900 hover:bg-${color}-100 hover:text-${color}-900 focus:text-${color}-900 focus:ring-${color}-500 focus:bg-${color}-200`

  const fillSVGButton = `transition focus:outline-none ${padding} ${rounded} bg-${color}-200 text-${color}-900 focus:ring hover:bg-${color}-100 focus:ring-${color}-500 focus:bg-${color}-200`
  const OutlineSVGButton = `border-2 transition focus:outline-none focus:ring ${padding} ${rounded} border-${color}-600 text-${color}-900 hover:bg-${color}-100 hover:text-${color}-900 focus:text-${color}-900 focus:ring-${color}-500 focus:bg-${color}-200`
  const GhostSVGButton = `transition focus:outline-none focus:ring ${padding} ${rounded} text-${color}-900 hover:bg-${color}-100 hover:text-${color}-900 focus:text-${color}-900 focus:ring-${color}-500 focus:bg-${color}-200`

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
              <div className="grid grid-flow-col gap-2 place-items-center">
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
                  <HiAdjustments className="h-5 w-5" />
                </button>
                <CopyToClipbaord classes={fillSVGButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="Close" className={OutlineSVGButton}>
                  <HiAdjustments className="h-5 w-5" />
                </button>
                <CopyToClipbaord classes={OutlineSVGButton} />
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="flex gap-2 justify-items-center">
                <button aria-label="Close" className={GhostSVGButton}>
                  <HiAdjustments className="h-5 w-5" />
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
