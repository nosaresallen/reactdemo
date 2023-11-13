import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Layout from './pages/Layout.jsx';
import NotFound from './pages/NotFound.jsx';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App
