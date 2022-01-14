import Home from './pages/home/Home';
import ProfilePage from './pages/profile/ProfilePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Router path="/" element={<Home />} />
      </Router>
    </div>
  )
}
