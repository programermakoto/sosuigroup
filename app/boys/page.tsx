'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useTransform, useScroll, useSpring } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

const shops = [
    { name: 'CLUB gloria', link: '#', image: '/assets/store03.webp' },
    { name: 'LOUNGE blanc', link: 'https://www.pokepara.jp/nara/m335/a391/shop19246/', image: '/assets/store04.webp' },
    { name: 'Luxury Bar GOAT', link: 'https://luxury-goat.live-web.jp/', image: '/assets/store09.webp' },
]

export default function CastRecruit() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const move = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY })
        window.addEventListener('mousemove', move)
        return () => window.removeEventListener('mousemove', move)
    }, [])

    const { scrollY } = useScroll()
    const ySlow = useTransform(scrollY, [0, 800], [0, -60])
    const yFast = useTransform(scrollY, [0, 800], [0, -120])
    const smoothX = useSpring(mouse.x, { stiffness: 40, damping: 25 })
    const smoothY = useSpring(mouse.y, { stiffness: 40, damping: 25 })

    return (
        <>
            {/* ================= HERO ================= */}
            <section className="relative h-screen w-full overflow-hidden bg-black">

                <motion.div style={{ y: yFast }} className="absolute inset-0">

                    <picture>
                        {/* SP画像 */}
                        <source
                            media="(max-width: 768px)"
                            srcSet="/assets/black.sp.webp"
                        />

                        {/* PC画像 */}
                        <Image
                            src="/assets/black.pc.webp"
                            alt="hero"
                            fill
                            priority
                            className="object-cover scale-110 opacity-80"
                        />
                    </picture>

                </motion.div>

            </section>

            {/* ================= MAIN ================= */}
            <section className="relative bg-[#f4f2ee] overflow-hidden text-black py-32">

                {/* マウスライト */}
                <motion.div
                    className="pointer-events-none fixed inset-0 z-0"
                    style={{
                        background: `radial-gradient(700px at ${smoothX.get()}px ${smoothY.get()}px, rgba(255,255,255,0.15), transparent 80%)`
                    }}
                />

                {/* 3Dパネル奥 */}
                <motion.div
                    style={{ y: yFast }}
                    className="absolute -top-52 -left-60 w-[160%] h-[500px] bg-[#ddd8cd] rotate-[-10deg] opacity-60"
                />

                {/* 3Dパネル手前 */}
                <motion.div
                    style={{ y: ySlow }}
                    className="absolute -top-40 -left-40 w-[150%] h-[400px] bg-[#e6e2d8] rotate-[-6deg]"
                />

                <div className="max-w-6xl mx-auto px-6 md:px-16 relative z-10 space-y-28">

                    {/* TITLE */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }} className="relative text-center">

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <h2 className="text-[12vw] font-bold text-black opacity-[0.03] tracking-[0.5em]">
                                RECRUIT
                            </h2>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-extralight tracking-[0.35em] relative">
                            STAFF RECRUIT
                        </h2>
                        <p className="text-sm tracking-[0.5em] text-gray-500 mt-2">SOSUI GROUP</p>
                    </motion.div>

                    {/* SHOPS */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {shops.map((shop, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                                className="group relative rounded-3xl shadow-2xl overflow-hidden"
                            >
                                <Link href={shop.link} target="_blank">
                                    <div className="relative h-72 w-full overflow-hidden">
                                        <Image src={shop.image} alt={shop.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    </div>
                                    <div className="absolute bottom-6 left-6">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">{shop.name}</h3>
                                        <span className="text-sm text-white tracking-wide">求人詳細 →</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/*  */}
                    <div>
                        <h5 className="text-2xl my-3">Recruit [Staff]／スタッフ求人</h5>
                        <p className="leading-10">スタッフ求人PR<br></br>
                            現在幹部ポストに空きがあり、幹部候補としてがっつり稼ぎたいという方や女性のエスコートスタッフも大募集中！女性も活躍できる職場です<br></br>
                            奈良県奈良市三条町 JR奈良駅周辺に”初期費用無し、即日入居可”の寮をご用意。奈良で挑戦したい方にも最適です。<br></br>
                            未経験者OK！経験者の方優遇。能力に見合った給与をお約束します。<br></br>
                            アルバイトの募集もありますので学生さん、Wワーク、フリーターさん大歓迎です。<br></br>
                            体験給与は全額日払いなので、まずは体験入社だけでもいらしてください。<br></br>
                            何かご質問がありましたらお気軽にお問い合わせください。

                        </p>
                    </div>
                    {/* ================= OVERVIEW ================= */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        transition={{ duration: 0.8 }}
                        className="space-y-20"
                    >

                        <div>
                            <h3 className="text-3xl md:text-4xl font-light tracking-wider mb-6">
                                Overview／業務概要
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-16 leading-loose text-gray-800">

                            <div className="space-y-10">

                                <div>
                                    <h4 className="text-xl font-semibold mb-2">職種</h4>
                                    <p>男女ホールスタッフ</p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold mb-2">勤務地</h4>
                                    <p>
                                        東京都港区六本木3-14-11<br />
                                        ケントスビル6F
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold mb-2">仕事内容</h4>
                                    <p className="mb-4 font-medium">店長・幹部候補（正社員）</p>
                                    <p>
                                        ホール業務、店舗運営、企画提案、スタッフ管理など。
                                        店舗責任者としての業務をお任せします。
                                        経験者は前職給与考慮。
                                    </p>

                                    <p className="mt-6 mb-2 font-medium">接客／ホール（アルバイト）</p>
                                    <p>
                                        ご案内、ドリンク・フード提供など。
                                        未経験でも昇給昇格チャンスあり。
                                    </p>

                                    <p className="mt-6 mb-2 font-medium">エスコート（アルバイト）</p>
                                    <p>
                                        エントランスでのご案内業務。
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold mb-2">資格</h4>
                                    <p>
                                        18歳以上（高校生不可）<br />
                                        未経験OK／経験者歓迎／学生歓迎／フリーター歓迎／主婦主夫歓迎<br />
                                        WワークOK／学歴不問
                                    </p>
                                </div>

                            </div>

                            <div className="space-y-10">

                                <div>
                                    <h4 className="text-xl font-semibold mb-4">給与</h4>
                                    <ul className="space-y-2">
                                        <li>店長・店長候補：月給700,000円〜</li>
                                        <li>ホール（社員）：月給320,000円〜</li>
                                        <li>ホール（アルバイト）：時給1,800円〜</li>
                                        <li>キャッシャー（社員）：月給400,000円〜</li>
                                        <li>エスコート（社員）：月給400,000円〜</li>
                                        <li>エスコート（アルバイト）：時給4,000円〜</li>
                                        <li>キッチン（社員）：月給400,000円〜</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold mb-2">勤務時間</h4>
                                    <p>
                                        店長／ホール：17:00〜2:00<br />
                                        キャッシャー：20:00〜3:00<br />
                                        エスコート／キッチン：19:00〜2:00
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold mb-2">休日</h4>
                                    <p>日曜／GW／夏季休暇／年末年始</p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold mb-2">待遇</h4>
                                    <p>
                                        寮完備／昇給昇格随時／社保完備／社員旅行あり<br />
                                        独立支援制度／研修制度／制服貸与／体験入社OK<br />
                                        正社員登用あり
                                    </p>
                                </div>

                            </div>

                        </div>

                    </motion.div>

                    {/* LOCATION */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }} className="grid md:grid-cols-2 gap-16 items-center">

                        <div>
                            <h3 className="text-3xl font-light mb-8 tracking-wider">ACCESS</h3>
                            <p className="leading-loose text-gray-700">
                                〒630-8244<br />
                                奈良県奈良市三条町606-60<br />
                                ジョイパレス奈良駅前パートⅡ 301号
                            </p>
                            <div className="mt-6 text-gray-600">
                                JR奈良駅 徒歩1分<br />
                                近鉄奈良駅 徒歩11分
                            </div>

                            <Link
                                href="https://www.google.com/maps/search/?api=1&query=奈良県奈良市三条町606-60 ジョイパレス奈良駅前パートⅡ301号"
                                target="_blank"
                                className="inline-block mt-8 px-8 py-3 border rounded-full hover:bg-black hover:text-white transition"
                            >
                                Google Map →
                            </Link>
                        </div>

                        <motion.div
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <iframe
                                src="https://www.google.com/maps?q=奈良県奈良市三条町606-60 ジョイパレス奈良駅前パートⅡ301号&output=embed"
                                width="100%"
                                height="420"
                                style={{ border: 0 }}
                                loading="lazy"
                            />
                        </motion.div>

                    </motion.div>

                </div>
            </section>
        </>
    )
} 