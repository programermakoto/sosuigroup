'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const members = [
  {
    name: "山田 太郎",
    role: "エンジニア / ディレクター",
    image: "/assets/member01.webp",
    message: "本質的な価値を形にすることを大切にしています。",
    instagram: "#",
    tiktok: "#",
  },
  {
    name: "佐藤 花子",
    role: "デザイナー",
    image: "/assets/member02.webp",
    message: "体験として美しいデザインを追求しています。",
    instagram: "#",
    tiktok: "#",
  },
  {
    name: "佐藤 花子",
    role: "デザイナー",
    image: "/assets/member02.webp",
    message: "体験として美しいデザインを追求しています。",
    instagram: "#",
    tiktok: "#",
  },
];

const stores = [
  { name: "CLUB gloria", instagram: "#", tiktok: "#" },
  { name: "LOUNGE blanc", instagram: "#", tiktok: "#" },
  { name: "Luxury Bar GOAT", instagram: "#", tiktok: "#" },
];

export default function President() {
  return (
    <>
      {/* ===== 代表挨拶 ===== */}
      <section className="bg-black text-white py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* テキスト */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.9 }}
            className="space-y-8"
          >
            <p className="text-sm tracking-widest text-white/50">
              MESSAGE FROM THE PRESIDENT
            </p>

            <h1 className="text-3xl md:text-4xl font-bold leading-relaxed">
              変化の時代に、<br />
              本質的な価値を創り続ける。
            </h1>

            <p className="text-white/80 leading-loose">
              夜のエンターテインメントに、誇りと品格を。<br />
              人が輝く場を創ることが、私たちの使命です。
            </p>

            <p className="pt-4 font-medium">
              代表取締役社長　松本 侑大
            </p>

            {/* 社長SNS */}
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">TikTok</a>
            </div>

            <div className="border-t border-white/10 pt-6 space-y-6">
              {stores.map((store, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="space-y-2"
                >
                  <p className="text-xs tracking-widest text-white/50">
                    OFFICIAL STORE SNS【{store.name}】
                  </p>
                  <div className="flex gap-6 text-sm">
                    <a href={store.instagram} className="hover:text-white transition">Instagram</a>
                    <a href={store.tiktok} className="hover:text-white transition">TikTok</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 画像 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <Image
                src="/assets/member05.webp"
                alt="代表取締役"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== チーム ===== */}
      <section className="bg-black text-white py-28 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto space-y-20">

          <div className="text-center space-y-4">
            <p className="text-sm tracking-widest text-white/50">
              OUR TEAM
            </p>
            <h2 className="text-3xl font-bold">
              共に価値を創る仲間たち
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16">
            {members.map((member, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center space-y-6"
              >
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="font-semibold text-lg">{member.name}</p>
                  <p className="text-sm text-white/60">{member.role}</p>
                </div>

                <p className="text-sm text-white/70 leading-relaxed">
                  {member.message}
                </p>

                <div className="flex justify-center gap-6 text-sm text-white/60">
                  <a href={member.instagram} className="hover:text-white transition">Instagram</a>
                  <a href={member.tiktok} className="hover:text-white transition">TikTok</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TOP ===== */}
      <div className="py-24 flex justify-center bg-white">
        <Link
          href="/"
          className="px-8 py-3 border border-black rounded-full text-sm tracking-widest hover:opacity-60 transition"
        >
          ↑ BACK TO TOP
        </Link>
      </div>
    </>
  );
}
