'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from "next/image"
import Navigation from './components/Navigation'
import Home from './components/Home'
import Music from './components/Music'
import Photos from './components/Photos'
// import Store from './components/Store'

export default function Page() {
  const [currentSection, setCurrentSection] = useState('home')

  const [homeRef, homeInView] = useInView({ threshold: 0.5 })
  const [musicRef, musicInView] = useInView({ threshold: 0.5 })
  const [photosRef, photosInView] = useInView({ threshold: 0.5 })
  // const [storeRef, storeInView] = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (homeInView) setCurrentSection('home')
    else if (musicInView) setCurrentSection('music')
    else if (photosInView) setCurrentSection('photos')
    // else if (storeInView) setCurrentSection('store')
  }, [homeInView, musicInView, photosInView])

  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatePresence>
        {(currentSection === 'home' || currentSection === 'photos') && (
          <motion.div 
            className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="top-[10%] w-[100%] h-[100%] relative">
              <Image 
                src="https://raw.githubusercontent.com/AlbbercaGit/videos/main/ansiedadcaramelizada-ep-cover.jpg"
                alt="Background"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main className="flex-1 overflow-y-auto snap-y snap-mandatory relative z-20">
        <motion.section 
          ref={homeRef}
          id="home"
          className="h-screen snap-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Home />
        </motion.section>
        <motion.section 
          ref={musicRef}
          id="music"
          className="h-screen snap-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Music />
        </motion.section>
        <motion.section 
          ref={photosRef}
          id="photos"
          className="h-screen snap-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Photos />
        </motion.section>
        {/* <motion.section 
          ref={storeRef}
          id="store"
          className="h-screen snap-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Store />
        </motion.section> */}
      </main>
    </div>
  )
}

