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
            height={500}
            className="rounded-2xl object-cover w-full"
          />
        </motion.div>

        {/* テキスト */}
        <div className="w-full md:w-[50%] text-center space-y-6 px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide border-b pb-3">
            SOSUI GROUPとは？
          </h2>
          <p className="text-gray-700 leading-relaxed md:px-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Magnam eum omnis quasi illum, cumque sunt doloribus ab harum eius.
          </p>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/company"
              className="inline-block bg-black/80 text-white px-8 py-3 rounded-full font-medium hover:bg-black transition"
            >
              詳しくは
            </Link>
          </motion.div>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Magnam eum omnis quasi illum, cumque sunt doloribus ab harum eius.
          </p>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/president"
              className="inline-block bg-black/80 text-white px-8 py-3 rounded-full font-medium hover:bg-black transition"
            >
              詳しくは
            </Link>
          </motion.div>
        </div>
      </motion.article>

    </section>
  )
}
