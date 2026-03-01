'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Company() {
  return (
    <div className="relative bg-[#f4f4f2] text-black overflow-hidden">

      {/* ===== 斜め3Dウォール（上） ===== */}
      <div className="absolute -top-40 -left-32 w-[140%] h-[420px] bg-[#e9e9e6] rotate-[-6deg] shadow-inner z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ===== HERO ===== */}
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center space-y-8">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <Image src="/assets/sosui.PNG" alt="sosui" width={100} height={100} className="mx-auto" />

            <p className="text-xs tracking-[0.4em] text-gray-500">
              ABOUT SOSUI GROUP
            </p>

            <h1 className="text-4xl md:text-5xl font-light leading-tight">
              水商売の価値を
              <br />
              次のステージへ。
            </h1>

            <p className="max-w-xl mx-auto text-gray-600 leading-relaxed text-sm">
              夜のエンターテインメントをアップデートし、
              誇りと品格ある空間を創造する。
            </p>
          </motion.div>
        </section>

        {/* ===== 代表メッセージ ===== */}
        <section className="py-24 relative">

          <div className="absolute right-[-15%] bottom-0 w-[70%] h-[260px] bg-[#e6e6e3] rotate-[8deg]" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col md:flex-row items-center gap-16"
          >

            <div className="w-full md:w-[40%] relative">
              <div className="absolute -inset-4 bg-white/40 backdrop-blur-md rounded-[32px] shadow-2xl" />
              <Image
                src="/assets/member05.webp"
                alt="代表"
                width={500}
                height={600}
                className="relative rounded-[32px] object-cover w-full"
              />
            </div>

            <div className="w-full md:w-[50%] space-y-8">

              <p className="text-xs tracking-[0.4em] text-gray-400 uppercase">
                CEO MESSAGE
              </p>

              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                代表メッセージ
              </h2>

              <div className="p-8 bg-white/60 backdrop-blur-lg border border-black/10 rounded-2xl shadow-xl space-y-4">
                <ul className="text-gray-700 text-sm leading-relaxed">
                  <li>・お客様に楽しんで頂きたいと思うホスピタリティー</li>
                  <li>・お客様に喜んで貰えるクオリティー</li>
                  <li>・日々努力し、日々改善、向上するバイタリティー</li>
                </ul>
                <p className="text-gray-600 text-sm leading-relaxed">
                  を大切にしてお客様にSOSUI GROUP選んで頂き<br></br>
                  沢山の方に満足して頂けるお店づくりの為に<br></br>
                  努力できるスタッフ（仲間）を募集しています。<br></br>
                  <br></br>
                  スタッフ（仲間）が自分の仕事に責任と自信を持ち
                  お店と仲間を誇りに想い、皆で成長し、<br></br>
                  一人一人の物心両面の豊かさを実現していきます。<br></br>
                  <br></br>
                  努力してきた自分達にしか成し得ない<br></br>
                  奈良県の水商売の新しい文化、価値を作っていく事が<br></br>
                  自分達の定めだと思っています。
                </p>
              </div>



            </div>
          </motion.div>
        </section>

        {/* ===== 会社概要 ===== */}
        <section className="py-24">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.4em] text-gray-500 mb-2">
              COMPANY PROFILE
            </p>
            <h2 className="text-3xl font-light mb-12">
              会社概要
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="bg-white/70 backdrop-blur-md border border-black/10 rounded-3xl shadow-xl overflow-hidden"
          >
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["会社名", "双水観光株式会社"],
                  ["代表者", "松本 侑大"],
                  ["事業内容", "キャバクラ・ラウンジ・バー運営"],
                  ["所在地", "〒634-0813 奈良県橿原市四条町６４５−１"],
                ].map(([k, v], i) => (
                  <tr key={i} className="border-b last:border-none">
                    <th className="p-6 bg-black/5 w-1/3 text-left font-medium">{k}</th>
                    <td className="p-6">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

        </section>

      </div>
    </div>
  );
}