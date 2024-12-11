import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
}

export default function Home() {
  return (
    <div className="h-[90%] flex items-center justify-center p-8">
      <motion.div 
        className="bg-white border-2 border-black p-8 max-w-lg w-full mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center space-y-6">
          <motion.h2 
            className="text-4xl font-semibold tracking-tight text-black"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Ansiedad Caramelizada
          </motion.h2>
          <motion.p 
            className="text-gray-700 text-lg"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            Sin dirección
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Image 
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/main/ansiedadcaramelizada-ep-cover-redes.jpg"
              alt="Album artwork"
              width={400}
              height={400}
              className="mx-auto mt-8"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-full mt-8"
          >
            <iframe 
              style={{borderRadius: '12px'}} 
              src="https://open.spotify.com/embed/track/7zGidK8rJrN6YoDFmgWzye?utm_source=generator&theme=0" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              // allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

