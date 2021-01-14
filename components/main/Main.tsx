import ColorSelector from './ColorSelector'
import BorderSelector from './BorderSelector'
import RoundedSelector from './RoundedSelector'
import TextTransformSelector from './TextTransformSelector'
import PaddingYSelector from './PaddingYSelector'
import PaddingXSelector from './PaddingXSelector'
import PaddingSelector from './PaddingSelector'
import FontWeightSelector from './FontWeightSelector'
import LightOnly from './LightOnly'
import DarkOnly from './DarkOnly'
import LightOnLightDarkOnDark from './LightOnLightDarkOnDark'
import DarkOnLightLightOnDark from './DarkOnLightLightOnDark'
import Inputs from '../inputs/Inputs'
import { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

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
      <section className="mx-auto max-w-screen-lg p-2">
        <ColorSelector />
        <div className="mt-3">
          <header>
            <h1 className="text-xl font-bold">Selectors</h1>
          </header>
          <div className="md:grid md:grid-cols-2 md:gap-3 max-w-screen-md mx-auto">
            <section className="space-y-3">
              <BorderSelector />
              <RoundedSelector />
              <PaddingYSelector />
            </section>
            <section className="space-y-3 mt-3 md:mt-0">
              <PaddingXSelector />
              <PaddingSelector />
              <FontWeightSelector />
            </section>
          </div>
          <div className="mt-3">
            <TextTransformSelector />
          </div>
        </div>
      </section>
      <div className="grid lg:grid-cols-2">
        <LightOnly />
        <DarkOnly />
      </div>
      <div className="grid lg:grid-cols-2">
        <LightOnLightDarkOnDark />
        <DarkOnLightLightOnDark />
      </div>
      <Inputs />
    </main>
  )
}
