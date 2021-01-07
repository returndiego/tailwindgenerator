import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { HiAdjustments, HiOutlineClipboardCopy } from 'react-icons/hi'

export default function LightOnDarkDarkOnLightSVG() {
  const { state, dispatch } = useContext(GlobalContext)
  const { color, padding, rounded } = state
  return (
    <section className="mx-auto max-w-screen-lg p-2">
      <header>
        <h1 className="text-lg font-bold">
          Dark on Light Theme, Light on Dark Theme (SVG)
        </h1>
      </header>
      <div className="table mx-auto rounded shadow-md overflow-hidden border-2 mt-5">
        <header className="table-header-group">
          <section className="table-row">
            <div className="py-1 px-4 table-cell text-center">State</div>
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
            <div className="py-1 px-4 table-cell align-middle">Default</div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid justify-items-center">
                <button
                  aria-label="Close"
                  className={`transition focus:ring focus:outline-none ${padding} ${rounded} ${
                    color
                      ? `dark:bg-${color}-200 dark:text-${color}-900 bg-${color}-900 text-${color}-50 dark:hover:bg-${color}-100 hover:bg-${color}-800 focus:ring-${color}-500 dark:focus:bg-${color}-200 focus:bg-${color}-900`
                      : 'dark:bg-blue-200 dark:text-blue-900 bg-blue-900 text-blue-50 dark:hover:bg-blue-100 hover:bg-blue-800 focus:ring-blue-500 dark:focus:bg-blue-200 focus:bg-blue-900'
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
                  className={`transition focus:ring focus:outline-none border-2 ${padding} ${rounded} ${
                    color
                      ? `text-${color}-900 dark:border-${color}-600 border-${color}-300 dark:text-${color}-100 dark:hover:bg-${color}-100 hover:bg-${color}-800 dark:hover:text-${color}-900 hover:text-${color}-100 focus:ring-${color}-500 dark:focus:bg-${color}-200 dark:focus:text-${color}-900 focus:text-${color}-100 focus:bg-${color}-900`
                      : 'text-blue-900 dark:border-blue-600 border-blue-300 dark:text-blue-100 dark:hover:bg-blue-100 hover:bg-blue-800 dark:hover:text-blue-900 hover:text-blue-100 focus:ring-blue-500 dark:focus:bg-blue-200 dark:focus:text-blue-900 focus:text-blue-100 focus:bg-blue-900'
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
                  className={`transition focus:ring focus:outline-none ${padding} ${rounded} ${
                    color
                      ? `text-${color}-900 dark:text-${color}-100 dark:hover:bg-${color}-100 hover:bg-${color}-800 dark:hover:text-${color}-900 hover:text-${color}-100 focus:ring-${color}-500 dark:focus:bg-${color}-200 dark:focus:text-${color}-900 focus:text-${color}-100 focus:bg-${color}-900`
                      : 'text-blue-900 dark:text-blue-100 dark:hover:bg-blue-100 hover:bg-blue-800 dark:hover:text-blue-900 hover:text-blue-100 focus:ring-blue-500 dark:focus:bg-blue-200 dark:focus:text-blue-900 focus:text-blue-100 focus:bg-blue-900'
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
                  className={`transition focus:ring focus:outline-none ${padding} ${rounded} ${
                    color
                      ? `dark:text-${color}-900 text-${color}-50 dark:bg-${color}-100 bg-${color}-800 focus:ring-${color}-500 dark:focus:bg-${color}-200 focus:bg-${color}-900`
                      : 'dark:text-blue-900 text-blue-50 dark:bg-blue-100 bg-blue-800 focus:ring-blue-500 dark:focus:bg-blue-200 focus:bg-blue-900'
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
                      ? `dark:border-${color}-600 border-${color}-300 dark:bg-${color}-100 bg-${color}-800 dark:text-${color}-900 text-${color}-100`
                      : 'dark:border-blue-600 border-blue-300 dark:bg-blue-100 bg-blue-800 dark:text-blue-900 text-blue-100'
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
                      ? `dark:bg-${color}-100 bg-${color}-800 dark:text-${color}-900 text-${color}-100`
                      : 'dark:bg-blue-100 bg-blue-800 dark:text-blue-900 text-blue-100'
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
                  className={`transition ring focus:outline-none ${padding} ${rounded} ${
                    color
                      ? `dark:text-${color}-900 text-${color}-50 dark:hover:bg-${color}-100 hover:bg-${color}-800 ring-${color}-500 dark:bg-${color}-200 bg-${color}-900`
                      : 'dark:text-blue-900 text-blue-50 dark:hover:bg-blue-100 hover:bg-blue-800 ring-blue-500 dark:bg-blue-200 bg-blue-900'
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
                  className={`transition ring focus:outline-none border-2 ${padding} ${rounded} ${
                    color
                      ? `dark:border-${color}-600 border-${color}-300 dark:hover:bg-${color}-100 hover:bg-${color}-800 dark:hover:text-${color}-900 hover:text-${color}-100 ring-${color}-500 dark:bg-${color}-200 dark:text-${color}-900 text-${color}-100 bg-${color}-900`
                      : 'dark:border-blue-600 border-blue-300 dark:hover:bg-blue-100 hover:bg-blue-800 dark:hover:text-blue-900 hover:text-blue-100 ring-blue-500 dark:bg-blue-200 dark:text-blue-900 text-blue-100 bg-blue-900'
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
                  className={`transition ring focus:outline-none ${padding} ${rounded} ${
                    color
                      ? `dark:hover:bg-${color}-100 hover:bg-${color}-800 dark:hover:text-${color}-900 hover:text-${color}-100 ring-${color}-500 dark:bg-${color}-200 dark:text-${color}-900 text-${color}-100 bg-${color}-900`
                      : 'dark:hover:bg-blue-100 hover:bg-blue-800 dark:hover:text-blue-900 hover:text-blue-100 ring-blue-500 dark:bg-blue-200 dark:text-blue-900 text-blue-100 bg-blue-900'
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
                      ? `dark:bg-${color}-200 dark:text-${color}-900 bg-${color}-900 text-${color}-50`
                      : 'dark:bg-blue-200 dark:text-blue-900 bg-blue-900 text-blue-50'
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
                      ? `text-${color}-900 dark:border-${color}-600 border-${color}-300 dark:text-${color}-100`
                      : 'text-blue-900 dark:border-blue-600 border-blue-300 dark:text-blue-100'
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
                    color
                      ? `text-${color}-900 dark:text-${color}-100`
                      : 'text-blue-900 dark:text-blue-100'
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
