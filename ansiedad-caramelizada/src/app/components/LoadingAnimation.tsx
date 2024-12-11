import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LoadingAnimation() {
  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 3 }}
    >
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, filter: "blur(10px)" }}
        animate={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <Image
          src="https://raw.githubusercontent.com/AlbbercaGit/videos/main/ansiedadcaramelizada-ep-cover.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </motion.div>
    </motion.div>
  );
}

