import React, { useState, useEffect } from "react"
import logo from "./FinTechLogo.png"
import { Link } from "react-router-dom"

interface Props {}

const Navbar = (props: Props) => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  // Handle scroll event to toggle navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // If scrolling down, hide navbar
        setShowNavbar(false)
      } else {
        // If scrolling up, show navbar
        setShowNavbar(true)
      }
      // Update last scroll position
      setLastScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  const toggleNavbar = () => {
    setIsOpen(!isOpen) // Toggle navbar visibility on small screens
  }

  return (
    <nav
      className={`bg-white shadow-md fixed top-0 left-0 w-full z-10 transition-transform duration-300 ease-in-out ${
        showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left section - Explore button */}
        <div className="flex items-center space-x-6">
          <Link
            to="/search"
            className="hidden lg:block px-6 py-3 font-bold rounded text-white bg-yellow-400 hover:bg-yellow-500 transition duration-200"
          >
            Explore
          </Link>
        </div>

        {/* Centered section - Logo */}
        <div className="flex items-center justify-center flex-grow">
          <Link to="/">
            <img src={logo} alt="FinTech Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Right section - Login and Signup buttons */}
        <div className="hidden lg:flex items-center space-x-6 text-black">
          <a className="hover:text-yellow-500 cursor-pointer" href="/login">
            Login
          </a>
          <a
            href="/signup"
            className="px-6 py-3 font-bold rounded text-white bg-yellow-400 hover:bg-yellow-500 transition duration-200"
          >
            Signup
          </a>
        </div>

        {/* Hamburger Menu (visible on smaller screens) */}
        <button
          className="lg:hidden z-20 p-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out absolute right-6 top-6"
          onClick={toggleNavbar}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Navbar (visible on smaller screens when isOpen is true) */}
      <div
        className={`lg:hidden flex flex-col items-center space-y-4 py-4 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/search"
          className="px-6 py-2 text-yellow-600 hover:text-yellow-500 transition duration-200"
          onClick={toggleNavbar}
        >
          Explore
        </Link>
        <Link
          to="/login"
          className="px-6 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-md transition duration-200"
          onClick={toggleNavbar}
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-6 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-md transition duration-200"
          onClick={toggleNavbar}
        >
          Signup
        </Link>
      </div>
    </nav>
  )
}

export default Navbar