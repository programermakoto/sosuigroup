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
    link: 'https://www.tainew.com/kansai/shop/view/v1000605/',
  },
  {
    name: 'Luxury Bar GOAT',
    description: '非日常を演出する、上質なナイトエンターテインメント。',
    image: '/assets/store09.webp',
    link: 'https://www.tainew.com/kansai/shop/view/v501057/',
  }
]

export default function Store() {
  return (
    <section className="bg-[#f5f5f3] py-24 text-neutral-900">

      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* タイトル */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.2em]">
            GROUP COMPANIES
          </h2>
          <p className="text-sm text-neutral-500 tracking-widest">
            グループ店舗紹介
          </p>
        </div>

        {/* カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {companies.map((company) => (
            <motion.div
              key={company.name}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href={company.link}
                target="_blank"
                className="group block"
              >
                {/* 画像ボックス（背景なし） */}
                <div
                  className="relative h-56
                  transition duration-500
                  group-hover:-rotate-1
                  drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)]"
                >
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* テキスト */}
                <div className="mt-6 space-y-2">
                  <h3 className="text-lg font-medium">
                    {company.name}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {company.description}
                  </p>
                  <span className="text-xs tracking-widest text-neutral-500 group-hover:text-black transition">
                    VIEW →
                  </span>
                </div>

              </Link>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}