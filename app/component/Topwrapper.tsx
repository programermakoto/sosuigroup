'use client'

import Image from 'next/image'
import React from 'react'

export default function Topwrapper() {
  return (
    <section className="py-24 px-3 space-y-32">

      {/* ===== SOSUI GROUPとは ===== */}
      <article className="flex flex-col md:flex-row justify-center items-center gap-12">

        {/* 画像 */}
        <div className="w-full md:w-[30%]">
          <Image
            src="/assets/store04.webp"
            alt="SOSUI GROUP"
            width={500}
            height={300}
            className="rounded-2xl object-cover w-full"
          />
        </div>

        {/* テキスト */}
        <div className="w-full md:w-[50%] space-y-6 px-4 md:px-0 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide border-b pb-3">
            SOSUI GROUPとは？
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">

            <div className="bg-gray-50 rounded-xl p-5">
              奈良県の奈良市・橿原市を中心に、<br />
              キャバクラ、ラウンジ、ガールズバーを多店舗展開しております。
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <span className="font-semibold text-gray-900">
                『人の想いに人が集まる会社』
              </span>
              をモットーに、<br />
              一人一人の活気と活力を一つにまとめ、
              奈良県から全国へ出店していきます。
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              常識にとらわれない、
              新しい価値創造と挑戦を続けて参ります。
            </div>

          </div>
        </div>
      </article>

      {/* ===== 代表挨拶 ===== */}
      <article className="flex flex-col md:flex-row-reverse justify-center items-center gap-12">

        {/* 画像 */}
        <div className="w-full md:w-[30%]">
          <Image
            src="/assets/member05.webp"
            alt="代表挨拶"
            width={500}
            height={500}
            className="rounded-2xl object-cover w-full"
          />
        </div>

        {/* テキスト */}
        <div className="w-full md:w-[50%] space-y-6 px-4 md:px-0 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide border-b pb-3">
            SOSUI GROUP 代表挨拶
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">

            <div className="bg-gray-50 rounded-xl p-5">
              地元の方、出張・観光で訪れる方に<br />
              <span className="font-semibold text-gray-900">
                「選ばれるお店作り」
              </span>
              を心掛けています。
            </div>

            <div className="bg-gray-50 rounded-xl p-5 space-y-1">
              <p>・お客様に楽しんで頂くホスピタリティー</p>
              <p>・お客様に喜んで頂くクオリティー</p>
              <p>・日々努力し、改善・向上するバイタリティー</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              お客様にSOSUI GROUPを選んで頂き、
              満足して頂けるお店づくりのために、
              共に成長できる仲間を募集しています。
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              奈良県の水商売に、
              <span className="font-semibold text-gray-900">
                新しい文化と価値
              </span>
              を創ることが私たちの使命です。
            </div>

          </div>
        </div>
      </article>

    </section>
  )
}
