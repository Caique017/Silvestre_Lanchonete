import { Footer } from './components/Caique/footer'
import { Header } from './components/Caique/header'
import { Home } from './components/João/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export function App() {
  return (
    <div className="mx-auto flex flex-col gap-5 bg-zinc-950">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Header />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}
