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

export default function Music() {
  return (
    <div className="h-full  w-full flex items-center justify-center p-8">
      <motion.div 
        className="bg-white flex justify-center items-center flex-col p-8 border-2 border-black w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1}}
      >
        <motion.h2 
          className="text-3xl font-semibold text-center mb-12 text-black"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          Music
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div 
              variants={fadeInUp}
              className="prose prose-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-black">About the Music</h3>
              <p className="text-gray-700 mb-6">
              Ansiedad Caramelizada nace de la contradicción entre lo dulce y lo amargo, canalizando emociones intensas en paisajes sonoros únicos. Con una propuesta que desafía las etiquetas y géneros tradicionales, explora la innovación como un lenguaje para quienes buscan lo inesperado.
              </p>
            </motion.div>
            <motion.ul className="space-y-6" variants={staggerChildren}>
              {[
                { title: "Ansiedad Caramelizada", type: "EP", year: "2024" },
                { title: "Sin Dirección", type: "Single", year: "2024" }
                // { title: "Single 2", type: "Single", year: "2024" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="border-b border-gray-300 pb-4"
                  variants={fadeInUp}
                >
                  <h3 className="font-medium text-xl text-black">{item.title}</h3>
                  <p className="text-gray-600">{item.type} - {item.year}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="relative aspect-square"
          >
            <Image
              src="https://raw.githubusercontent.com/AlbbercaGit/videos/main/ansiedadcaramelizada-ep-cover-redes.jpg"
              alt="Ansiedad Caramelizada Music"
              fill
              className="object-cover "
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

