import { BrowserRouter as Router, Routes as AppRoutes, Route } from 'react-router-dom'
import About from './about/AboutScreen'
import Contact from './contact/ContactScreen'

import Home from "./home/HomeScreen"

const Routes = () => {
  return (
    <Router>
      <AppRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </AppRoutes>
    </Router>
  )
}

export default Routes
