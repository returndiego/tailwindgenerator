import ColorSelector from './ColorSelector'
import BorderSelector from './BorderSelector'
import RoundedSelector from './RoundedSelector'
import PaddingYSelector from './PaddingYSelector'
import PaddingXSelector from './PaddingXSelector'
import PaddingSelector from './PaddingSelector'
import FontWeightSelector from './FontWeightSelector'
import LightOnly from './LightOnly'
import DarkOnly from './DarkOnly'
import LightOnLightDarkOnDark from './LightOnLightDarkOnDark'
import DarkOnLightLightOnDark from './DarkOnLightLightOnDark'
import Inputs from '../inputs/Inputs'

export default function Main() {
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
        <section className="grid gap-6 sm:grid-cols-3 lg:grid-cols-4">
          <ColorSelector />
          <BorderSelector />
          <RoundedSelector />
          <PaddingYSelector />
          <PaddingXSelector />
          <PaddingSelector />
          <FontWeightSelector />
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
