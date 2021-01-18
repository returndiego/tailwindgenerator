import Selectors from './selectors/Selectors'
import Modes from './modes/Modes'
import { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Main() {
  const { dispatch } = useContext(GlobalContext)
  const colors = [
    'blueGray',
    'coolGray',
    'gray',
    'trueGray',
    'warmGray',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'lightBlue',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
  ]
  useEffect(() => {
    // Choose a random color on ComponentDidMount
    dispatch({
      type: 'COLOR',
      payload: colors[Math.floor(Math.random() * colors.length)],
    })
  }, [])

  return (
    <main>
      <header className="mx-auto max-w-prose text-center p-2">
        <p className="text-lg font-medium mt-1">
          Opinionated TailwindCSS generator for buttons, labels and inputs using
          some sweet constraints.
        </p>
      </header>
      <Selectors />
      <Modes />
    </main>
  )
}
