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
    <footer className="relative bg-[#f4f4f2] text-black overflow-hidden pt-24 pb-16">

      {/* 斜め3Dウォール */}
      <div className="absolute -top-24 left-0 w-[140%] h-[300px] bg-[#e9e9e6] rotate-[-6deg] shadow-inner z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">

        {/* 会社ロゴ / SNS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16"
        >
          <div>
            <h2 className="text-2xl font-light tracking-[0.3em]">SOSUI GROUP</h2>
            <p className="text-xs text-gray-500 tracking-[0.4em] mt-2">SPACE / PEOPLE / VALUE</p>
          </div>

          <div className="flex gap-4">
            <Link href="https://www.instagram.com/sosui_group" className="px-4 py-2 border border-black/20 rounded-full text-sm hover:bg-black hover:text-white transition">
              Instagram
            </Link>
            <Link href="https://www.tiktok.com/@gloria.nara?_r=1&_t=ZS-93JBjdqHFkQ" className="px-4 py-2 border border-black/20 rounded-full text-sm hover:bg-black hover:text-white transition">
              TikTok
            </Link>
            <Link href="https://line.me/ti/p/qgwz-BfykK" className="px-4 py-2 border border-black/20 rounded-full text-sm hover:bg-black hover:text-white transition">
              キャストLINE
            </Link>
            <Link href="https://lin.ee/XHvaDxW" className="px-4 py-2 border border-black/20 rounded-full text-sm hover:bg-black hover:text-white transition">
              スタッフLINE
            </Link>
          </div>
        </motion.div>

        {/* 会社概要 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-8 mb-16 text-sm text-gray-700"
        >
          <div>
            <h3 className="font-medium mb-2">会社名</h3>
            <p>双水観光株式会社</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">代表者</h3>
            <p>松本 侑大</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">所在地</h3>
            <p>〒634-0813 奈良県橿原市四条町６４５−１</p>
          </div>
        </motion.div>

        {/* 問い合わせボタン */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
         <Link
  href="mailto:yudai.gloria@au.com"
  className="inline-block px-8 py-3 rounded-2xl border border-black/20 text-sm font-medium tracking-widest hover:bg-black hover:text-white transition backdrop-blur-md bg-white/30"
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
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center text-xs text-gray-500"
        >
          © 2026 SOSUI GROUP. All Rights Reserved.
        </motion.div>

      </div>
    </footer>
  )
}