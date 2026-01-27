'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Topwrapper() {
  return (
    <section className="py-24 px-3 space-y-32">

      {/* ===== SOSUI GROUPとは ===== */}
      <article
        className="
          flex flex-col md:flex-row
          justify-center items-center
          gap-12
        "
      >
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
        <div className="w-full md:w-[50%] text-center space-y-6 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide border-b pb-3">
            SOSUI GROUPとは？
          </h2>
          <p className="text-gray-700 leading-relaxed md:px-10">
            奈良県の奈良市、橿原市を中心にキャバクラ、ラウンジ、ガールズバーを
            多店舗展開しております。<br /><br />
            『人の想いに人が集まる会社』をモットーに掲げ、
            一人一人の活気、活力を一つにまとめ
            奈良県から全国に出店していくつもりです。<br /><br />
            常識にとらわれない様々なチャレンジを進めて参ります。
          </p>
        </div>
      </article>

      {/* ===== 代表挨拶 ===== */}
      <article
        className="
          flex flex-col md:flex-row-reverse
          justify-center items-center
          gap-12
        "
      >
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
        <div className="w-full md:w-[50%] text-center space-y-6 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide border-b pb-3">
            SOSUI GROUP 代表挨拶
          </h2>
          <p className="text-gray-700 leading-relaxed md:px-10">
            奈良県の地元の方から出張、観光の方に
            「選ばれるお店作り」を心掛けています。<br /><br />

            ・お客様に楽しんで頂きたいホスピタリティー<br />
            ・お客様に喜んで貰えるクオリティー<br />
            ・日々努力し、改善・向上するバイタリティー<br /><br />

            お客様にSOSUI GROUPを選んで頂き、
            沢山の方に満足して頂けるお店づくりの為に
            努力できるスタッフ（仲間）を募集しています。<br /><br />

            スタッフ一人一人が仕事に誇りと自信を持ち、
            仲間と共に成長し、物心両面の豊かさを実現していきます。<br /><br />

            奈良県の水商売に新しい文化と価値を創ることが
            私たちの使命です。
          </p>
        </div>
      </article>

    </section>
  )
}
