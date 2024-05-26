import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/user/Login.jsx"
import Navbar from "./components/navbar/Navbar.jsx"
import Footer from "./components/footer/Footer.jsx"
import Register from "./components/user/Register.jsx"
import Profile from "./components/profile/Profile.jsx"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<Profile />} path="/user/profile" />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>

  )
}

export default App