
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
import { useSelector } from 'react-redux'
import {type  RootState } from './state/store'
function App() {
  const theme = useSelector((state:RootState)=> state.theme)

  return (
    <div className={`${theme.theme === "light" ? "lightTheme" : "darkTheme"}`}>
      <Header />
    <section className='gap-20 mx-5 md:px-20 lg:mx-50 flex flex-col'>
      <Hero />
      <About />
      <WorkProcess />
      <Portfolio />
    </section>
      <Projectidea />
    <section className='gap-20 relative mt-10 mx-5 md:mx-20 lg:mx-50 flex flex-col'>
      <Blog />
      <Skills />
      <Contact />
    </section>
      <Footer />
    </div>
  )
}

export default App
