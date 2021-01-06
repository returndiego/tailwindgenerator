import { HiLightBulb } from 'react-icons/hi'

export default function Nav() {
  return (
    <nav className="bg-gray-100 dark:bg-gray-900">
      <div className="h-12 px-4 mx-auto max-w-screen-lg flex justify-between items-center">
        <section>
          <HiLightBulb className="w-10 h-10 text-yellow-500 dark:text-yellow-200" />
        </section>
      </div>
    </nav>
  )
}
