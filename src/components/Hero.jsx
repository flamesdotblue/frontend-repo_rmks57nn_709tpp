import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative" aria-label="Hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-14 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-300">
              Modern • Minimal • Responsive
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
              Your Personal Portfolio & CV, beautifully presented
            </h1>
            <p className="text-neutral-600 dark:text-neutral-300 max-w-xl">
              Tell your story with an elegant, professional layout designed for any industry. Showcase
              experience, education, skills, languages, and certificates — all in one place.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#about" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors">
                Explore Profile
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                Get in Touch
              </a>
            </div>
          </motion.div>

          <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent dark:from-neutral-900/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
