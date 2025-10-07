
import './App.css'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/projects'
import WorkProcess from './components/workProcess'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/skill'
import Blog from './components/Blog'
import Projectidea from './components/projectIdea'
function App() {

  return (
    <>
      <Header />
    <section className='gap-40  mt-20 mx-5 md:mx-20 lg:mx-50 flex flex-col'>
      <Hero />
      <About />
      <WorkProcess />
      <Portfolio />
    </section>
      <Projectidea />
    <section className='gap-40 relative mt-20 mx-5 md:mx-20 lg:mx-50 flex flex-col'>
      <Blog />
      <Skills />
      <Contact />
    </section>
      <Footer />
    </>
  )
}

export default App
