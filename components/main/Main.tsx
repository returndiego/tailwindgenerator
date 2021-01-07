import ColorSelector from './ColorSelector'
import RoundedSelector from './RoundedSelector'
import PaddingYSelector from './PaddingYSelector'
import PaddingXSelector from './PaddingXSelector'
import PaddingSelector from './PaddingSelector'
import FontWeightSelector from './FontWeightSelector'
import LightOnly from './LightOnly'
import LightOnlySVG from './LightOnlySVG'
import DarkOnly from './DarkOnly'
import DarkOnlySVG from './DarkOnlySVG'
import LightOnLightDarkOnDark from './LightOnLightDarkOnDark'
import LightOnLightDarkOnDarkSVG from './LightOnLightDarkOnDarkSVG'
import DarkOnLightLightOnDark from './DarkOnLightLightOnDark'
import DarkOnLightLightOnDarkSVG from './DarkOnLightLightOnDarkSVG'

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

      <div className="mx-auto max-w-screen-xl">
        <section className="grid gap-6 lg:grid-cols-2">
          <LightOnly />
          <LightOnlySVG />
        </section>
      </div>
      <div className="mx-auto max-w-screen-xl">
        <section className="grid gap-6 lg:grid-cols-2">
          <DarkOnly />
          <DarkOnlySVG />
        </section>
      </div>
      <div className="mx-auto max-w-screen-xl">
        <section className="grid gap-6 lg:grid-cols-2">
          <LightOnLightDarkOnDark />
          <LightOnLightDarkOnDarkSVG />
        </section>
      </div>
      <div className="mx-auto max-w-screen-xl">
        <section className="grid gap-6 lg:grid-cols-2">
          <DarkOnLightLightOnDark />
          <DarkOnLightLightOnDarkSVG />
        </section>
      </div>
    </main>
  )
}
