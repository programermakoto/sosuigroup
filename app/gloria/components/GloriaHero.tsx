'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  '/assets/store01.webp',
  '/assets/store02.webp',
  '/assets/store03.webp',
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            duration: 2.2,
            ease: [0.22, 1, 0.36, 1], // 映画風イージング
          }}
          className="absolute inset-0"
        >
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-full h-full"
          >
            <Image
              src={images[index]}
              alt="Hero Background"
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* 暖色グラデーションを少し追加（映画感UP） */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white space-y-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-wider"
        >
          club gloria (グロリア)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.9 }}
          className="text-lg md:text-xl"
        >
          奈良のキャバクラ<br />大人の贅沢時間がここにある
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 1.2 }}
          className="flex gap-4"
        >
          <a
            href="tel:080-6144-1370"
            className="bg-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            今すぐ電話予約
          </a>

          <a
            href="https://line.me/ti/p/qgwz-BfykK"
            className="bg-green-600 text-black px-6 py-3 rounded-full font-medium hover:bg-green-700 transition"
          >
            LINEで予約
          </a>
        </motion.div>

      </div>
    </section>
  )
}