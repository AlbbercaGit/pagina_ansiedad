import { Dispatch, SetStateAction } from 'react'

interface NavigationProps {
  currentSection: string
  setCurrentSection: Dispatch<SetStateAction<string>>
}

export default function Navigation({ currentSection, setCurrentSection }: NavigationProps) {
  const scrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section)
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="w-full border-b-2 border-black p-6 bg-white sticky top-0 z-50">
      <h1 className="text-2xl text-black font-medium text-center mb-4">Ansiedad Caramelizada</h1>
      <nav className="flex justify-center space-x-8">
        {/* {['Home', 'Music', 'Photos', 'Store'].map((section) => ( */}
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
    </header>
  )
}

