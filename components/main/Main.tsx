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
      <ColorSelector />
      <RoundedSelector />
      <PaddingYSelector />
      <PaddingXSelector />
      <PaddingSelector />
      <FontWeightSelector />
      <LightOnly />
      <LightOnlySVG />
      <DarkOnly />
      <DarkOnlySVG />
      <LightOnLightDarkOnDark />
      <LightOnLightDarkOnDarkSVG />
      <DarkOnLightLightOnDark />
      <DarkOnLightLightOnDarkSVG />
    </main>
  )
}
