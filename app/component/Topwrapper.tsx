'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

export default function Topwrapper() {

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 430)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  const { scrollY } = useScroll()
  const ySlow = useTransform(scrollY, [0, 800], [0, isMobile ? -20 : -40])
  const yFast = useTransform(scrollY, [0, 800], [0, isMobile ? -40 : -80])

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <section className="relative bg-[#f2efe9] overflow-hidden">

      {/* マウスライト（SPでは非表示） */}
      {!isMobile && (
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
      )}

      {/* 斜め背景 */}
      <motion.div
        style={{ y: ySlow }}
        className="absolute -top-20 md:-top-32 -left-20 md:-left-32 w-[140%] h-[260px] md:h-[400px] bg-[#e8e4dc] rotate-[-6deg] shadow-inner"
      />

      {/* ================= SOSUI GROUP ================= */}
      <article className="relative z-10 py-16 md:py-28">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-5 md:px-16"
        >

          <div className="mb-12 md:mb-20">
            <h2 className="text-2xl md:text-5xl font-light tracking-[0.15em] md:tracking-[0.3em] text-[#111]">
              SOSUI GROUP
            </h2>
            <p className="mt-3 text-[10px] md:text-[11px] tracking-[0.25em] md:tracking-[0.5em] text-gray-500">
              SPACE / PEOPLE / VALUE
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            <div className="space-y-6 md:space-y-8 text-gray-800 font-light text-sm md:text-base leading-relaxed md:leading-loose">

              <p>
                奈良県の奈良市、橿原市を中心に<br className="md:hidden"></br>
                キャバクラ・ラウンジ・ガールズバーを<br className="md:hidden"></br>
                多店舗展開しております。
              </p>

              <p>
                『人の想いに人が集まる会社』を<br className="md:hidden"></br>
                モットーに掲げています。
              </p>

              <div className="mt-6 md:mt-10 p-5 md:p-8 backdrop-blur-md bg-white/40 border border-black/10 rounded-xl md:rounded-2xl shadow-lg">
                <p className="text-base md:text-xl tracking-wide text-black leading-relaxed">
                  一人一人の活気、<br className="md:hidden"></br>
                  活力を一つにまとめ<br />
                  奈良県から全国へ出店。<br />
                  常識にとらわれない挑戦を続けます。
                </p>
              </div>

            </div>

            <motion.div style={{ y: yFast }} className="hidden md:block">
              <div className="h-[180px] w-[1px] bg-black/20 mx-auto shadow-lg" />
            </motion.div>

          </div>
        </motion.div>
      </article>

      {/* ================= 代表挨拶 ================= */}
      <section className="relative py-16 md:py-28 z-10">

        <div className="absolute bottom-0 right-[-30%] md:right-[-20%] w-[100%] md:w-[80%] h-[180px] md:h-[260px] bg-[#e6e1d8] rotate-[8deg]" />

        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 px-5 md:px-16"
        >

          {/* 画像 */}
          <div className="w-full md:w-[40%] relative">
            <div className="absolute -inset-3 md:-inset-4 bg-white/40 backdrop-blur-sm rounded-2xl md:rounded-[28px] shadow-xl" />
            <Image
              src="/assets/member05.webp"
              alt="代表挨拶"
              width={600}
              height={600}
              className="relative rounded-2xl md:rounded-[28px] object-cover w-full"
            />
          </div>

          {/* テキスト */}
          <div className="w-full md:w-[50%] space-y-6 md:space-y-8 text-center md:text-left">

            <p className="text-[10px] md:text-[11px] tracking-[0.25em] md:tracking-[0.4em] text-gray-400 uppercase">
              Representative Message
            </p>

            <h2 className="text-2xl md:text-4xl font-light leading-tight">
              代表挨拶
            </h2>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed md:leading-loose font-light">
              奈良県の地元の方から出張・観光の方に
              「選ばれるお店作り」を心掛けています。
            </p>

            <Link href="/company">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="
                  mt-4 md:mt-6
                  px-7 md:px-10
                  py-3 md:py-4
                  rounded-full
                  bg-white/50
                  backdrop-blur-md
                  border border-black/10
                  shadow-md
                  transition-all
                  tracking-[0.15em]
                  text-xs md:text-sm
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