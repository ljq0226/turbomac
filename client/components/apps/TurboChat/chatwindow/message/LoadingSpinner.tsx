import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  loading: boolean
}

const LoadingSpinner: React.FC<Props> = ({ loading }) => {
  return (
    <>
      {loading && (
        <motion.div
          className="spinner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="dot dot-1"
            animate={{ y: ['0%', '-100%', '0%'] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>
          <motion.div
            className="dot dot-2"
            animate={{ y: ['0%', '-100%', '0%'] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.4, ease: 'easeInOut' }}
          ></motion.div>
          <motion.div
            className="dot dot-3"
            animate={{ y: ['0%', '-100%', '0%'] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.8, ease: 'easeInOut' }}
          ></motion.div>
        </motion.div>
      )}
    </>
  )
}

export default LoadingSpinner
