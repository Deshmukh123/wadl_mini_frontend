import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import Notes from "./components/Notes/notes";
import Header from "./components/Header/Header";
import Admin from "./pages/Admin/admin";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/dashboard";
// import About-us from "./components/About-us/AboutUs";

function App(){

  return (

    <div className="App">
            <Header />

    <BrowserRouter>
      {/* <Home /> */}
      <div className="pages">
        <Routes>

          <Route path="/" element={<Home/>} /> 
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>

          {/* <Route path="/AboutUs" element={<About-us/>} */}
          <Route path="/Notes" element={<Notes/>}/> 
 
        </Routes>
      </div>
      
    </BrowserRouter>
    <Footer/>

    </div>
  )
}

export default App;