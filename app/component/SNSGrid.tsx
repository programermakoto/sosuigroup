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
    <section className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">

      {/* タイトル */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 tracking-wide">
        SNS
      </h2>

      {/* グリッド */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

        {SNS_ITEMS.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            className="group block"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl md:rounded-2xl bg-black shadow-md md:shadow-lg transition-all duration-300 active:scale-[0.98] md:group-hover:scale-[1.03]">

              {/* 画像 */}
              <Image
                src={item.image}
                alt={item.platform}
                fill
                className="object-cover transition-transform duration-500 md:group-hover:scale-110"
              />

              {/* グラデーション */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              {/* ラベル */}
              <div className="
                absolute bottom-3 left-3 right-3
                rounded-lg md:rounded-xl
                px-3 py-2 md:px-4 md:py-3
                bg-black/60 backdrop-blur-md
                text-white
              ">
                <p className="text-[10px] md:text-xs tracking-wider opacity-80">
                  OFFICIAL
                </p>

                <p className="
                  text-xs md:text-base
                  font-semibold
                  leading-snug
                  break-words
                ">
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