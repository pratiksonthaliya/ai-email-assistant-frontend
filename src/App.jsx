import "./App.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import PrivacyPolicy from "./PrivacyPolicy"
import Home from "./Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App