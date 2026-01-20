'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function Company() {
  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* ===== HERO ===== */}
        <section className="h-screen flex flex-col justify-center items-center text-center mt-10 md:mt-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <Image src="/assets/sosui.PNG" alt="sosui" width={120} height={120}  className="mx-auto"/>

            <p className="text-sm tracking-widest text-gray-500">
              ABOUT SOSUI GROUP
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              夜の価値を、<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">
                次のステージへ
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
              SOSUI GROUPは、キャバクラ・ラウンジ・バー事業を中心に
              夜のエンターテインメントをアップデートし続けるグループです。
            </p>
          </motion.div>

          {/* スクロール演出 */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mt-16"
          >
            <Image src="/assets/scroll.gif" alt="scroll" width={200} height={200} />
          </motion.div>
        </section>

        {/* ===== 理念 / ミッション ===== */}
        <section className="py-32 space-y-32">
          {[
            {
              title: "理念",
              text: "夜の世界に誇りと品格を。人が輝く場所を創り続ける。",
            },
            {
              title: "ミッション",
              text: "店舗・スタッフ・お客様、すべてが価値を感じられる夜の体験を提供する。",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="text-center max-w-3xl mx-auto space-y-4"
            >
              <h2 className="text-3xl font-bold">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </section>

        {/* ===== SNS ===== */}
        <section className="py-32 space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-widest text-gray-500">
              SOCIAL MEDIA
            </p>
            <h2 className="text-3xl font-bold mt-2">
              運営店舗・SNS
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "CLUB gloria", image: "/assets/member01.webp" },
              { title: "LOUNGE blanc", image: "/assets/member02.webp" },
              { title: "Luxury Bar GOAT", image: "/assets/member03.webp" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="relative h-72 rounded-2xl overflow-hidden group shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />

                <div className="absolute bottom-0 p-6 space-y-4 text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  <div className="flex gap-3">
                    <Link href="#" className="px-4 py-1 border rounded-full text-sm hover:bg-white hover:text-black transition">
                      Instagram
                    </Link>
                    <Link href="#" className="px-4 py-1 border rounded-full text-sm hover:bg-white hover:text-black transition">
                      TikTok
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== 会社概要 & 特商法 ===== */}
        {[{
          title: "会社概要",
          data: [
            ["会社名", "SOSUI GROUP"],
            ["代表者", "松本 侑大"],
            ["事業内容", "キャバクラ・ラウンジ・バー運営"],
            ["所在地", "大阪府〇〇市〇〇町"],
          ]
        },{
          title: "特定商取引法に基づく表記",
          data: [
            ["販売事業者", "SOSUI GROUP"],
            ["運営責任者", "松本 侑大"],
            ["支払方法", "現金・クレジットカード"],
            ["販売価格", "各店舗・サービスページに記載"],
          ]
        }].map((section, i) => (
          <motion.section
            key={i}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="py-24"
          >
            <h2 className="text-3xl font-bold mb-8">{section.title}</h2>
            <div className="rounded-2xl border overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {section.data.map(([k, v], j) => (
                    <tr key={j} className="border-b last:border-none">
                      <th className="p-4 bg-gray-50 w-1/3 text-left">{k}</th>
                      <td className="p-4">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>
        ))}

      </div>
    </div>
  );
}
