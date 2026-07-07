import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'
import CasePage from './components/CasePage/CasePage'
import { CASES } from './cases'
import { usePath } from './router'

function App() {
  const path = usePath()

  const match = path.match(/^case\/([\w-]+)$/)
  const caseInfo = match ? CASES.find((c) => c.slug === match[1]) : undefined
  if (caseInfo) {
    return <CasePage info={caseInfo} />
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </div>
  )
}

export default App
