"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7 },
  }),
};

export default function RecruitPage() {
  return (
    <main className="bg-gradient-to-b from-black via-neutral-900 to-black text-white overflow-hidden">

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider">
            STAFF <span className="text-gold">RECRUIT</span>
          </h1>
          <p className="text-gray-300 tracking-widest">
            奈良エリア 夜の一流グループ
          </p>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-sm text-gray-400 mt-10"
          >
            ↓ SCROLL
          </motion.div>
        </motion.div>
      </section>

      {/* ===== 給与 ===== */}
      <section className="max-w-6xl mx-auto px-6 py-32 space-y-16">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-center tracking-widest"
        >
          SALARY
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "正社員",
              price: "月給 300,000円〜",
              sub: "＋歩合＋各種手当／毎月達成ボーナス",
            },
            {
              title: "店長",
              price: "月給 500,000円〜1,200,000円",
            },
            {
              title: "アルバイト",
              price: "時給 1,300円〜",
              sub: "＋インセンティブ",
            },
            {
              title: "送りドライバー",
              price: "時給 1,300円〜",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="border border-white/10 rounded-3xl p-10 bg-white/5 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-2xl font-bold">{item.price}</p>
              {item.sub && (
                <p className="text-sm text-gray-400 mt-2">{item.sub}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== 待遇 ===== */}
      <section className="bg-white text-black py-32">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center tracking-widest"
          >
            BENEFITS
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "日払いOK",
              "未経験者大歓迎",
              "経験者優遇",
              "歩合あり",
              "賞与あり",
              "駐車場あり",
              "社保完備",
              "社員旅行あり",
              "長期休暇あり",
              "研修制度あり",
            ].map((text, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-full border px-6 py-3 text-center font-medium"
              >
                {text}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 勤務地 ===== */}
      <section className="max-w-5xl mx-auto px-6 py-32 space-y-10">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-center tracking-widest"
        >
          LOCATION
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 text-center text-gray-300"
        >
          <p>奈良県奈良市三条町606-60 ジョイパレスPart2-201 / 301</p>
          <p>奈良県橿原市内膳町1丁目3-6 スタービル5F</p>
          <p className="text-sm text-gray-400">
            最寄駅：JR奈良駅 / 近鉄大和八木駅
          </p>
        </motion.div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-black py-32 text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-widest"
        >
          JOIN OUR TEAM
        </motion.h2>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/"
            className="inline-block px-12 py-4 bg-white text-black rounded-full font-semibold tracking-wider"
          >
            LINEで応募する
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
