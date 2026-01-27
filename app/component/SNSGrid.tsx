'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SNS_ITEMS = [
  {
    platform: 'TikTok 新人黒服の野望',
    href: 'https://www.tiktok.com/@gloria.nara?_r=1&_t=ZS-93JBjdqHFkQ',
    image: '/assets/m.webp',
  },
  {
    platform: 'Instagram 松本社長',
    href: 'https://www.instagram.com/yudai.sousui?igsh=YWE3aTJnYnYzZ2U3&utm_source=qr',
    image: '/assets/m.webp',
  },
  {
    platform: 'TikTok グロリア奈良',
    href: 'https://www.tiktok.com/@gloria.nara2?_r=1&_t=ZS-93JBtqqc70S',
    image: '/assets/m.webp',
  },
  {
    platform: 'Instagram  SOSUI GROUP',
    href: 'https://www.instagram.com/sosui_group?igsh=MTBkd2djaGFobWpyaw%3D%3D&utm_source=',
    image: '/assets/m.webp',
  },
 
]

export default function SNSGrid() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        SNS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {SNS_ITEMS.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            className="group"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-black shadow-lg transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl">
              <Image
                src={item.image}
                alt={item.platform}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* オーバーレイ */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* テキスト */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-80">Official</p>
                <p className="text-sm md:text-lg font-semibold">{item.platform}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
