'use client'
import { AnimatePresence, motion } from 'framer-motion'

export default function PageTransition({ children, ...rest }) {
    return (
        <AnimatePresence>
            <motion.div key={window.location.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                    {children}
            </motion.div>
        </AnimatePresence>
    )
}

