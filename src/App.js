// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"
// const App=()=>{
//    return(
//       <div>

//         <Navbar />
//         <Footer/>
//       </div>
//    )

// }

// export default App

import{
   BrowserRouter,
   Routes,
   Route
} from 'react-router-dom'
import Home from './components/Home'
import Teachers from './components/Teachers'
import Holidays from './components/Holidays'
import ContectUs from './components/ContectUs' 
import NotFound from './components/NotFound'


const App=()=>{
   return (
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
           <Route path="/holidays" element={<Holidays />} />
            <Route path="contact-us" element={<ContectUs />} />
            <Route path="*" element={<NotFound />} 
             />
      </Routes>
      </BrowserRouter>

   )
}

export default App