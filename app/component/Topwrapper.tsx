'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

export default function Topwrapper() {

  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const { scrollY } = useScroll()
  const ySlow = useTransform(scrollY, [0, 800], [0, -40])
  const yFast = useTransform(scrollY, [0, 800], [0, -80])

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section className="relative bg-[#f2efe9] overflow-hidden">

      {/* マウスライト */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(
            500px at ${position.x}px ${position.y}px,
            rgba(255,255,255,0.15),
            transparent 70%
          )`
        }}
      />

      {/* 斜め3Dウォール */}
      <motion.div
        style={{ y: ySlow }}
        className="absolute -top-32 -left-32 w-[140%] h-[400px] bg-[#e8e4dc] rotate-[-6deg] shadow-inner"
      />

      {/* =========================
          SOSUI GROUP
      ========================== */}
      <article className="relative z-10 py-28">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 md:px-16"
        >

          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-light tracking-[0.3em] text-[#111]">
              SOSUI GROUP
            </h2>
            <p className="mt-4 text-[11px] tracking-[0.5em] text-gray-500">
              SPACE / PEOPLE / VALUE
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div className="space-y-8 text-gray-800 font-light text-base leading-loose">
              <p>奈良県の奈良市、橿原市を中心にキャバクラ、ラウンジ、ガールズバーを多店舗展開しております。</p>
              <p> 『人の想いに人が集まる会社』をモットーに掲げ</p>

              <div className="mt-10 p-8 backdrop-blur-md bg-white/40 border border-black/10 rounded-2xl shadow-xl">                
                <p className="text-xl tracking-wide text-black">
                  一人一人の活気、活力を一つにまとめ<br></br>
                  奈良県から全国に出店していくつもりです。<br></br>
                  常識にとらわれない様々なチャレンジを進めて参ります。
                </p>
              </div>
            </div>

            <motion.div style={{ y: yFast }} className="hidden md:block">
              <div className="h-[180px] w-[1px] bg-black/20 mx-auto shadow-lg" />
            </motion.div>

          </div>

        </motion.div>
      </article>

      {/* =========================
          代表挨拶
      ========================== */}
      <section className="relative py-28 z-10">

        <div className="absolute bottom-0 right-[-20%] w-[80%] h-[260px] bg-[#e6e1d8] rotate-[8deg]" />

        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 px-6 md:px-16"
        >

          {/* 画像 */}
          <div className="w-full md:w-[40%] relative">
            <div className="absolute -inset-4 bg-white/40 backdrop-blur-sm rounded-[28px] shadow-2xl" />
            <Image
              src="/assets/member05.webp"
              alt="代表挨拶"
              width={600}
              height={600}
              className="relative rounded-[28px] object-cover w-full"
            />
          </div>

          {/* テキスト */}
          <div className="w-full md:w-[50%] space-y-8">

            <p className="text-[11px] tracking-[0.4em] text-gray-400 uppercase">
              Representative Message
            </p>

            <h2 className="text-3xl md:text-4xl font-light leading-tight">
              代表挨拶
            </h2>

            <p className="text-base text-gray-700 leading-loose font-light">
            奈良県の地元の方から出張、観光の方に"選ばれるお店作り"を心掛けています。
            </p>

            

            {/* 🔥 ここにボタン追加 */}
            <Link href="/company">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="
                  mt-6
                  px-10
                  py-4
                  rounded-full
                  bg-white/40
                  backdrop-blur-md
                  border
                  border-black/10
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  tracking-[0.2em]
                  text-sm
                "
              >
                代表挨拶を見る
              </motion.button>
            </Link>

          </div>

        </motion.article>

      </section>

    </section>
  )
}