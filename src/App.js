import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import './App.css'
import Experiences from './components/Experiences'
import Footer from './components/Footer/Footer'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>

       <div style={{height:'0px'}}>Tryamb</div>

       <Header />
      <main>
        <About />
        <Experiences/>
        <Projects />
        <Skills />
        <Contact />
        <Footer/>
      </main>

      {/* <ScrollToTop /> */}
    </div>
  )
}

export default App
