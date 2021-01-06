import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export default function LightOnLightDarkOnDark() {
  const { state } = useContext(GlobalContext)
  const { color, fontWeight, paddingY, paddingX, rounded } = state
  return (
    <section className="mx-auto max-w-screen-lg p-2">
      <header>
        <h1 className="text-lg font-bold">
          Light on Light Theme Only, Dark on Dark Theme (Text)
        </h1>
      </header>

      <div className="table mx-auto rounded shadow-md overflow-hidden">
        <header className="table-header-group">
          <section className="table-row bg-purple-300 dark:bg-blue-700">
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
                  className={`focus:outline-none focus:ring transition ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `bg-${color}-200 text-${color}-900 dark:bg-${color}-900 dark:text-${color}-50 hover:bg-${color}-100 dark:hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-200 dark:focus:bg-${color}-900`
                      : 'bg-blue-200 text-blue-900 dark:bg-blue-900 dark:text-blue-50 hover:bg-blue-100 dark:hover:bg-blue-800 focus:ring-blue-500 focus:bg-blue-200 dark:focus:bg-blue-900'
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
                  className={`focus:outline-none focus:ring transition border-2 ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `border-${color}-600 dark:border-${color}-300 text-${color}-900 dark:text-${color}-50 hover:bg-${color}-100 dark:hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-200 dark:focus:bg-${color}-900`
                      : 'border-blue-600 dark:border-blue-300 text-blue-900 dark:text-blue-50 hover:bg-blue-100 dark:hover:bg-blue-800 focus:ring-blue-500 focus:bg-blue-200 dark:focus:bg-blue-900'
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
                  className={`focus:outline-none focus:ring transition ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `text-${color}-900 dark:text-${color}-50 hover:bg-${color}-100 dark:hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-200 dark:focus:bg-${color}-900`
                      : 'text-blue-900 dark:text-blue-50 hover:bg-blue-100 dark:hover:bg-blue-800 focus:ring-blue-500 focus:bg-blue-200 dark:focus:bg-blue-900'
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
                  className={`focus:outline-none focus:ring transition ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `text-${color}-900 dark:text-${color}-50 bg-${color}-100 dark:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-200 dark:focus:bg-${color}-900`
                      : 'text-blue-900 dark:text-blue-50 bg-blue-100 dark:bg-blue-800 focus:ring-blue-500 focus:bg-blue-200 dark:focus:bg-blue-900'
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
                  className={`focus:outline-none focus:ring transition border-2 ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `border-${color}-600 dark:border-${color}-300 text-${color}-900 dark:text-${color}-50 bg-${color}-100 dark:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-200 dark:focus:bg-${color}-900`
                      : 'border-blue-600 dark:border-blue-300 text-blue-900 dark:text-blue-50 bg-blue-100 dark:bg-blue-800 focus:ring-blue-500 focus:bg-blue-200 dark:focus:bg-blue-900'
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
                  className={`focus:outline-none focus:ring transition ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `text-${color}-900 dark:text-${color}-50 bg-${color}-100 dark:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-200 dark:focus:bg-${color}-900`
                      : 'text-blue-900 dark:text-blue-50 bg-blue-100 dark:bg-blue-800 focus:ring-blue-500 focus:bg-blue-200 dark:focus:bg-blue-900'
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
                  className={`ring focus:outline-none transition ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `text-${color}-900 dark:text-${color}-50 ring-${color}-500 bg-${color}-200 dark:bg-${color}-900`
                      : 'text-blue-900 dark:text-blue-50 ring-blue-500 bg-blue-200 dark:bg-blue-900'
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
                  className={`ring focus:outline-none transition border-2 ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `border-${color}-600 dark:border-${color}-300 text-${color}-900 dark:text-${color}-50 ring-${color}-500 bg-${color}-200 dark:bg-${color}-900`
                      : 'border-blue-600 dark:border-blue-300 text-blue-900 dark:text-blue-50 ring-blue-500 bg-blue-200 dark:bg-blue-900'
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
                  className={`ring focus:outline-none transition ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `text-${color}-900 dark:text-${color}-50 ring-${color}-500 bg-${color}-200 dark:bg-${color}-900`
                      : 'text-blue-900 dark:text-blue-50 ring-blue-500 bg-blue-200 dark:bg-blue-900'
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
                  className={`focus:outline-none opacity-50 cursor-not-allowed ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `bg-${color}-200 text-${color}-900 dark:bg-${color}-900 dark:text-${color}-50`
                      : 'bg-blue-200 text-blue-900 dark:bg-blue-900 dark:text-blue-50'
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
                  className={`focus:outline-none opacity-50 cursor-not-allowed border-2 ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `border-${color}-600 dark:border-${color}-300 text-${color}-900 dark:text-${color}-50`
                      : 'border-blue-600 dark:border-blue-300 text-blue-900 dark:text-blue-50'
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
                  className={`focus:outline-none opacity-50 cursor-not-allowed ${fontWeight} ${paddingX} ${paddingY} ${rounded} ${
                    color
                      ? `text-${color}-900 dark:text-${color}-50`
                      : 'text-blue-900 dark:text-blue-50'
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
