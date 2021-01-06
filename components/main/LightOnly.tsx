import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function LightOnly() {
  const { state } = useContext(GlobalContext)
  const { color, fontWeight, paddingY, paddingX, rounded } = state
  return (
    <section className="mx-auto max-w-screen-lg p-2">
      <header>
        <h1 className="text-lg font-bold">Light Theme Only (Text)</h1>
      </header>
      <div className="table mx-auto rounded shadow-md overflow-hidden">
        <header className="table-header-group">
          <section className="table-row ">
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
            <div className="py-1 px-4 table-cell align-middle">Hover</div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid justify-items-center">
                <button
                  aria-label="Close"
                  className={`transition focus:outline-none focus:ring ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `text-${color}-900 bg-${color}-100 focus:ring-${color}-500 focus:bg-${color}-200`
                      : 'text-blue-900 bg-blue-100 focus:ring-blue-500 focus:bg-blue-200'
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
                  className={`transition border-2 focus:outline-none focus:ring ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `border-${color}-600 text-${color}-900 bg-${color}-100 focus:ring-${color}-500 focus:bg-${color}-200`
                      : 'border-blue-600 text-blue-900 bg-blue-100 focus:ring-blue-500 focus:bg-blue-200'
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
                      ? `text-${color}-900 bg-${color}-100 focus:ring-${color}-500 focus:bg-${color}-200`
                      : 'text-blue-900 bg-blue-100 focus:ring-blue-500 focus:bg-blue-200'
                  }`}
                >
                  Button
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
                  className={`transition focus:outline-none ring ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `text-${color}-900 ring-${color}-500 bg-${color}-200`
                      : 'text-blue-900 ring-blue-500 bg-blue-200'
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
                  className={`transition border-2 focus:outline-none ring ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `border-${color}-600 hover:text-${color}-900 text-${color}-900 ring-${color}-500 bg-${color}-200`
                      : 'border-blue-600 hover:text-blue-900 text-blue-900 ring-blue-500 bg-blue-200'
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
                  className={`transition focus:outline-none ring ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `hover:text-${color}-900 text-${color}-900 ring-${color}-500 bg-${color}-200`
                      : 'hover:text-blue-900 text-blue-900 ring-blue-500 bg-blue-200'
                  }`}
                >
                  Button
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
                  className={`opacity-50 cursor-not-allowed focus:outline-none ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `bg-${color}-200 text-${color}-900`
                      : 'bg-blue-200 text-blue-900'
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
                  className={`opacity-50 cursor-not-allowed focus:outline-none border-2 ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `border-${color}-600 text-${color}-900`
                      : 'border-blue-600 text-blue-900'
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
                  className={`opacity-50 cursor-not-allowed focus:outline-none ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color ? `text-${color}-900` : 'text-blue-900'
                  }`}
                >
                  Button
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
