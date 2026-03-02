'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const pcBackgrounds = [
  '/assets/hero.pc01.webp',
  '/assets/hero.pc02.webp',
  '/assets/hero.pc03.webp',
]

const spBackgrounds = [
  '/assets/hero.sp01.webp',
  '/assets/hero.sp02.webp',
  '/assets/hero.sp03.webp',
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  /* =========================
     画面サイズ判定
  ========================== */
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreen()
    setMounted(true)

    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  const backgrounds = isMobile ? spBackgrounds : pcBackgrounds

  /* =========================
     事前プリロード（爆速化）
  ========================== */

useEffect(() => {
  backgrounds.forEach((src) => {
    const img = new window.Image()
    img.src = src
  })
}, [backgrounds])

  /* =========================
     スライド
  ========================== */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [backgrounds.length])

  if (!mounted) return null

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      <AnimatePresence mode="wait">
        <motion.div
          key={backgrounds[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src={backgrounds[index]}
            alt="Hero Background"
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full space-y-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest">
            SOSUI GROUP
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg text-gray-200 text-center"
        >
          SOSUI GROUPが創りあげる<br className="md:hidden" />
          ラグジュアリーの経験を
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex items-center justify-center gap-5"
        >
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/cast"
              className="bg-white/80 text-black px-7 py-3 rounded-full font-medium backdrop-blur hover:bg-white transition"
            >
              キャスト募集
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/boys"
              className="bg-black/70 text-white px-7 py-3 rounded-full font-medium backdrop-blur hover:bg-black transition"
            >
              スタッフ募集
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 text-sm text-white/60 tracking-widest"
        >
          SCROLL
        </motion.div>

      </div>
    </section>
  )
}