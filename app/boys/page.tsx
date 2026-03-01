'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useTransform, useScroll } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const shops = [
  { name: 'CLUB gloria', link: '#', image: '/assets/store03.webp' },
  { name: 'LOUNGE blanc', link: 'https://www.pokepara.jp/nara/m335/a391/shop19246/', image: '/assets/store04.webp' },
  { name: 'Luxury Bar GOAT', link: 'https://luxury-goat.live-web.jp/', image: '/assets/store09.webp' },
]

export default function CastRecruit() {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 430)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const { scrollY } = useScroll()
  const ySlow = useTransform(scrollY, [0, 800], [0, isMobile ? -20 : -60])
  const yFast = useTransform(scrollY, [0, 800], [0, isMobile ? -40 : -120])

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[70vh] md:h-screen bg-black overflow-hidden flex items-center justify-center">

        <motion.div style={{ y: yFast }} className="absolute inset-0 flex items-center justify-center">

          <picture className="w-full h-full flex items-center justify-center">
            <source media="(max-width:768px)" srcSet="/assets/black.sp.webp" />
            <Image
              src="/assets/black.pc.webp"
              alt="hero"
              fill
              priority
              className="object-contain"   // 🔥 切れない
            />
          </picture>

        </motion.div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="relative bg-[#f4f2ee] py-16 md:py-32 overflow-hidden">

        <motion.div
          style={{ y: ySlow }}
          className="absolute -top-32 md:-top-52 -left-20 md:-left-60 w-[140%] md:w-[160%] h-[260px] md:h-[500px] bg-[#ddd8cd] rotate-[-8deg] opacity-60"
        />

        <div className="max-w-6xl mx-auto px-4 md:px-16 relative z-10 space-y-16 md:space-y-28">

          {/* TITLE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-6xl font-light tracking-[0.2em] md:tracking-[0.35em]">
              STAFF RECRUIT
            </h2>
            <p className="text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] text-gray-500 mt-2">
              SOSUI GROUP
            </p>
          </motion.div>

          {/* SHOPS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {shops.map((shop, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl shadow-lg overflow-hidden bg-white"
              >
                <Link href={shop.link} target="_blank">
                  <div className="relative h-56 md:h-72 w-full flex items-center justify-center bg-black">
                    <Image
                      src={shop.image}
                      alt={shop.name}
                      fill
                      className="object-contain p-4"  // 🔥 切れない
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-2xl font-semibold">
                      {shop.name}
                    </h3>
                    <span className="text-xs md:text-sm text-gray-600">
                      求人詳細 →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* PR TEXT */}
          <div className="space-y-4 text-sm md:text-base leading-relaxed md:leading-loose text-gray-800">
            <h5 className="text-xl md:text-2xl font-semibold">
              Recruit [Staff]／スタッフ求人
            </h5>

            <p>
              幹部候補として稼ぎたい方、女性エスコートスタッフも大募集。
              初期費用なし・即日入居可の寮完備。
              未経験OK／経験者優遇。
              学生・Wワーク歓迎。
              体験給与は全額日払いです。
            </p>
          </div>

          {/* ACCESS */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            <div>
              <h3 className="text-2xl md:text-3xl font-light mb-6">
                ACCESS
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                〒630-8244<br />
                奈良県奈良市三条町606-60<br />
                ジョイパレス奈良駅前パートⅡ 301号
              </p>

              <Link
                href="https://www.google.com/maps/search/?api=1&query=奈良県奈良市三条町606-60"
                target="_blank"
                className="inline-block mt-6 px-6 md:px-8 py-2 md:py-3 border rounded-full text-sm hover:bg-black hover:text-white transition"
              >
                Google Map →
              </Link>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=奈良県奈良市三条町606-60&output=embed"
                width="100%"
                height="300"
                className="md:h-[420px]"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

          </div>

        </div>
      </section>
    </>
  )
}