'use client'

import Link from 'next/link'
import React from 'react'

export default function CastRecruit() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-28 px-6 text-center">

        {/* 背景グラデーション */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,0,0.25),transparent_60%)]" />

        <div className="relative max-w-5xl mx-auto space-y-6">
          <p className="text-sm tracking-[0.4em] text-gray-400">
            CAST RECRUIT 2026
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            盛況につき<br className="md:hidden" />
            キャスト大募集
          </h1>

          <p className="text-gray-300 text-lg md:text-xl">
            平日から満卓。新規来店多数。<br className="md:hidden" />
            圧倒的集客力で“稼げる環境”を保証します。
          </p>
        </div>
      </section>


      {/* ================= 数字で証明 ================= */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <Stat number="60%+" label="新規来店比率" />
          <Stat number="TOP" label="エリア集客力" />
          <Stat number="¥12,000~" label="時間報酬" />

        </div>
      </section>


      {/* ================= メッセージ ================= */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">

          <ContentBlock
            title="未経験の方へ"
            text="業界経験がなくても問題ありません。接客・会話・立ち振る舞いまで専属スタッフが丁寧にサポート。実際に未経験からスタートし、トップクラスで活躍しているキャストも多数在籍しています。"
          />

          <ContentBlock
            title="経験者の方へ"
            text="現在の条件を最大限考慮。さらなる高単価・高バック制度をご用意します。ワンランク上を目指す方にふさわしい環境を提供します。報酬交渉も可能です。"
          />

        </div>
      </section>


      {/* ================= 募集要項 ================= */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-5xl mx-auto space-y-12">

          <h2 className="text-3xl font-bold text-center">
            募集要項
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-300 text-sm leading-relaxed">

            <JobItem title="職種" content="フロアキャスト" />
            <JobItem title="仕事内容" content="お客様にお酒を提供しながら楽しく会話をするお仕事です。未経験・お酒が飲めない方もOK。" />
            <JobItem title="資格" content="18歳以上（高校生不可）未経験歓迎・経験者優遇・WワークOK・学歴不問" />
            <JobItem title="時間報酬" content="12,000円〜（経験により優遇）" />
            <JobItem title="勤務時間" content="20:00〜翌1:00 週1日/2h〜OK 終電上がり可 送り有" />
            <JobItem title="待遇" content="全額日払いOK・寮完備・高額バック・ドレス貸与・ノルマ無し・個人ロッカー完備" />

          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-28 px-6 text-center relative">

        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto space-y-8">

          <h2 className="text-3xl md:text-4xl font-bold">
            ご質問だけでも大歓迎
          </h2>

          <p className="text-gray-300">
            少しでも気になった方は、お気軽にお問い合わせください。
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">

            <CTAButton
              href="https://line.me/R/ti/p/xxxxxxxx"
              label="公式LINEで応募"
              color="green"
            />

            <CTAButton
              href="tel:08000000000"
              label="電話で応募"
              color="white"
            />

            <CTAButton
              href="mailto:recruit@example.com"
              label="メールで応募"
              color="outline"
            />

          </div>

        </div>
      </section>

    </main>
  )
}


/* ================= コンポーネント ================= */

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="space-y-3">
      <p className="text-4xl font-bold text-yellow-400">{number}</p>
      <p className="text-gray-300 tracking-wide">{label}</p>
    </div>
  )
}

function ContentBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white/5 rounded-2xl p-10 space-y-4 border border-white/10 backdrop-blur">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{text}</p>
    </div>
  )
}

function JobItem({ title, content }: { title: string; content: string }) {
  return (
    <div className="space-y-2">
      <p className="text-white font-semibold">{title}</p>
      <p>{content}</p>
    </div>
  )
}

