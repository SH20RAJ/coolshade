'use client'
import { motion } from 'framer-motion' 

export default function Logo() {

        
      return (
        <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    />
      )
}
