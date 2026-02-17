import Link from 'next/link'
import React from 'react'

export default function Recruit() {
  return (
    <section className="bg-black py-16 text-white w-full text-center space-y-10">
      <div>
        <h2 className="text-4xl font-bold tracking-wide">STAFF RECRUIT</h2>
        <p className="text-sm text-gray-400">スタッフ求人情報</p>
      </div>

      <p className="text-sm text-gray-300">
        未経験からでも一流へ。
        <br />
        洗練された空間で、自分史上最高のステージを。
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        <ThreeDButton href="/cast" label="キャスト募集" />
        <ThreeDButton href="/boys" label="スタッフ募集" />
      </div>
    </section>
  )
}

/* ===== 立体ボタン ===== */
function ThreeDButton({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="group relative">
      {/* 外枠（光る縁） */}
      <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-white/70 via-white to-white/70 blur-sm opacity-70 group-hover:opacity-100 transition" />

      {/* ボタン本体 */}
      <div
        className="
          relative
          px-10 py-4
          rounded-full
          bg-gradient-to-b from-white to-gray-200
          text-black font-semibold tracking-wide
          shadow-[0_12px_30px_rgba(255,255,255,0.15)]
          transform transition-all duration-300
          group-hover:-translate-y-1
          group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.25)]
          active:translate-y-0
        "
      >
        {/* 光沢ハイライト */}
        <span
          className="
            pointer-events-none
            absolute top-1 left-1/2 -translate-x-1/2
            w-4/5 h-1/2
            rounded-full
            bg-white/60
            blur-md
            opacity-70
          "
        />
        {label}
      </div>
    </Link>
  )
}
