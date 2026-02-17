'use client'

import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { motion } from 'framer-motion'
import React from 'react'

export default function StaffRecruit() {
    return (
        <main className="bg-black text-white overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="relative h-[100vh]  w-[90%] mx-auto">
                <Image
                    src="/assets/apply2.webp"
                    alt="Recruit"
                    fill
                    priority
                    quality={100}
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                </motion.div>
            </section>

            {/* ================= PR ================= */}
            <section className="py-24 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-6 text-gray-300 leading-relaxed"
                >

                    <h2 className="text-3xl font-bold text-white mb-6">
                        スタッフ求人PR
                    </h2>

                    {/* ★文章はそのまま */}
                    <p>
                        奈良で高収入スタート+賞与ありの正社員求人をお探しならキャバクラ「グロリア」の黒服スタッフ募集がおすすめ。<br />
                        JR奈良駅から徒歩2分という駅近のキャバビル3階にあるグロリアでは複数の職種で男性スタッフの採用を強化しており<br />
                        お気軽なアルバイトから正社員、店長候補までご希望や経験に応じた働き方･給与額のご提案が可能です◎
                    </p>

                    <p>
                        正社員には寮のご紹介や賞与の支給があるため、住宅コストの軽減<br />
                        月給+αで稼げる体制など正味の手取り収入が高額となる環境が整っており、しっかり貯蓄したい派には特におすすめですよ♪
                    </p>

                    <p>
                        グロリアはお給料の月払い･週払い･全額日払いが可能なので今すぐお金が必要な方には特におすすめのキャバクラ求人です。<br />
                        時給保証あり×飛び入り出勤OK×全額日払いで「お金が欲しい」がスグに解決しますよ◎
                    </p>

                    <p>
                        何かご質問がありましたらお気軽にお問い合わせください。
                    </p>

                </motion.div>
            </section>

            {/* ================= 経歴紹介 ================= */}
            <section className="py-24 px-6 bg-white/5">
                <div className="max-w-5xl mx-auto space-y-16">

                    <h2 className="text-3xl font-bold text-center">
                        社員経歴紹介
                    </h2>

                    <CareerCard
                        title="① ホールスタッフ：Y.Rさん"
                        content={`業界未経験27歳。土木建築業出身。昨年秋に平社員として入社。
月給32万円スタート。20名のキャスト管理と売上向上に貢献し3ヶ月でマネージャー昇進。現在45万円超。`}
                    />

                    <CareerCard
                        title="② 店長：O.Hさん"
                        content={`他店でマネージャー経験あり32歳。昨年春入社。
月給45万円スタート。半年で店長昇進。現在70万円＋インセンティブで100万円超の月も。`}
                    />

                    <p className="text-gray-400 text-center">
                        まだ管理ポストに空きがあります。
                        頑張り次第で短期間昇進可能です。
                    </p>

                </div>
            </section>

            {/* ================= MEDIA ================= */}
            <section className="py-24 px-4 md:px-6 bg-white/5">
                <div className="max-w-6xl mx-auto space-y-12 text-center">

                    <h2 className="text-3xl font-bold">
                        Media／TikTok
                    </h2>

                    <p className="text-gray-400 text-sm">
                        最新の投稿はこちら
                    </p>

                    {/* スマホ縦並び対応 */}
                    <div className="flex flex-col md:flex-row justify-center gap-10 items-center">

                        <div className="w-full max-w-[350px]">
                            <blockquote
                                className="tiktok-embed"
                                cite="https://www.tiktok.com/@gloria.nara"
                                data-unique-id="gloria.nara"
                                data-embed-type="creator"
                            >
                                <section></section>
                            </blockquote>
                        </div>

                        <div className="w-full max-w-[350px]">
                            <blockquote
                                className="tiktok-embed"
                                cite="https://www.tiktok.com/@gloria.nara2"
                                data-unique-id="gloria.nara2"
                                data-embed-type="creator"
                            >
                                <section></section>
                            </blockquote>
                        </div>

                    </div>

                </div>
            </section>

            {/* TikTok Script（エラー解決） */}
            <Script
                src="https://www.tiktok.com/embed.js"
                strategy="lazyOnload"
            />

        </main>
    )
}

/* ================= UI ================= */

function CareerCard({ title, content }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur space-y-4"
        >
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-300 whitespace-pre-line">{content}</p>
        </motion.div>
    )
}

function CTA({ href, children }: any) {
    return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
                href={href}
                target="_blank"
                className="w-full md:w-64 block text-center px-10 py-4 rounded-full font-semibold bg-white text-black shadow-[0_20px_60px_rgba(255,255,255,0.3)] transition"
            >
                {children}
            </Link>
        </motion.div>
    )
}
