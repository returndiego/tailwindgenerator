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
      <header className="mx-auto max-w-screen-lg p-2">
        <h1>Handpicked settings to quickly design components</h1>
        <p>
          The point is to avoid having too many options. You will also no longer
          have to check the color contrast!
        </p>
      </header>
      <div className="mx-auto max-w-screen-xl p-2">
        <section className="grid gap-6 md:grid-cols-2">
          <ColorSelector />
          <div className="space-y-4 max-w-sm">
            <BorderSelector />
            <RoundedSelector />
            <PaddingYSelector />
            <TextTransformSelector />
            <PaddingXSelector />
            <PaddingSelector />
            <FontWeightSelector />
          </div>
        </section>
      </div>
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
