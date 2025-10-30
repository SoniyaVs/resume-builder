
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import ResumeGenerater from './pages/ResumeGenerater'
import History from './pages/History'
import UserForm from './pages/UserForm'
import Pnf from './pages/Pnf'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/resume' element={<ResumeGenerater />} />
        <Route path='/history' element={<History />} />
        <Route path='/form' element={<UserForm />} />
        <Route path='/*' element={<Pnf />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
