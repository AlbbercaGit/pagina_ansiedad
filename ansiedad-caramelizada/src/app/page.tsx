'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from "next/image"
import Navigation from './components/Navigation'
import Home from './components/Home'
import Music from './components/Music'
import Photos from './components/Photos'
import Footer from './components/Footer'
import LoadingAnimation from './components/LoadingAnimation'
// import Store from './components/Store'

export default function Page() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)
  const [homeRef, homeInView] = useInView({ threshold: 0.5, triggerOnce: true })
  const [musicRef, musicInView] = useInView({ threshold: 0.5, triggerOnce: true })
  const [photosRef, photosInView] = useInView({ threshold: 0.5, triggerOnce: true })
  // const [storeRef, storeInView] = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4500) // 3.5 seconds animation + 1 second fade out

    return () => clearTimeout(timer)
  }, [])

  const { scrollY } = useScroll()
  const [isNavVisible, setIsNavVisible] = useState(true)

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const previous = scrollY.getPrevious()
      if (latest > previous && latest > 50) {
        setIsNavVisible(false)
      } else {
        setIsNavVisible(true)
      }
    })
  }, [scrollY])

  useEffect(() => {
    if (homeInView) setCurrentSection('home')
    else if (musicInView) setCurrentSection('music')
    else if (photosInView) setCurrentSection('photos')
    // else if (storeInView) setCurrentSection('store')
  }, [homeInView, musicInView, photosInView])

  const revealAnimation = {
    home: {
      initial: { opacity: 0, y: 50, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    music: {
      initial: { opacity: 0, x: -100, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    photos: {
      initial: { opacity: 0, x: 100, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1 },
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <AnimatePresence>
        {isLoading && <LoadingAnimation />}
      </AnimatePresence>
      <div className="fixed inset-0 z-0">
        <Image 
          src="https://raw.githubusercontent.com/AlbbercaGit/videos/main/ansiedadcaramelizada-ep-cover.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <motion.div
        className="relative z-20 flex-grow flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: isNavVisible ? 1 : 0, y: isNavVisible ? 0 : -100 }}
          transition={{ duration: 0.3 }}
        >
          <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
        </motion.div>
        <main className="flex-grow overflow-y-auto snap-y snap-mandatory">
          <motion.section 
            ref={homeRef}
            id="home"
            className="h-screen snap-start"
            initial={revealAnimation.home.initial}
            animate={homeInView ? revealAnimation.home.animate : revealAnimation.home.initial}
            transition={revealAnimation.home.transition}
          >
            {homeInView && <Home />}
          </motion.section>
          <motion.section 
            ref={musicRef}
            id="music"
            className="h-screen snap-start"
            initial={revealAnimation.music.initial}
            animate={musicInView ? revealAnimation.music.animate : revealAnimation.music.initial}
            transition={revealAnimation.music.transition}
          >
            {musicInView && <Music />}
          </motion.section>
          <motion.section 
            ref={photosRef}
            id="photos"
            className="h-screen snap-start"
            initial={revealAnimation.photos.initial}
            animate={photosInView ? revealAnimation.photos.animate : revealAnimation.photos.initial}
            transition={revealAnimation.photos.transition}
          >
            {photosInView && <Photos />}
          </motion.section>
          {/* <motion.section 
            ref={storeRef}
            id="store"
            className="h-screen snap-start"
            {...revealAnimation}
          >
            {storeInView && <Store />}
          </motion.section> */}
        </main>
      </motion.div>
      <Footer />
    </div>
  )
}

