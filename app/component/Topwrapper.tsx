'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Topwrapper() {

  /* =========================
     マウス追従ライト
  ========================== */
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  /* =========================
     パララックス
  ========================== */
  const { scrollY } = useScroll()
  const ySlow = useTransform(scrollY, [0, 1000], [0, -80])
  const yFast = useTransform(scrollY, [0, 1000], [0, -150])

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" }
    }
  }

  return (
    <section className="relative space-y-40 bg-[#f3efe9] overflow-hidden">

      {/* =========================
          マウス追従ライトレイヤー
      ========================== */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            600px at ${position.x}px ${position.y}px,
            rgba(255,255,255,0.12),
            transparent 70%
          )`
        }}
      />

      {/* =========================
          テクスチャ
      ========================== */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[url('/assets/noise.png')]" />

      {/* =========================
          SOSUI GROUP
      ========================== */}
      <article className="relative py-40 z-10">

        {/* パララックス背景装飾 */}
        <motion.div
          style={{ y: ySlow }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.05),transparent_60%)]"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto px-8 md:px-20"
        >

          <div className="mb-32">
            <h2 className="text-4xl md:text-6xl font-extralight tracking-[0.35em] text-[#111]">
              SOSUI GROUP
            </h2>
            <p className="mt-6 text-xs tracking-[0.5em] text-gray-500">
              SPACE / PEOPLE / VALUE
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-24 items-center">

            <div className="space-y-10 text-gray-800 font-light text-lg leading-loose">
              <p>奈良県奈良市・橿原市を中心に上質なナイトシーンを創造。</p>
              <p>空間と人を結ぶブランドを展開しています。</p>

              <p className="text-2xl md:text-3xl tracking-wide text-black pt-10 border-t border-black/20">
                「人の想いに、人が集まる。」
              </p>

              <p>
                一人ひとりの活気と活力を束ね、
                奈良から全国へ。
              </p>
            </div>

            <motion.div
              style={{ y: yFast }}
              className="hidden md:block"
            >
              <div className="w-full h-[1px] bg-black/20 mb-16" />
              <div className="w-3/4 h-[1px] bg-black/10 mb-16 ml-auto" />
              <div className="w-1/2 h-[1px] bg-black/5" />
            </motion.div>

          </div>

        </motion.div>
      </article>

      {/* =========================
          代表挨拶
      ========================== */}
      <section className="relative py-40 bg-white z-10">

        <motion.div
          style={{ y: ySlow }}
          className="absolute top-0 right-0 w-1/3 h-full bg-[#f6f4f0] hidden md:block"
        />

<motion.article
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="
    relative 
    max-w-7xl 
    mx-auto 
    flex 
    flex-col-reverse     /* ← ここ変更 */
    md:flex-row-reverse 
    items-center 
    gap-24 
    px-8 
    md:px-20
  "
>


          <div className="w-full md:w-[38%] relative">
            <div className="absolute -inset-6 border border-black/20 rounded-[40px] hidden md:block" />
            <Image
              src="/assets/member05.webp"
              alt="代表挨拶"
              width={600}
              height={600}
              className="relative rounded-[40px] object-cover w-full shadow-2xl"
            />
          </div>

          <div className="w-full md:w-[48%] space-y-12">
            <p className="text-xs tracking-[0.5em] text-gray-400 uppercase">
              Representative Message
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              代表挨拶
            </h2>

            <p className="text-lg text-gray-700 leading-loose font-light">
              「選ばれる空間」を創り続けること。
            </p>

            <div className="bg-black text-white p-10 rounded-[32px] mt-10">
              <h3 className="text-3xl md:text-4xl font-light leading-snug">
                奈良のナイトカルチャーに、
                新しい文化と価値を創る。
              </h3>
            </div>
          </div>

        </motion.article>

      </section>

    </section>
  )
}
