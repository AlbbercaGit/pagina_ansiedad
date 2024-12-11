import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl font-semibold text-center mb-8 text-black"
          variants={fadeInUp}
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
              variants={fadeInUp}
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

