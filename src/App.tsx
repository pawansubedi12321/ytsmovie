import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './components/main/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from './components/main/Movie';
import Nopage from './components/main/Nopage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="movie"element={<Movie/>}/>
        <Route path="*" element={<Nopage/>} /> 
      
        {/* <Route path="movie"element={<Movie/>}/>
        <Route path="*"element={<Nopage/>}/> */}
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
    </BrowserRouter>
    {/* <Index></Index> */}
    
    </>
  )
}

export default App
