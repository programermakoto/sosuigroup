'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const backgrounds = [
  '/assets/hero01.png',
  '/assets/store03.webp',
  '/assets/store05.webp',
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* ===== 背景（フェード＋ズーム） ===== */}
      <AnimatePresence>
        <motion.div
          key={backgrounds[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgrounds[index]})` }}
        />
      </AnimatePresence>

      {/* 黒オーバーレイ */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ===== コンテンツ ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full space-y-8">

        {/* ロゴ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center space-y-4 "
        >
         
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest">
            SOSUI GROUP
          </h1>
        </motion.div>

        {/* サブコピー */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg text-gray-200 text-center"
        >
          SOSUI GROUPが創りあげる<br className="md:hidden" />
          ラグジュアリーの経験を
        </motion.p>

        {/* ボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex items-center justify-center gap-5"
        >
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/company"
              className="bg-white/80 text-black px-7 py-3 rounded-full font-medium backdrop-blur hover:bg-white transition"
            >
              キャスト募集
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/staff"
              className="bg-black/70 text-white px-7 py-3 rounded-full font-medium backdrop-blur hover:bg-black transition"
            >
              スタッフ募集
            </Link>
          </motion.div>
        </motion.div>
        {/* <Image
            src="/assets/sosui.PNG"
            alt="sosui"
            width={150}
            height={150}
            className="mx-auto"
          /> */}
        {/* スクロール誘導 */}
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
