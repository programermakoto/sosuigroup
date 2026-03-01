'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function Recruit() {

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

  return (
    <section className="relative bg-[#0c0c0d] py-32 text-white overflow-hidden">

      {/* 背景ライト */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(
            700px at ${smoothX.get()}px ${smoothY.get()}px,
            rgba(255,255,255,0.08),
            transparent 70%
          )`
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-24 text-center">

        {/* タイトル */}
        <div className="space-y-6">
          <h2 className="text-5xl font-extralight tracking-[0.4em]">
            RECRUIT
          </h2>
          <p className="text-gray-400 tracking-widest text-sm">
            STAFF & CAST
          </p>
        </div>

        {/* 2カラム */}
        <div className="grid md:grid-cols-2 gap-20">

          <RecruitCard
            href="/cast"
            image="/assets/cast.pc.webp"
            title="CAST RECRUIT"
            subtitle="キャスト募集"
            description="華やかなステージで、自分史上最高の報酬と価値を。"
          />

          <RecruitCard
            href="/boys"
            image="/assets/black.pc.webp"
            title="STAFF RECRUIT"
            subtitle="スタッフ募集"
            description="一流の空間を支えるプロフェッショナルへ。"
          />

        </div>

      </div>
    </section>
  )
}


/* ================= カード ================= */

function RecruitCard({
  href,
  image,
  title,
  subtitle,
  description
}: {
  href: string
  image: string
  title: string
  subtitle: string
  description: string
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link
        href={href}
        className="block rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition duration-700 p-10"
      >

        {/* 画像（背景なし） */}
        <div className="relative h-[420px] flex items-center justify-center">

          <Image
            src={image}
            alt={title}
            fill
            className="object-contain transition duration-[1200ms] ease-out group-hover:scale-105 drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
          />

        </div>

        {/* テキスト */}
        <div className="mt-10 space-y-4 text-left">

          <p className="text-xs tracking-[0.4em] text-gray-400">
            {subtitle}
          </p>

          <h3 className="text-2xl font-light tracking-wide">
            {title}
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition duration-500">
            {description}
          </p>

          <div className="w-0 h-[1px] bg-white group-hover:w-20 transition-all duration-700" />

        </div>

      </Link>
    </motion.div>
  )
}