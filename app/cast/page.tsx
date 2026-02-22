'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from 'framer-motion'

export default function CastRecruit() {

  /* ================= 光演出 ================= */
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const smoothX = useSpring(mouse.x, { stiffness: 40, damping: 30 })
  const smoothY = useSpring(mouse.y, { stiffness: 40, damping: 30 })

  const { scrollY } = useScroll()
  const layer1 = useTransform(scrollY, [0, 1500], [0, -120])
  const layer2 = useTransform(scrollY, [0, 1500], [0, -60])

  return (
    <main className="relative bg-[#0c0c0d] text-white overflow-hidden">

      {/* ================= マウス追従ライト ================= */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(
            700px at ${smoothX.get()}px ${smoothY.get()}px,
            rgba(255,215,170,0.15),
            transparent 65%
          )`
        }}
      />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">

        <motion.div
          style={{ y: layer1 }}
          className="space-y-10 max-w-4xl"
        >
          <p className="tracking-[0.5em] text-sm text-gray-400">
            CAST RECRUIT 2026
          </p>

          <h1 className="text-5xl md:text-7xl font-extralight tracking-wide leading-tight">
            盛況につき<br className="md:hidden" />
            キャスト大募集
          </h1>

          <div className="w-20 h-[1px] bg-yellow-400 mx-auto" />

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            平日から満卓。新規来店比率60％以上。<br />
            圧倒的集客力で、安定して稼げる環境を保証します。
          </p>
        </motion.div>

      </section>

      {/* ================= 数字で証明 ================= */}
      <motion.section
        style={{ y: layer2 }}
        className="py-32 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-center">

          <Stat number="60%+" label="新規来店比率" />
          <Stat number="¥12,000~" label="時間報酬目安" />
          <Stat number="100%" label="全額日払いOK" />

        </div>
      </motion.section>

      {/* ================= 安心設計 ================= */}
      <section className="py-40 px-6 bg-white/[0.03]">
        <div className="max-w-5xl mx-auto space-y-20">

          <SectionTitle title="SUPPORT & SAFETY" />

          <FeatureBlock
            title="未経験完全サポート"
            text="接客・会話・ドリンク作成・席マナーまで丁寧にサポート。体験入店で不安を解消してから本入店可能です。"
          />

          <FeatureBlock
            title="身バレ対策"
            text="SNS管理徹底・写真掲載任意・送迎あり。プライバシーを守る体制を整えています。"
          />

          <FeatureBlock
            title="ノルマ・罰金なし"
            text="精神的負担をなくし、長期的に働ける設計。数字ではなく“質”を重視します。"
          />

        </div>
      </section>

      {/* ================= 条件 ================= */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto space-y-16">

          <SectionTitle title="JOB DETAILS" />

          <div className="grid md:grid-cols-2 gap-12 text-gray-300">

            <Job title="職種" content="フロアキャスト" />
            <Job title="時間報酬" content="12,000円〜＋各種高額バック" />
            <Job title="勤務時間" content="20:00〜翌1:00 週1日/2h〜OK 終電可 送り有" />
            <Job title="待遇" content="全額日払い・寮完備・ドレス貸与・ヘアメイク完備・個人ロッカー" />
            <Job title="応募資格" content="18歳以上（高校生不可）未経験歓迎・経験者優遇・WワークOK" />
            <Job title="体験入店" content="即日可能・複数回OK・全額日払い" />

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-40 text-center">

        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent" />

        <div className="relative space-y-10">

          <h2 className="text-4xl font-extralight tracking-wide">
            まずはご相談からでも
          </h2>

          <div className="flex flex-col md:flex-row gap-8 justify-center">

            <CTA
              href="https://line.me/R/ti/p/xxxxxxxx"
              label="公式LINEで応募"
              primary
            />

            <CTA
              href="tel:08000000000"
              label="電話で応募"
            />

          </div>

        </div>

      </section>

    </main>
  )
}

/* ================= UI ================= */

function SectionTitle({ title }: any) {
  return (
    <h2 className="text-center text-3xl font-extralight tracking-[0.4em]">
      {title}
    </h2>
  )
}

function Stat({ number, label }: any) {
  return (
    <div className="space-y-4">
      <p className="text-5xl font-extralight text-yellow-400">
        {number}
      </p>
      <p className="text-gray-400 tracking-widest text-sm">
        {label}
      </p>
    </div>
  )
}

function FeatureBlock({ title, text }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-white/[0.05] border border-white/10 p-14 rounded-[40px] backdrop-blur-2xl space-y-6"
    >
      <h3 className="text-xl tracking-widest font-light">
        {title}
      </h3>
      <p className="text-gray-400 leading-loose">
        {text}
      </p>
    </motion.div>
  )
}

function Job({ title, content }: any) {
  return (
    <div className="space-y-3 border-b border-white/10 pb-6">
      <p className="text-white tracking-widest text-sm">
        {title}
      </p>
      <p>{content}</p>
    </div>
  )
}

function CTA({ href, label, primary }: any) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        target="_blank"
        className={
          primary
            ? "px-12 py-4 rounded-full bg-yellow-400 text-black font-semibold shadow-[0_20px_60px_rgba(255,215,0,0.4)]"
            : "px-12 py-4 rounded-full border border-white text-white"
        }
      >
        {label}
      </Link>
    </motion.div>
  )
}
