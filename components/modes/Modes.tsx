import LightOnly from './LightOnly'
import DarkOnly from './DarkOnly'
import LightOnLightDarkOnDark from './LightOnLightDarkOnDark'
import DarkOnLightLightOnDark from './DarkOnLightLightOnDark'
import Inputs from './Inputs'

export default function Modes() {
  return (
    <section>
      <div className="grid lg:grid-cols-2">
        <LightOnly />
        <DarkOnly />
      </div>
      <div className="grid lg:grid-cols-2">
        <LightOnLightDarkOnDark />
        <DarkOnLightLightOnDark />
      </div>
      <Inputs />
    </section>
  )
}
