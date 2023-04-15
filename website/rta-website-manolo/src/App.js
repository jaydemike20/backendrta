import { Route, Routes } from "react-router-dom"
import Login from "./login/index.js"
import './App.css'
import Profiles from "./pages/profile.js"
import Home from "./pages/home.js"
import Search from "./pages/search.js"
import History from "./pages/history.js"



function App() {
  return (

      <div className="app">

        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        

        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profiles />} />
           
        </Routes>
      </div>

  )
}



export default App
