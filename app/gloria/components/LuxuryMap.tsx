'use client'

import { motion } from 'framer-motion'

export default function LuxuryMap() {
  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest">
            ACCESS
          </h2>
          <p className="mt-4 text-gray-400">
            JR奈良駅から徒歩約2分の好立地
          </p>
        </motion.div>

        {/* ガラス風カード */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">

            {/* 左：店舗情報 */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-6">
                club gloria（グロリア）
              </h3>

              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>奈良県奈良市三条町606-60</p>
                <p>ジョイパレス奈良駅前パートⅡ 3F</p>
                <p>TEL：080-6144-1370</p>
                <p>営業時間：20:00～LAST</p>
                <p>年中無休</p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=奈良県奈良市三条町606-60"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
              >
                GoogleMapでルートを見る →
              </a>
            </div>

            {/* 右：Map */}
            <div className="relative h-[400px] md:h-auto">
              <iframe
                src="https://www.google.com/maps?q=奈良県奈良市三条町606-60&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) contrast(110%) brightness(90%)' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}