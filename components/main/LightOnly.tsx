import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { HiAdjustments, HiOutlineClipboardCopy } from 'react-icons/hi'

export default function LightOnly() {
  const { state, dispatch } = useContext(GlobalContext)
  const { color, fontWeight, paddingY, paddingX, rounded, padding } = state
  return (
    <section className="mx-auto max-w-screen-lg p-2">
      <header>
        <h1 className="text-lg font-bold">Light Theme Only (Text)</h1>
      </header>
      <div className="table mx-auto rounded shadow-md overflow-hidden border-2 mt-5">
        <header className="table-header-group">
          <section className="table-row ">
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
                  className={`transition focus:outline-none ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `bg-${color}-200 text-${color}-900 focus:ring hover:bg-${color}-100 focus:ring-${color}-500 focus:bg-${color}-200`
                      : 'bg-blue-200 text-blue-900 focus:ring hover:bg-blue-100 focus:ring-blue-500 focus:bg-blue-200'
                  }`}
                >
                  Button
                </button>
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid justify-items-center">
                <button
                  aria-label="Close"
                  className={`border-2 transition focus:outline-none focus:ring ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `border-${color}-600 text-${color}-900 hover:bg-${color}-100 hover:text-${color}-900 focus:text-${color}-900 focus:ring-${color}-500 focus:bg-${color}-200`
                      : 'border-blue-600 text-blue-900 hover:bg-blue-100 hover:text-blue-900 focus:text-blue-900 focus:ring-blue-500 focus:bg-blue-200'
                  }`}
                >
                  Button
                </button>
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid justify-items-center">
                <button
                  aria-label="Close"
                  className={`transition focus:outline-none focus:ring ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `text-${color}-900 hover:bg-${color}-100 hover:text-${color}-900 focus:text-${color}-900 focus:ring-${color}-500 focus:bg-${color}-200`
                      : 'text-blue-900 hover:bg-blue-100 hover:text-blue-900 focus:text-blue-900 focus:ring-blue-500 focus:bg-blue-200'
                  }`}
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
                  className={`transition focus:outline-none ${padding} ${rounded} ${
                    color
                      ? `bg-${color}-200 text-${color}-900 focus:ring hover:bg-${color}-100 focus:ring-${color}-500 focus:bg-${color}-200`
                      : 'bg-blue-200 text-blue-900 focus:ring hover:bg-blue-100 focus:ring-blue-500 focus:bg-blue-200'
                  }`}
                >
                  <HiAdjustments className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid justify-items-center">
                <button
                  aria-label="Close"
                  className={`border-2 transition focus:outline-none focus:ring ${padding} ${rounded} ${
                    color
                      ? `border-${color}-600 text-${color}-900 hover:bg-${color}-100 hover:text-${color}-900 focus:text-${color}-900 focus:ring-${color}-500 focus:bg-${color}-200`
                      : 'border-blue-600 text-blue-900 hover:bg-blue-100 hover:text-blue-900 focus:text-blue-900 focus:ring-blue-500 focus:bg-blue-200'
                  }`}
                >
                  <HiAdjustments className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid justify-items-center">
                <button
                  aria-label="Close"
                  className={`transition focus:outline-none focus:ring ${padding} ${rounded} ${
                    color
                      ? `text-${color}-900 hover:bg-${color}-100 hover:text-${color}-900 focus:text-${color}-900 focus:ring-${color}-500 focus:bg-${color}-200`
                      : 'text-blue-900 hover:bg-blue-100 hover:text-blue-900 focus:text-blue-900 focus:ring-blue-500 focus:bg-blue-200'
                  }`}
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
