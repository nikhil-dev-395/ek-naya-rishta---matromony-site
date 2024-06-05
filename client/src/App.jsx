import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/user/registration/Login.jsx"
import Navbar from "./components/navbar/Navbar.jsx"
import Footer from "./components/footer/Footer.jsx"
import Register from "./components/user/registration/Register.jsx"
import Profile from "./components/profile/Profile.jsx"
import UserDetails from "./components/user/userDetails.jsx/UserDetails.jsx"
import VerifyDocs from "./components/user/verification/VerifyDocs.jsx"
import Community from "./components/community/Community.jsx"
import Contact from "./components/contact/Contact.jsx"
import About from "./components/about/About.jsx"
import Home from "./components/home/Home.jsx"
import Membership from "./components/membership/Membership.jsx"
import Partner from "./components/partner/Partner.jsx"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<Profile />} path="/user/profile" />
          <Route element={<Community />} path="/user/community" />
          <Route element={<Contact />} path="/user/contact" />
          <Route element={<About />} path="/user/about" />
          <Route element={<Partner />} path="/user/partner" />
          <Route element={<Membership />} path="/user/membership" />
          <Route element={<UserDetails />} path="/registration/user/details" />
          <Route element={<VerifyDocs />} path="/registration/user/VerifyDocs" />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>

  )
}

export default App