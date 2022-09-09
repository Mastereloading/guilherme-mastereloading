import { BrowserRouter as Router, Routes as AppRoutes, Route } from 'react-router-dom'
import About from './about/AboutScreen'
import Projects from './projects/ProjectsScreen'
import Contact from './contact/ContactScreen'

import Home from "./home/HomeScreen"

const Routes = () => {
  return (
    <Router>
      <AppRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </AppRoutes>
    </Router>
  )
}

export default Routes
