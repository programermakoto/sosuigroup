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
          {/* ================= JOB INFO ================= */}
          {/* ======= 経験者の方へ ======= */}
          <section className="border rounded-lg overflow-hidden bg-white mt-8">
            <h4 className="bg-gray-100 px-4 py-2 font-semibold text-gray-700">
              経験者の方へ
            </h4>
            <div className="p-4 text-gray-800 space-y-2">
              <p>キャストマネジメントやホール業務、送迎・キッチン経験のある方、大歓迎です。</p>
              <p>即戦力として活躍できる環境を用意しています。高待遇・歩合・賞与あり。</p>
              <p>社員旅行や長期休暇など、経験者の方も働きやすい体制を整えています。</p>
            </div>
          </section>

          {/* ======= 未経験者の方へ ======= */}
          <section className="border rounded-lg overflow-hidden bg-white mt-8">
            <h4 className="bg-gray-100 px-4 py-2 font-semibold text-gray-700">
              未経験者の方へ
            </h4>
            <div className="p-4 text-gray-800 space-y-2">
              <p>初めての方でも安心して働けるサポート体制があります。</p>
              <p>体験入社も可能で、日払い対応、研修制度あり。</p>
              <p>経験者と同じく待遇は充実。未経験からでもキャリアアップ可能です。</p>
            </div>
          </section>
          {/* ======= SOSUI GROUPが求める存在 ======= */}
          <section className="max-w-6xl mx-auto px-4 md:px-16 mt-16 md:mt-28 py-16">
            <h4 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 text-center">
              SOSUI GROUPが求める存在
            </h4>

            {/* ================= PC ================= */}
            <div className="hidden md:flex relative w-full h-[420px] items-center justify-center">

              {/* 三角形の線 */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polyline
                  points="50,8 20,92 80,92 50,8"
                  fill="none"
                  stroke="#888"
                  strokeWidth="0.8"
                />
              </svg>

              {/* 上 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <div className="font-semibold bg-white px-6 py-3 shadow-md rounded-md">
                  向上心がある
                </div>
              </div>

              {/* 左下 */}
              <div className="absolute bottom-0 left-[20%] -translate-x-1/2 z-10">
                <div className="font-semibold bg-white px-6 py-3 shadow-md rounded-md">
                  お客様に最高の時間を提供
                </div>
              </div>

              {/* 右下 */}
              <div className="absolute bottom-0 right-[20%] translate-x-1/2 z-10">
                <div className="font-semibold bg-white px-6 py-3 shadow-md rounded-md">
                  仲間と協力して成長
                </div>
              </div>
            </div>

            {/* ================= SP ================= */}
            <div className="md:hidden flex flex-col items-center gap-10 relative">

              <div className="relative">
                <div className="font-semibold bg-white px-6 py-3 shadow-md rounded-md">
                  向上心がある
                </div>
              </div>

              <div className="w-[1px] h-8 bg-gray-300"></div>

              <div className="font-semibold bg-white px-6 py-3 shadow-md rounded-md">
                お客様に最高の時間を提供
              </div>

              <div className="w-[1px] h-8 bg-gray-300"></div>

              <div className="font-semibold bg-white px-6 py-3 shadow-md rounded-md">
                仲間と協力して成長
              </div>
            </div>
          </section>
          {/* ================= JOB INFO ================= */}
          <section className="max-w-5xl mx-auto px-4 md:px-16 mt-16 md:mt-28 space-y-12">
            <h3 className="text-2xl md:text-3xl font-light mb-6">募集詳細</h3>

            {/* ======= 給与 ======= */}
            <div className="border rounded-xl overflow-hidden">
              <h4 className="bg-gray-100 px-4 py-3 font-semibold text-gray-700">
                給与
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 border-t">

                {/* 左：項目 */}
                <div className="bg-gray-50 md:border-r p-5 font-medium text-gray-700 space-y-4 text-sm md:text-base">
                  <div>正社員</div>
                  <div>アルバイト</div>
                  <div>送りドライバー</div>
                </div>

                {/* 右：内容 */}
                <div className="bg-white p-5 text-gray-800 space-y-4 text-sm md:text-base leading-relaxed">
                  <div>月給270,000円～ +歩合+各種手当 / 年2回ボーナスあり</div>
                  <div>時給1,300円</div>
                  <div>時給1,580円〜</div>
                </div>

              </div>
            </div>

            {/* ======= 資格・待遇 ======= */}
            <div className="border rounded-xl overflow-hidden shadow-md">
              <h4 className="bg-gray-100 px-4 py-3 font-semibold text-gray-700">
                資格・待遇
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 border-t">

                {/* 左 */}
                <div className="bg-gray-50 md:border-r p-5 font-medium text-gray-700 space-y-6 text-sm md:text-base">
                  <div>
                    <div className="font-semibold mb-2">資格</div>
                    18歳以上、要普通免許、男女問いません！<br />
                    経験者・未経験者大歓迎！
                  </div>
                </div>

                {/* 右 */}
                <div className="bg-white p-5">
                  <div className="font-semibold text-gray-700 mb-4 text-sm md:text-base">
                    待遇
                  </div>

                  {/* スマホ2列 / PC3列 */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs md:text-sm">
                    {[
                      "日払いOK",
                      "未経験歓迎",
                      "経験者優遇",
                      "体験入社あり",
                      "歩合あり",
                      "賞与あり",
                      "駐車場あり",
                      "弁当手当",
                      "家賃補助",
                      "社員旅行",
                      "長期休暇",
                      "祝い金",
                      "研修制度"
                    ].map((item, i) => (
                      <div key={i} className="border rounded px-2 py-1 text-center">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>



            {/* ======= 勤務地・エリア ======= */}
            <div className="border rounded-xl overflow-hidden">
              <h4 className="bg-gray-100 px-4 py-3 font-semibold text-gray-700">
                勤務地・エリア
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 border-t">

                {/* 項目 */}
                <div className="bg-gray-50 md:border-r p-5 font-medium text-gray-700 text-sm md:text-base space-y-6">
                  <div>エリア</div>
                  <div>勤務地</div>
                </div>

                {/* 内容 */}
                <div className="bg-white p-5 text-sm md:text-base space-y-6 leading-relaxed">
                  <div>
                    奈良県 / 奈良市三条町<br />
                    奈良県 / 橿原市内膳町
                  </div>

                  <div className="space-y-2">
                    奈良市三条町606-60 3F<br />
                    奈良市三条町606-60 2F<br />
                    橿原市内膳町1-3-6 5F
                  </div>
                </div>
              </div>
            </div>

            {/* ======= 勤務条件・応募 ======= */}
            <div className="border rounded-lg overflow-hidden">
              <h4 className="bg-gray-100 px-4 py-2 font-semibold text-gray-700">勤務条件・応募</h4>
              <div className="grid grid-cols-2 border-t border-gray-300">
                <div className="bg-gray-50 border-r border-gray-300 p-4 font-medium text-gray-700">
                  <div className="py-2">勤務日</div>
                  <div className="py-2">勤務時間</div>
                  <div className="py-2">店休日</div>
                  <div className="py-2">ご応募・お問い合わせ</div>
                  <div className="py-2">オフィシャルサイト</div>
                </div>
                <div className="bg-white p-4 text-gray-800">
                  <div className="py-2">月曜日〜土曜日</div>
                  <div className="py-2">19:30～LAST</div>
                  <div className="py-2">日曜日</div>
                  <div className="py-2">
                    <a href="https://line.me/R/ti/p/@084rmhdk?oat_content=url&ts=01232147" className="text-blue-600 hover:underline">LINE友達追加はこちら</a><br />
                  </div>
                  <div className="py-2">
                    <Link href="https://sosui-group.com/" target="_blank" className="text-blue-600 hover:underline">公式サイト</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

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