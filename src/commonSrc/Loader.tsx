import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center"
          style={{ background: 'transparent' }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Spinner */}
            <div className="relative w-16 h-16">
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent"
                style={{ borderTopColor: '#4a90d9', borderRightColor: '#4a90d9' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-2 rounded-full border-4 border-transparent"
                style={{ borderBottomColor: '#7eb8e0', borderLeftColor: '#7eb8e0' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            {/* Loading text */}
            <motion.p
              className="text-sm text-gray-300 tracking-widest uppercase"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Wait please
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
