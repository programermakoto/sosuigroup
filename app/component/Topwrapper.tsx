'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
}

export default function Topwrapper() {
  return (
    <section className="py-24 space-y-32">

      {/* ===== SOSUI GROUPとは ===== */}
      <motion.article
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          flex flex-col md:flex-row
          justify-center items-center
          gap-12
        "
      >
        {/* 画像 */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full md:w-[30%]"
        >
          <Image
            src="/assets/store04.webp"
            alt="SOSUI GROUP"
            width={500}
            height={300}
            className="rounded-2xl object-cover w-full"
          />
        </motion.div>

        {/* テキスト */}
        <div className="w-full md:w-[50%] text-center space-y-6 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide border-b pb-3">
            SOSUI GROUPとは？
          </h2>
          <p className="text-gray-700 leading-relaxed md:px-10">
            奈良県の奈良市、橿原市を中心にキャバクラ、ラウンジ、ガールズバーを<br></br>
            多店舗展開しております。
            <br></br>
            『人の想いに人が集まる会社』をモットーに掲げ

            一人一人の活気、活力を一つにまとめ
            奈良県から全国に出店していくつもりです。
            <br></br>
            常識にとらわれない様々なチャレンジを進めて参ります。
          </p>


        </div>
      </motion.article>

      {/* ===== 代表挨拶 ===== */}
      <motion.article
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="
          flex flex-col md:flex-row-reverse
          justify-center items-center
          gap-12
        "
      >
        {/* 画像 */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full md:w-[30%]"
        >
          <Image
            src="/assets/member05.webp"
            alt="代表挨拶"
            width={500}
            height={500}
            className="rounded-2xl object-cover w-full"
          />
        </motion.div>

        {/* テキスト */}
        <div className="w-full md:w-[50%] text-center space-y-6 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide border-b pb-3">
            SOSUI GROUP 代表挨拶
          </h2>
          <p className="text-gray-700 leading-relaxed md:px-10">
            奈良県の地元の方から出張、観光の方に
            "選ばれるお店作り"を心掛けています。<br></br>
            <br></br>
            ・お客様に楽しんで頂きたいと思うホスピタリティー<br></br>
            ・お客様に喜んで貰えるクオリティー<br></br>
            ・日々努力し、日々改善、向上するバイタリティー<br></br>
            <br></br>
            を大切にして
            お客様にSOSUI GROUP選んで頂き
            沢山の方に満足して頂けるお店づくりの為に
            努力できるスタッフ（仲間）を募集しています。<br></br><br></br>

            スタッフ（仲間）が自分の仕事に責任と自信を持ち
            お店と仲間を誇りに想い、皆で成長し、
            一人一人の物心両面の豊かさを実現していきます。<br></br><br></br>

            努力してきた自分達にしか成し得ない
            奈良県の水商売の新しい文化、価値を作っていく事が
            自分達の定めだと思っています。
          </p>


        </div>
      </motion.article>

    </section>
  )
}
