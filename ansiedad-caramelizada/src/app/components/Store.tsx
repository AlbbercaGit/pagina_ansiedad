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

export default function Store() {
  return (
    <div className="h-full flex items-center justify-center p-8">
      <motion.div 
        className="content-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl font-semibold text-center mb-8 text-black"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          Store
        </motion.h2>
        <motion.div 
          className="grid grid-cols-2 gap-8"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {[1, 2].map((i) => (
            <motion.div 
              key={i}
              className="text-center"
              variants={fadeInUp}
            >
              <Image src="/placeholder.svg" alt={`Product ${i}`} width={150} height={150} className="w-full h-auto mb-4" />
              <p className="font-medium text-lg text-black">Product {i}</p>
              <p className="text-gray-600">${19.99 + (i - 1) * 5}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

