import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { HiAdjustments } from 'react-icons/hi'

export default function DarkOnlySVG() {
  const { state } = useContext(GlobalContext)
  const { color, padding, rounded } = state
  return (
    <section className="mx-auto max-w-screen-lg p-2">
      <header>
        <h1 className="text-lg font-bold">Dark Theme Only (SVG)</h1>
      </header>
      <div className="table mx-auto ${padding} ${rounded} shadow-md overflow-hidden">
        <header className="table-header-group">
          <section className="table-row bg-purple-300 ">
            <div className="py-1 px-4 table-cell text-center">State</div>
            <div className="py-1 px-4 table-cell text-center">Fill</div>
            <div className="py-1 px-4 table-cell text-center">Outline</div>
            <div className="py-1 px-4 table-cell text-center">Ghost</div>
          </section>
        </header>
        <div className="table-row-group">
          <section className="table-row">
            <div className="py-1 px-4 table-cell align-middle">Default</div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid justify-items-center">
                <button
                  aria-label="Close"
                  className={`focus:outline-none transition focus:ring ${padding} ${rounded} ${
                    color
                      ? `bg-${color}-900 text-${color}-50 hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-900`
                      : 'bg-blue-900 text-blue-50 hover:bg-blue-800 focus:ring-blue-500 focus:bg-blue-900'
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
                  className={`focus:outline-none transition focus:ring border-2 ${padding} ${rounded} ${
                    color
                      ? `border-${color}-300 text-${color}-800 hover:bg-${color}-800 hover:text-${color}-50 focus:ring-${color}-500 focus:bg-${color}-900`
                      : 'border-blue-300 text-blue-800 hover:bg-blue-800 hover:text-blue-50 focus:ring-blue-500 focus:bg-blue-900'
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
                  className={`focus:outline-none transition focus:ring ${padding} ${rounded} ${
                    color
                      ? `text-${color}-800 hover:bg-${color}-800 hover:text-${color}-50 focus:ring-${color}-500 focus:bg-${color}-900`
                      : 'text-blue-800 hover:bg-blue-800 hover:text-blue-50 focus:ring-blue-500 focus:bg-blue-900'
                  }`}
                >
                  <HiAdjustments className="h-5 w-5" />
                </button>
              </div>
            </div>
          </section>
          <section className="table-row">
            <div className="py-1 px-4 table-cell align-middle">Hover</div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid justify-items-center">
                <button
                  aria-label="Close"
                  className={`focus:outline-none transition focus:ring ${padding} ${rounded} ${
                    color
                      ? `text-${color}-100 bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-900`
                      : 'text-blue-100 bg-blue-800 focus:ring-blue-500 focus:bg-blue-900'
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
                  className={`focus:outline-none transition focus:ring border-2 ${padding} ${rounded} ${
                    color
                      ? `border-${color}-300 text-${color}-100 bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-900`
                      : 'border-blue-300 text-blue-100 bg-blue-800 focus:ring-blue-500 focus:bg-blue-900'
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
                  className={`focus:outline-none transition focus:ring ${padding} ${rounded} ${
                    color
                      ? `text-${color}-100 bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-900`
                      : 'text-blue-100 bg-blue-800 focus:ring-blue-500 focus:bg-blue-900'
                  }`}
                >
                  <HiAdjustments className="h-5 w-5" />
                </button>
              </div>
            </div>
          </section>
          <section className="table-row">
            <div className="py-1 px-4 table-cell align-middle">Focus</div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid justify-items-center">
                <button
                  aria-label="Close"
                  className={`focus:outline-none transition focus:ring ${padding} ${rounded} ${
                    color
                      ? `text-${color}-100 ring-${color}-500 bg-${color}-900`
                      : 'text-blue-100 ring-blue-500 bg-blue-900'
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
                  className={`focus:outline-none transition focus:ring border-2 ${padding} ${rounded} ${
                    color
                      ? `border-${color}-300 text-${color}-100 ring-${color}-500 bg-${color}-900`
                      : 'border-blue-300 text-blue-100 ring-blue-500 bg-blue-900'
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
                  className={`focus:outline-none transition focus:ring ${padding} ${rounded} ${
                    color
                      ? `text-${color}-100 ring-${color}-500 bg-${color}-900`
                      : 'text-blue-100 ring-blue-500 bg-blue-900'
                  }`}
                >
                  <HiAdjustments className="h-5 w-5" />
                </button>
              </div>
            </div>
          </section>
          <section className="table-row">
            <div className="py-1 px-4 table-cell align-middle">Disabled</div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid justify-items-center">
                <button
                  aria-label="Close"
                  className={`focus:outline-none opacity-50 cursor-not-allowed ${padding} ${rounded} ${
                    color
                      ? `bg-${color}-900 text-${color}-50`
                      : 'bg-blue-900 text-blue-50'
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
                  className={`focus:outline-none opacity-50 cursor-not-allowed border-2 ${padding} ${rounded} ${
                    color
                      ? `border-${color}-300 text-${color}-800`
                      : 'border-blue-300 text-blue-800'
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
                  className={`focus:outline-none opacity-50 cursor-not-allowed ${padding} ${rounded} ${
                    color ? `text-${color}-800` : 'text-blue-800'
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
