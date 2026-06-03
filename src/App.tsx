import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { FeatureCards } from './components/FeatureCards'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  )
}

export default App
