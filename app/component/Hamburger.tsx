"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const stores = [
    
    {
      name: "CLUB gloria",
      image: "/assets/store01.webp",
      siteUrl: "/gloria",
      recruitUrl: "/gloria/recruit",
    },
    {
      name: "LOUNGE blanc",
      image: "/assets/store02.webp",
      siteUrl: "/blanc",
      recruitUrl: "/blanc/recruit",
    },
    {
      name: "Luxury Bar GOAT",
      image: "/assets/store03.webp",
      siteUrl: "/goat",
      recruitUrl: "/goat/recruit",
    },
    {
      name: "Luxury Bar GOAT",
      image: "/assets/store03.webp",
      siteUrl: "/goat",
      recruitUrl: "/goat/recruit",
    },
    {
      name: "Luxury Bar GOAT",
      image: "/assets/store03.webp",
      siteUrl: "/goat",
      recruitUrl: "/goat/recruit",
    },
  ];

  return (
    <>
      {/* ハンバーガーボタン */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-6 right-6 md:right-20 z-50 w-8 h-8"
        aria-label="menu"
      >
        <span
          className={`absolute left-0 h-[2px] w-7 bg-black transition-all ${
            open ? "rotate-45 top-3" : "top-1"
          }`}
        />
        <span
          className={`absolute left-0 h-[2px] w-7 bg-black transition-all ${
            open ? "opacity-0" : "top-3"
          }`}
        />
        <span
          className={`absolute left-0 h-[2px] w-7 bg-black transition-all ${
            open ? "-rotate-45 top-3" : "top-5"
          }`}
        />
      </button>

      {/* オーバーレイ */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* メニュー本体 */}
      <aside
        className={`
          fixed top-0 right-0 z-40 h-full
          w-full md:w-[600px]
          bg-white
          overflow-x-hidden
          transform transition-transform duration-700
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* ===== 会社情報 ===== */}
        <div className="mt-20 px-6 md:px-8">
          <div className="flex justify-center items-center gap-2">
            <Image src="/assets/sosui.PNG" alt="sosui" width={40} height={40} />
            <h1 className="font-bold text-xl md:text-2xl">
              SOSUI GROUP
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6 text-center">
            <Link href="/company" className="menu-info-btn">会社概要</Link>
            <Link href="/president" className="menu-info-btn">代表挨拶</Link>
            <Link href="/privacy" className="menu-info-btn">プライバシーポリシー</Link>
            <Link href="/company" className="menu-info-btn">特定商取引法</Link>
          </div>
        </div>

        <div className="my-6 border-t mx-6 md:mx-8" />

        {/* ===== 店舗一覧 ===== */}
        <nav className="px-6 md:px-8 h-[calc(100vh-18rem)] overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col  gap-8">
            {stores.map((store, i) => (
              <div
                key={i}
                className="flex flex-col md:justify-around md:flex-row gap-4 items-center border-b pb-6"
              >
                {/* 画像（スマホ安全） */}
                <div className="relative w-full h-40 md:w-[220px] md:h-[140px]">
                  <Image
                    src={store.image}
                    alt={store.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <Link
                    href={store.siteUrl}
                    className="w-full text-center px-6 py-2 border border-black"
                  >
                    公式サイト
                  </Link>
                  <Link
                    href={store.recruitUrl}
                    className="w-full text-center px-6 py-2 border border-black"
                  >
                    求人サイト
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </nav>
      </aside>

      <style jsx>{`
        .menu-info-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.75rem;
          background: #000;
          color: #fff;
          font-weight: 500;
          border-radius: 0.5rem;
        }
      `}</style>
    </>
  );
}
