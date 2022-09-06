import { BrowserRouter as Router, Routes as AppRoutes, Route } from 'react-router-dom'

import Home from "./HomeScreen"

const Routes = () => {
  return (
    <Router>
      <AppRoutes>
        <Route path="/" element={<Home />} />
      </AppRoutes>
    </Router>
  )
}

export default Routes
