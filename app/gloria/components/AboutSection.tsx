'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const sections = [
  {
    src: '/assets/store01.webp',
    title:
      '奈良駅近くにある「club gloria（グロリア）」は、落ち着いた高級感と親しみやすさを兼ね備えたキャバクラ',
    content: [
      'JR奈良駅から徒歩約2分という好立地。',
      '黒を基調とした上品なインテリア。',
      'しっとりとした大人の雰囲気。',
      '20代前半中心の親しみやすいキャスト。',
      '丁寧な料金説明で安心。'
    ],
  },
  {
    src: '/assets/store02.webp',
    title: '料金システム',
    content: [
      '1set 60分：6,000円',
      '延長30分：4,000円',
      '延長60分：6,000円',
      '指名・同伴：各2,000円',
      '税・サービス料：20%',
      '初回：3,000円～（税サ込）'
    ],
  },
  {
    src: '/assets/store03.webp',
    title: '女の子',
    content: [
      '在籍キャスト多数。',
      'プロフィール・出勤情報を事前確認可能。',
      'あなたにぴったりのキャストを見つけてください。'
    ],
    link: 'https://www.pokepara.jp/nara/m335/a391/shop6973/gal/',
  },
]

export default function Info3DSection() {
  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-6xl mx-auto px-6 space-y-32">

        {sections.map((item, i) => {
          const isEven = i % 2 === 0
          const isGirlSection = i === 2

          return (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                isEven ? '' : 'md:flex-row-reverse'
              }`}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  rotateX: 45,
                  rotateY: isEven ? -30 : 30,
                  y: 100,
                  scale: 0.92,
                }}
                whileInView={{
                  opacity: 1,
                  rotateX: 0,
                  rotateY: 0,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1.4,
                  delay: i * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="relative w-full md:w-3/4 rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  perspective: 1200,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="relative w-full h-[380px] md:h-[420px]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-black/75" />

                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-6">
                    {item.title}
                  </h3>

                  <div className="space-y-3 text-sm md:text-base text-gray-200 leading-relaxed">
                    {item.content.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>

                  {/* 👇 女の子セクションだけCTA追加 */}
                  {isGirlSection && (
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 inline-block bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full text-white font-semibold shadow-lg transition"
                    >
                      今すぐ在籍キャストを見る →
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}