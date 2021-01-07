import { useContext } from 'react'
import { HiAdjustments, HiOutlineClipboardCopy } from 'react-icons/hi'
import { GlobalContext } from '../../context/GlobalState'

export default function LightOnLightDarkOnDark() {
  const { state, dispatch } = useContext(GlobalContext)
  const { color, fontWeight, paddingY, paddingX, rounded, padding } = state
  return (
    <section className="mx-auto max-w-screen-lg p-2">
      <header>
        <h1 className="text-lg font-bold">
          Light on Light Theme, Dark on Dark Theme (Text)
        </h1>
      </header>

      <div className="table mx-auto rounded shadow-md overflow-hidden border-2 mt-5">
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
            <div className="py-1 px-4 table-cell align-middle">SVG</div>
            <div className="py-1 px-4 table-cell align-middle">
              <div className="grid justify-items-center">
                <button
                  aria-label="Close"
                  className={`focus:outline-none focus:ring transition ${padding} ${rounded} ${
                    color
                      ? `bg-${color}-200 text-${color}-900 dark:bg-${color}-900 dark:text-${color}-50 hover:bg-${color}-100 dark:hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-200 dark:focus:bg-${color}-900`
                      : 'bg-blue-200 text-blue-900 dark:bg-blue-900 dark:text-blue-50 hover:bg-blue-100 dark:hover:bg-blue-800 focus:ring-blue-500 focus:bg-blue-200 dark:focus:bg-blue-900'
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
                  className={`focus:outline-none focus:ring transition border-2 ${padding} ${rounded} ${
                    color
                      ? `border-${color}-600 dark:border-${color}-300 text-${color}-900 dark:text-${color}-50 hover:bg-${color}-100 dark:hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-200 dark:focus:bg-${color}-900`
                      : 'border-blue-600 dark:border-blue-300 text-blue-900 dark:text-blue-50 hover:bg-blue-100 dark:hover:bg-blue-800 focus:ring-blue-500 focus:bg-blue-200 dark:focus:bg-blue-900'
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
                  className={`focus:outline-none focus:ring transition ${padding} ${rounded} ${
                    color
                      ? `text-${color}-900 dark:text-${color}-50 hover:bg-${color}-100 dark:hover:bg-${color}-800 focus:ring-${color}-500 focus:bg-${color}-200 dark:focus:bg-${color}-900`
                      : 'text-blue-900 dark:text-blue-50 hover:bg-blue-100 dark:hover:bg-blue-800 focus:ring-blue-500 focus:bg-blue-200 dark:focus:bg-blue-900'
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
