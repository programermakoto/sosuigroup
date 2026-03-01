'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useTransform, useScroll, useSpring } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

const shops = [
  { name: 'CLUB gloria', link: 'https://www.tainew.com/kansai/shop/view/v502354/', image: '/assets/store03.webp' },
  { name: 'LOUNGE blanc', link: 'https://www.tainew.com/kansai/shop/view/v1000605/', image: '/assets/store04.webp' },
  { name: 'Luxury Bar GOAT', link: 'https://www.tainew.com/kansai/shop/view/v1000605/', image: '/assets/store09.webp' },
]



export default function CastRecruit() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const move = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const { scrollY } = useScroll()
  const ySlow = useTransform(scrollY, [0, 800], [0, -60])
  const yFast = useTransform(scrollY, [0, 800], [0, -120])
  const smoothX = useSpring(mouse.x, { stiffness: 40, damping: 25 })
  const smoothY = useSpring(mouse.y, { stiffness: 40, damping: 25 })

  return (
    <>
    {/* ================= HERO ================= */}
<section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

<motion.div style={{ y: yFast }} className="absolute inset-0 flex items-center justify-center">

  <picture className="w-full h-full flex items-center justify-center">
    {/* SP画像 */}
    <source
      media="(max-width: 768px)"
      srcSet="/assets/cast.sp.webp"
    />

    {/* PC画像 */}
    <Image
      src="/assets/cast.pc.webp"
      alt="hero"
      fill
      priority
      className="object-contain"
    />
  </picture>

</motion.div>

</section>
    <section className="relative bg-[#f4f2ee] overflow-hidden text-black py-24">

      {/* 背景ライト */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(700px at ${smoothX.get()}px ${smoothY.get()}px, rgba(255,255,255,0.15), transparent 80%)`
        }}
      />

      {/* 斜め3Dパネル */}
      <motion.div style={{ y: ySlow }} className="absolute -top-40 -left-40 w-[150%] h-[400px] bg-[#e6e2d8] rotate-[-6deg] shadow-inner" />

      <div className="max-w-6xl mx-auto px-6 md:px-16 relative z-10 space-y-24">

        {/* ===== タイトル ===== */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }} className="text-center">
          <h2 className="text-5xl md:text-6xl font-extralight tracking-[0.35em]">CAST RECRUIT</h2>
          <p className="text-sm tracking-[0.5em] text-gray-500 mt-2">SOSUI GROUP</p>
        </motion.div>

        {/* ===== 店舗カード ===== */}
        <div className="grid md:grid-cols-3 gap-6">
          {shops.map((shop, i) => (
            <motion.div key={i} whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.5 }} className="group relative rounded-3xl shadow-2xl overflow-hidden bg-white/70 backdrop-blur-md">
              <Link href={shop.link} target="_blank">
                <div className="relative h-64 md:h-72 w-full overflow-hidden">
                  <Image src={shop.image} alt={shop.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{shop.name}</h3>
                  <span className="text-sm text-white tracking-wide">求人詳細 →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ===== 業務概要 ===== */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }} className="relative mt-20">
          <p className="absolute top-0 left-0 text-3xl md:text-4xl font-bold text-gray-300 rotate-[-6deg] opacity-30">WORK</p>
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl shadow-2xl bg-white/60 backdrop-blur-lg hover:scale-105 transition-transform duration-500">
              <h4 className="text-xl font-semibold mb-4">業務概要</h4>
              <ul className="list-disc list-inside leading-loose text-gray-700">
                <li>接客・ドリンク提供・お客様との会話など</li>
                <li>未経験者も安心の研修あり</li>
                <li>キャバクラ・ラウンジでの業務全般</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl shadow-2xl bg-white/60 backdrop-blur-lg hover:scale-105 transition-transform duration-500">
              <h4 className="text-xl font-semibold mb-4">給与・待遇</h4>
              <p className="leading-loose">体入時給 5,000円以上 【体験日収 20,000円】＋入店時同様の各種バックあり ★ノルマ一切無し ★全額日払い</p>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>アクセス: JR奈良駅 徒歩1分 / 近鉄近鉄奈良駅 徒歩11分</li>
                <li>勤務時間: 20:00～LAST</li>
                <li>応募年齢: 18歳～35歳</li>
                <li>すぐに働きたい方大歓迎</li>
                <li>体入給与例: 3時間で15,000円以上、5時間で25,000円以上</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ===== お店のこだわり ===== */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }} className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { title: 'お給料', items: ['全額日払いOK', 'ドリンクバックあり', '指名バックあり', '同伴バックあり', 'ノルマなし'] },
            { title: '身なり', items: ['ドレスレンタルあり', 'ヒールレンタルあり', 'ヘアメイク完備'] },
            { title: '働く環境', items: ['未経験者大歓迎', '経験者優遇', 'Wワーク歓迎', '3時間以内の勤務OK', '週1回出勤OK', '土日営業', '終電上がりOK', '送りあり', '友達と一緒に体入OK'] }
          ].map((block, i) => (
            <motion.div key={i} className="p-6 rounded-3xl shadow-2xl bg-white/50 backdrop-blur-md hover:scale-105 transition-transform duration-500">
              <h4 className="text-xl font-semibold mb-3">{block.title}</h4>
              <ul className="list-disc list-inside text-gray-700 leading-loose">
                {block.items.map((it, j) => (<li key={j}>{it}</li>))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

       
        {/* ===== LOCATION / GOOGLE MAP ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative mt-24"
        >

          {/* 背景ビッグテキスト */}
          <p className="absolute -top-16 left-0 text-6xl md:text-8xl font-bold text-gray-300 opacity-20 rotate-[-8deg] pointer-events-none">
            LOCATION
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* 住所情報 */}
            <div className="space-y-6">

              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="p-8 bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl"
              >
                <h3 className="text-2xl font-semibold mb-6 tracking-wide">
                  ACCESS
                </h3>

                <p className="leading-loose text-gray-700">
                  〒630-8244<br />
                  奈良県奈良市三条町606-60<br />
                  ジョイパレス奈良駅前パートⅡ 301号
                </p>

                <div className="mt-6 text-gray-600 text-sm leading-loose">
                  JR【奈良駅】徒歩1分<br />
                  近鉄【近鉄奈良駅】徒歩11分
                </div>

                <Link
                  href="https://www.google.com/maps/search/?api=1&query=奈良県奈良市三条町606-60 ジョイパレス奈良駅前パートⅡ301号"
                  target="_blank"
                  className="inline-block mt-8 px-8 py-3 rounded-3xl border text-sm hover:bg-black hover:text-white transition"
                >
                  Google Mapで開く →
                </Link>
              </motion.div>

            </div>

            {/* Google Map 3Dカード */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/70 backdrop-blur-xl"
              style={{ transformPerspective: 1200 }}
            >

              {/* ガラス反射レイヤー */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none z-10" />

              <iframe
                src="https://www.google.com/maps?q=奈良県奈良市三条町606-60 ジョイパレス奈良駅前パートⅡ301号&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                className="rounded-3xl"
              />

            </motion.div>

          </div>
        </motion.div>
        {/* ===== SNS / 連絡 ===== */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }} className="text-center mt-16 space-y-4">
          <h3 className="text-2xl font-bold tracking-wide">SNS / お問い合わせ</h3>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link href="https://www.tiktok.com/@gloria.nara?_r=1&_t=ZS-93JBjdqHFkQ" className="px-6 py-2 border rounded-3xl text-sm hover:bg-black hover:text-white transition">TikTok</Link>
            <Link href="https://www.instagram.com/sosui_group" className="px-6 py-2 border rounded-3xl text-sm hover:bg-black hover:text-white transition">Instagram</Link>
            <Link href="https://line.me/ti/p/qgwz-BfykK" target="_blank" className="px-6 py-2 border rounded-3xl text-sm hover:bg-black hover:text-white transition">公式LINE</Link>
            <Link href="tel:08061441370" className="px-6 py-2 border rounded-3xl text-sm hover:bg-black hover:text-white transition">お電話</Link>
          </div>
        </motion.div>

      </div>
    </section>
    </>
  )
}
