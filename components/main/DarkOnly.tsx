import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { HiAdjustments, HiOutlineClipboardCopy } from 'react-icons/hi'

export default function DarkOnly() {
  const { state, dispatch } = useContext(GlobalContext)
  const { color, fontWeight, paddingY, paddingX, rounded, padding } = state
  return (
    <section className="mx-auto max-w-screen-lg p-2">
      <header>
        <h1 className="text-lg font-bold">Dark Only</h1>
      </header>
      <div className="table mx-auto rounded shadow-md overflow-hidden border-2 bg-gray-100 text-gray-900 mt-5">
        <header className="table-header-group">
          <section className="table-row">
            <div className="py-1 px-4 table-cell text-center">Type</div>
            <div className="py-1 px-4 table-cell text-center ">
              <div className="grid justify-items-center">
                <button
                  className="flex gap-2 items-center font-semibold"
                  onClick={() =>
                    dispatch({ type: 'CLIPBOARD', payload: 'TODO' })
                  }
                >
                  <p>Fill</p>
                  <HiOutlineClipboardCopy className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="py-1 px-4 table-cell text-center">
              <div className="grid justify-items-center">
                <button
                  className="flex gap-2 items-center font-semibold"
                  onClick={() =>
                    dispatch({ type: 'CLIPBOARD', payload: 'TODO' })
                  }
                >
                  <p>Outline</p>
                  <HiOutlineClipboardCopy className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="py-1 px-4 table-cell text-center">
              <div className="grid justify-items-center">
                <button
                  className="flex gap-2 items-center font-semibold"
                  onClick={() =>
                    dispatch({ type: 'CLIPBOARD', payload: 'TODO' })
                  }
                >
                  <p>Ghost</p>
                  <HiOutlineClipboardCopy className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>
        </header>
        <div className="table-row-group">
          <section className="table-row">
            <div className="py-1 px-4 table-cell align-middle">Text</div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid justify-items-center">
                <button
                  aria-label="Close"
                  className={`transition focus:outline-none ${fontWeight} ${paddingX} ${paddingY} ${rounded} bg-${color}-900 text-${color}-50 focus:ring hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-900`}
                >
                  Button
                </button>
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid justify-items-center">
                <button
                  aria-label="Close"
                  className={`border-2 transition focus:outline-none focus:ring ${fontWeight} ${paddingX} ${paddingY} ${rounded} border-${color}-300 text-${color}-800 hover:bg-${color}-800 hover:text-${color}-50 focus:text-${color}-50 focus:ring-${color}-500 focus:bg-${color}-900`}
                >
                  Button
                </button>
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid justify-items-center">
                <button
                  aria-label="Close"
                  className={`transition focus:outline-none focus:ring ${fontWeight} ${paddingX} ${paddingY} ${rounded} text-${color}-800 hover:bg-${color}-800 hover:text-${color}-50 focus:text-${color}-50 focus:ring-${color}-500 focus:bg-${color}-900`}
                >
                  Button
                </button>
              </div>
            </div>
          </section>
          <section className="table-row">
            <div className="py-1 px-4 table-cell align-middle">SVG</div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid justify-items-center">
                <button
                  aria-label="Close"
                  className={`transition focus:outline-none ${padding} ${rounded} bg-${color}-900 text-${color}-50 focus:ring hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-900`}
                >
                  <HiAdjustments className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid justify-items-center">
                <button
                  aria-label="Close"
                  className={`border-2 transition focus:outline-none focus:ring ${padding} ${rounded} border-${color}-300 text-${color}-800 hover:bg-${color}-800 hover:text-${color}-50 focus:text-${color}-50 focus:ring-${color}-500 focus:bg-${color}-900`}
                >
                  <HiAdjustments className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid justify-items-center">
                <button
                  aria-label="Close"
                  className={`transition focus:outline-none focus:ring ${padding} ${rounded} text-${color}-900 hover:bg-${color}-800 hover:text-${color}-50 focus:text-${color}-50 focus:ring-${color}-500 focus:bg-${color}-900`}
                >
                  <HiAdjustments className="h-5 w-5" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
