'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const companies = [
  {
    name: 'CLUB gloria',
    description: '洗練された大人のためのラグジュアリーキャバクラ。',
    image: '/assets/store01.webp',
    link: 'https://www.tainew.com/kansai/shop/view/v502354/',
  },
  {
    name: 'LOUNGE blanc',
    description: '非日常を演出する、上質なナイトエンターテインメント。',
    image: '/assets/store05.webp',
    link: 'https://www.tainew.com/kansai/shop/view/v1000605/?gad_source=1&gad_campaignid=21660648673&gbraid=0AAAAADmU4OBjNLi12oLlM78P99bh1Dw_B',
  },
  {
    name: 'Luxury Bar GOAT',
    description: '非日常を演出する、上質なナイトエンターテインメント。',
    image: '/assets/store09.webp',
    link: 'https://www.tainew.com/kansai/shop/view/v501057/',
  }
]

// アニメーション定義
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}


const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};


export default function Store() {
  return (
    <section className="bg-black py-24 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            GROUP COMPANIES
          </h2>
          <p className="text-sm text-gray-400 tracking-widest">
            グループ店舗紹介
          </p>
        </motion.div>

        {/* カード一覧 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {companies.map((company) => (
            <motion.div
              key={company.name}
              variants={item}
            >
              <Link
                href={company.link}
                target="_blank"
                className="group block bg-neutral-900 rounded-2xl overflow-hidden
                hover:-translate-y-2 transition-all duration-500"
              >
                {/* 画像 */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* テキスト */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {company.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {company.description}
                  </p>

                  <span className="inline-block text-sm text-white/70 group-hover:text-white transition">
                  求人詳細 →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
