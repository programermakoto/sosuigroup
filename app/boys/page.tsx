'use client'

import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from 'framer-motion'
import React, { useEffect, useState } from 'react'

export default function StaffRecruit() {

  /* =============================
     1. 上質なマウスライト
  ============================= */
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const smoothX = useSpring(mouse.x, { stiffness: 40, damping: 25 })
  const smoothY = useSpring(mouse.y, { stiffness: 40, damping: 25 })

  /* =============================
     2. レイヤーパララックス
  ============================= */
  const { scrollY } = useScroll()

  const bgLayer = useTransform(scrollY, [0, 1000], [0, -150])
  const midLayer = useTransform(scrollY, [0, 1000], [0, -70])
  const frontLayer = useTransform(scrollY, [0, 1000], [0, -30])

  return (
    <main className="relative bg-[#0b0b0c] text-white overflow-hidden">

      {/* =============================
         暖色ライト（空間設計版）
      ============================= */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(
            700px at ${smoothX.get()}px ${smoothY.get()}px,
            rgba(255,215,160,0.12),
            transparent 65%
          )`
        }}
      />

      {/* =============================
         奥のグラデーション層
      ============================= */}
      <motion.div
        style={{ y: bgLayer }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.04),transparent_60%)]"
      />

      {/* ================= HERO ================= */}
      <section className="relative h-[100vh] w-[92%] mx-auto overflow-hidden">

        {/* 背景（奥レイヤー） */}
        <motion.div style={{ y: bgLayer }} className="absolute inset-0">
          <Image
            src="/assets/apply2.webp"
            alt="Recruit"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-110"
          />
        </motion.div>

        {/* 中間シャドウ層 */}
        <motion.div
          style={{ y: midLayer }}
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"
        />

        {/* タイトル（手前） */}
        <motion.div
          style={{ y: frontLayer }}
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-5xl md:text-7xl font-extralight tracking-[0.3em]">
            STAFF RECRUIT
          </h1>
        </motion.div>

      </section>

      {/* ================= PR ================= */}
      <motion.section
        style={{ y: midLayer }}
        className="relative py-40 px-6"
      >
        <div className="max-w-4xl mx-auto space-y-10 text-gray-300 leading-loose">

          <h2 className="text-3xl font-light tracking-widest border-b border-white/10 pb-6">
            MESSAGE
          </h2>

          <p className="text-lg">
            奈良で本気で稼ぎたい人へ。
            環境と仕組みを整えています。
          </p>

          <p>
            月給保証、寮完備、賞与あり。
            「短期で抜ける」のではなく
            「積み上げる」ための職場です。
          </p>

        </div>
      </motion.section>

      {/* ================= CAREER ================= */}
      <motion.section
        style={{ y: frontLayer }}
        className="relative py-40 px-6 bg-white/[0.03]"
      >
        <div className="max-w-5xl mx-auto space-y-20">

          <h2 className="text-3xl text-center font-light tracking-[0.4em]">
            CAREER PATH
          </h2>

          <CareerCard
            title="HALL STAFF"
            content="未経験27歳 → 3ヶ月で昇進 → 月45万超"
          />

          <CareerCard
            title="STORE MANAGER"
            content="入社半年で店長 → 月100万超実績"
          />

        </div>
      </motion.section>

      {/* ================= MEDIA ================= */}
      <motion.section
        style={{ y: midLayer }}
        className="relative py-40 px-6"
      >
        <div className="max-w-6xl mx-auto text-center space-y-12">

          <h2 className="text-3xl font-light tracking-widest">
            MEDIA
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-16 items-center">
            <div className="w-full max-w-[350px] backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@gloria.nara"
                data-unique-id="gloria.nara"
                data-embed-type="creator"
              >
                <section></section>
              </blockquote>
            </div>

            <div className="w-full max-w-[350px] backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@gloria.nara2"
                data-unique-id="gloria.nara2"
                data-embed-type="creator"
              >
                <section></section>
              </blockquote>
            </div>
          </div>

        </div>
      </motion.section>

      <Script
        src="https://www.tiktok.com/embed.js"
        strategy="lazyOnload"
      />

    </main>
  )
}

/* ================= UI ================= */

function CareerCard({ title, content }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-white/[0.04] border border-white/10 p-14 rounded-[40px] backdrop-blur-2xl space-y-6"
    >
      <h3 className="text-xl font-light tracking-[0.2em]">
        {title}
      </h3>
      <p className="text-gray-400 leading-loose">
        {content}
      </p>
    </motion.div>
  )
}
