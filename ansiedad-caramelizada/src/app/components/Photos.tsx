import Image from 'next/image'
import { motion } from 'framer-motion'

const revealAnimation = {
  initial: { 
    opacity: 0, 
    scale: 1.05,
    filter: "blur(5px)"
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)"
  },
  transition: { duration: 0.5, ease: "easeOut" }
}

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } }
}

const photos = [
  { src: "https://raw.githubusercontent.com/AlbbercaGit/videos/main/ansiedadcaramelizada-ep-cover-redes.jpg", alt: "Ansiedad Caramelizada Live Performance" },
  { src: "https://raw.githubusercontent.com/AlbbercaGit/videos/main/ansiedadcaramelizada-ep-cover-redes2.jpg.jpeg", alt: "Ansiedad Caramelizada Studio Session" },
  { src: "https://raw.githubusercontent.com/AlbbercaGit/videos/main/ansiedadcaramelizada-ep-cover-redes3.jpg.jpeg", alt: "Ansiedad Caramelizada Band Portrait" },
  { src: "https://raw.githubusercontent.com/AlbbercaGit/videos/main/ansiedadcaramelizada-ep-cover-redes.jpg", alt: "Ansiedad Caramelizada Album Artwork" },
]

export default function Photos() {
  return (
    <div className="h-[90%] flex items-center justify-center p-8">
      <motion.div 
        className="bg-white border-2 border-black p-8 max-w-4xl w-full"
        {...revealAnimation}
      >
        <motion.h2 
          className="text-3xl font-semibold text-center mb-8 text-black"
          variants={revealAnimation}
          initial="initial"
          animate="animate"
        >
          Photos
        </motion.h2>
        <motion.div 
          className="grid grid-cols-2 gap-6"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              variants={revealAnimation}
              className="aspect-square relative overflow-hidden"
            >
              <Image 
                src={photo.src} 
                alt={photo.alt} 
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300" 
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

