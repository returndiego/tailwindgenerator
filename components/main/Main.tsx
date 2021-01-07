import ColorSelector from './ColorSelector'
import RoundedSelector from './RoundedSelector'
import PaddingYSelector from './PaddingYSelector'
import PaddingXSelector from './PaddingXSelector'
import PaddingSelector from './PaddingSelector'
import FontWeightSelector from './FontWeightSelector'
import LightOnly from './LightOnly'
import DarkOnly from './DarkOnly'
import LightOnLightDarkOnDark from './LightOnLightDarkOnDark'
import DarkOnLightLightOnDark from './DarkOnLightLightOnDark'

export default function Main() {
  return (
    <main>
      <div className="mx-auto max-w-screen-xl p-2">
        <section className="grid gap-6 grid-cols-7">
          <ColorSelector />
          <RoundedSelector />
          <PaddingYSelector />
          <PaddingXSelector />
          <PaddingSelector />
          <FontWeightSelector />
        </section>
      </div>
      <LightOnly />
      <DarkOnly />
      <LightOnLightDarkOnDark />
      <DarkOnLightLightOnDark />
    </main>
  )
}
