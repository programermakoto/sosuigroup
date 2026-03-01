'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Footer() {
  return (
    <footer className="relative bg-[#f4f4f2] text-black overflow-hidden pt-16 md:pt-24 pb-12 md:pb-16">

      <div className="absolute -top-24 left-0 w-[140%] h-[300px] bg-[#e9e9e6] rotate-[-6deg] shadow-inner z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-16">

        {/* ロゴ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] md:tracking-[0.3em]">
            SOSUI GROUP
          </h2>
          <p className="text-[10px] md:text-xs text-gray-500 tracking-[0.3em] md:tracking-[0.4em]">
            SPACE / PEOPLE / VALUE
          </p>
        </motion.div>

        {/* SNS（スマホ2列） */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:flex md:justify-center gap-3 md:gap-4 mb-14"
        >
          <Link href="https://www.instagram.com/sosui_group" className="text-center px-4 py-2 border border-black/20 rounded-full text-xs md:text-sm hover:bg-black hover:text-white transition">
            Instagram
          </Link>
          <Link href="https://www.tiktok.com/@gloria.nara?_r=1&_t=ZS-93JBjdqHFkQ" className="text-center px-4 py-2 border border-black/20 rounded-full text-xs md:text-sm hover:bg-black hover:text-white transition">
            TikTok
          </Link>
          <Link href="https://line.me/ti/p/qgwz-BfykK" className="text-center px-4 py-2 border border-black/20 rounded-full text-xs md:text-sm hover:bg-black hover:text-white transition">
            キャストLINE
          </Link>
          <Link href="https://lin.ee/XHvaDxW" className="text-center px-4 py-2 border border-black/20 rounded-full text-xs md:text-sm hover:bg-black hover:text-white transition">
            スタッフLINE
          </Link>
        </motion.div>

        {/* 会社概要 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:grid md:grid-cols-3 md:gap-8 md:space-y-0 mb-14 text-xs md:text-sm text-gray-700 text-center md:text-left"
        >
          <div>
            <h3 className="font-medium mb-1">会社名</h3>
            <p>双水観光株式会社</p>
          </div>
          <div>
            <h3 className="font-medium mb-1">代表者</h3>
            <p>松本 侑大</p>
          </div>
          <div>
            <h3 className="font-medium mb-1">所在地</h3>
            <p className="leading-relaxed">
              〒634-0813<br />
              奈良県橿原市四条町６４５−１
            </p>
          </div>
        </motion.div>

        {/* 問い合わせ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link
            href="mailto:yudai.gloria@au.com"
            className="inline-block w-full md:w-auto px-8 py-3 rounded-2xl border border-black/20 text-xs md:text-sm font-medium tracking-wider hover:bg-black hover:text-white transition backdrop-blur-md bg-white/30"
          >
            お問い合わせ
          </Link>
        </motion.div>

        {/* コピーライト */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mt-14 text-center text-[10px] md:text-xs text-gray-500"
        >
          © 2026 SOSUI GROUP. All Rights Reserved.
        </motion.div>

      </div>
    </footer>
  )
}