function CTAButton({
  href,
  label,
  color
}: {
  href: string
  label: string
  color: 'green' | 'white' | 'outline'
}) {

  const base =
    "px-10 py-4 rounded-full font-semibold transition transform hover:scale-105"

  const styles = {
    green:
      base +
      " bg-green-500 text-white shadow-[0_15px_40px_rgba(34,197,94,0.5)]",
    white:
      base +
      " bg-white text-black shadow-[0_15px_40px_rgba(255,255,255,0.4)]",
    outline:
      base +
      " border border-white text-white hover:bg-white hover:text-black"
  }

  return (
    <Link href={href} className={styles[color]} target="_blank">
      {label}
    </Link>
  )
}


// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.12, duration: 0.7 },
//   }),
// };

// export default function RecruitPage() {
//   return (
//     <main className="bg-gradient-to-b from-black via-neutral-900 to-black text-white overflow-hidden">

//       {/* ===== HERO ===== */}
//       <section className="relative min-h-screen flex items-center justify-center text-center px-6">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="space-y-6"
//         >
//           <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider">
//             STAFF <span className="text-gold">RECRUIT</span>
//           </h1>
//           <p className="text-gray-300 tracking-widest">
//           奈良エリア　地域一番店
//           </p>

//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ repeat: Infinity, duration: 2 }}
//             className="text-sm text-gray-400 mt-10"
//           >
//             ↓ SCROLL
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* ===== 給与 ===== */}
//       <section className="max-w-6xl mx-auto px-6 py-32 space-y-16">
//         <motion.h2
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-3xl font-bold text-center tracking-widest"
//         >
//           SALARY
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-10">
//           {[
//             {
//               title: "正社員",
//               price: "月給 300,000円〜",
//               sub: "＋歩合＋各種手当／毎月達成ボーナス",
//             },
//             {
//               title: "店長",
//               price: "月給 500,000円〜1,200,000円",
//             },
//             {
//               title: "アルバイト",
//               price: "時給 1,300円〜",
//               sub: "＋インセンティブ",
//             },
//             {
//               title: "送りドライバー",
//               price: "時給 1,300円〜",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               custom={i}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05 }}
//               className="border border-white/10 rounded-3xl p-10 bg-white/5 backdrop-blur-xl"
//             >
//               <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
//               <p className="text-2xl font-bold">{item.price}</p>
//               {item.sub && (
//                 <p className="text-sm text-gray-400 mt-2">{item.sub}</p>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ===== 待遇 ===== */}
//       <section className="bg-white text-black py-32">
//         <div className="max-w-5xl mx-auto px-6 space-y-16">
//           <motion.h2
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-center tracking-widest"
//           >
//             BENEFITS
//           </motion.h2>

//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {[
//               "日払いOK",
//               "未経験者大歓迎",
//               "経験者優遇",
//               "歩合あり",
//               "賞与あり",
//               "駐車場あり",
//               "社保完備",
//               "社員旅行あり",
//               "長期休暇あり",
//               "研修制度あり",
//             ].map((text, i) => (
//               <motion.div
//                 key={i}
//                 custom={i}
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 className="rounded-full border px-6 py-3 text-center font-medium"
//               >
//                 {text}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== 勤務地 ===== */}
//       <section className="max-w-5xl mx-auto px-6 py-32 space-y-10">
//         <motion.h2
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-3xl font-bold text-center tracking-widest"
//         >
//           LOCATION
//         </motion.h2>

//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="space-y-4 text-center text-gray-300"
//         >
//           <p>奈良県奈良市三条町606-60 ジョイパレスPart2-201 / 301</p>
//           <p>奈良県橿原市内膳町1丁目3-6 スタービル5F</p>
//           <p className="text-sm text-gray-400">
//             最寄駅：JR奈良駅 / 近鉄大和八木駅
//           </p>
//         </motion.div>
//       </section>

//       {/* ===== CTA ===== */}
//       <section className="bg-black py-32 text-center space-y-10">
//         <motion.h2
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold tracking-widest"
//         >
//           JOIN OUR TEAM
//         </motion.h2>

//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Link
//             href="/"
//             className="inline-block px-12 py-4 bg-white text-black rounded-full font-semibold tracking-wider"
//           >
//             LINEで応募する
//           </Link>
//         </motion.div>
//       </section>
//     </main>
//   );
// }
