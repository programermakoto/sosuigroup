"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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
      siteUrl: "https://www.pokepara.jp/nara/m335/a391/shop6973/",
      recruitUrl: "https://www.tainew.com/kansai/shop/view/v502354/",
    },
    {
      name: "LOUNGE blanc",
      image: "/assets/store05.webp",
      siteUrl: "https://www.pokepara.jp/nara/m335/a391/shop19246/",
      recruitUrl:
        "https://www.tainew.com/kansai/shop/view/v1000605/",
    },
    {
      name: "Luxury Bar GOAT",
      image: "/assets/store09.webp",
      siteUrl: "https://luxury-goat.live-web.jp/",
      recruitUrl: "https://www.tainew.com/kansai/shop/view/v501057/",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* ハンバーガーボタン */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-6 right-6 md:right-20 z-50 w-8 h-8 cursor-pointer"
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

      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setOpen(false)}
        />
      )}

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
            <Link
              href="/privacy"
              className="relative inline-block cursor-pointer
              transition-all duration-300
              hover:scale-105 hover:text-black/70
              after:absolute after:left-0 after:-bottom-1
              after:h-[1px] after:w-0
              after:bg-black
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              プライバシーポリシー
            </Link>

            <Link
              href="/company"
              className="relative inline-block cursor-pointer
              transition-all duration-300
              hover:scale-105 hover:text-black/70
              after:absolute after:left-0 after:-bottom-1
              after:h-[1px] after:w-0
              after:bg-black
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              特定商取引法
            </Link>
          </div>
        </div>

        <div className="my-6 border-t mx-6 md:mx-8" />

        {/* ===== 店舗一覧 ===== */}
        <nav className="px-6 md:px-8 h-[calc(100vh-18rem)]">
          <motion.div
            variants={container}
            initial="hidden"
            animate={open ? "show" : "hidden"}
            className="flex flex-col gap-8"
          >
            {stores.map((store, i) => (
              <motion.div
                key={i}
                variants={item}
                className="flex flex-col justify-around md:flex-row gap-4 items-center border-b pb-6"
              >
                <div className="relative w-full h-40 md:w-[220px] md:h-[140px] rounded-lg overflow-hidden">
                  <Image
                    src={store.image}
                    alt={store.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-semibold tracking-wide">
                    {store.name}
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full md:w-auto">
                  <p className="text-center font-semibold text-sm tracking-wide">
                    {store.name}
                  </p>
                  <Link
                    href={store.siteUrl}
                    className="w-full text-center px-6 py-2 border border-black hover:bg-black hover:text-white transition"
                  >
                    公式サイト
                  </Link>
                  <Link
                    href={store.recruitUrl}
                    className="w-full text-center px-6 py-2 border border-black hover:bg-black hover:text-white transition"
                  >
                    求人サイト
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </nav>
      </aside>
    </>
  );
}
