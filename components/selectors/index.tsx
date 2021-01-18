import ColorSelector from './ColorSelector'
import BorderSelector from './BorderSelector'
import RoundedSelector from './RoundedSelector'
import TextTransformSelector from './TextTransformSelector'
import PaddingYSelector from './PaddingYSelector'
import PaddingXSelector from './PaddingXSelector'
import PaddingSelector from './PaddingSelector'
import FontWeightSelector from './FontWeightSelector'

export default function Index() {
  return (
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
  )
}
