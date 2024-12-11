import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavigationProps {
  currentSection: string
  setCurrentSection: Dispatch<SetStateAction<string>>
}

export default function Navigation({ currentSection, setCurrentSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section)
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="w-full sticky top-0 z-50 sm:bg-white">
        {/* Desktop layout */}
        <div className="hidden md:block border-b-2 border-black p-6">
          <h1 className="text-2xl text-black font-medium text-center mb-4">Ansiedad Caramelizada</h1>
          <nav className="flex justify-center space-x-8">
            {['Home', 'Music', 'Photos'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  setCurrentSection(section.toLowerCase())
                  scrollToSection(section.toLowerCase())
                }}
                className={`text-sm ${
                  currentSection === section.toLowerCase()
                    ? 'text-black font-bold'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex justify-end p-6">
          <button
            className="w-6 h-6 relative focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45' : '-translate-y-1'
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? '-rotate-45' : 'translate-y-1'
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? '-rotate-45' : 'translate-y-1'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-40 md:hidden flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h1 className="text-3xl text-white font-medium mb-8">Ansiedad Caramelizada</h1>
              <div className="flex flex-col items-center space-y-8">
                {['Home', 'Music', 'Photos'].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      setCurrentSection(section.toLowerCase())
                      scrollToSection(section.toLowerCase())
                    }}
                    className={`text-2xl ${
                      currentSection === section.toLowerCase()
                        ? 'text-white font-bold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

