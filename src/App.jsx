import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Research from './components/Research'
import Publications from './components/Publications'
import CV from './components/CV'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Research />
        <Publications />
        <CV />
      </main>
      <Footer />
    </>
  )
}

export default App
