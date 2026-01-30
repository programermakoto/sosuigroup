'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SNS_ITEMS = [
  {
    platform: 'TikTok 新人黒服の野望',
    href: 'https://www.tiktok.com/@gloria.nara?_r=1&_t=ZS-93JBjdqHFkQ',
    image: '/assets/sns03.webp',
  },
  {
    platform: 'Instagram 松本社長',
    href: 'https://www.instagram.com/yudai.sousui?igsh=YWE3aTJnYnYzZ2U3&utm_source=qr',
    image: '/assets/member05.webp',
  },
  {
    platform: 'TikTok グロリア奈良',
    href: 'https://www.tiktok.com/@gloria.nara2?_r=1&_t=ZS-93JBtqqc70S',
    image: '/assets/sns01.webp',
  },
  {
    platform: 'Instagram SOSUI GROUP',
    href: 'https://www.instagram.com/sosui_group',
    image: '/assets/sns02.webp',
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
            className="group block"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-black shadow-lg transition-all duration-500 group-hover:scale-[1.03]">

              {/* 画像 */}
              <Image
                src={item.image}
                alt={item.platform}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* 下部グラデーション（重要） */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* テキストラベル */}
              <div className="
                absolute bottom-4 left-4 right-4
                rounded-xl px-4 py-3
                bg-black/50 backdrop-blur-md
                text-white
              ">
                <p className="text-xs tracking-widest opacity-80">
                  OFFICIAL
                </p>
                <p className="text-sm md:text-base font-semibold leading-snug">
                  {item.platform}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
    </section>
  )
}
