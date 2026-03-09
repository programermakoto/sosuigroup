import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sosui-group.com"),
  verification: {
    google: "ox4Mp9P_sQUZCcnGyzfLZcEDmu-KYAabhf-UN_DcNbI",
  },
  title: {
    default: "奈良キャバクラ求人｜奈良ラウンジ・水商売求人 | SOSUI GROUP",
    template: "%s | SOSUI GROUP",
  },

  description:
    "奈良のキャバクラ・ラウンジ・水商売求人を掲載。奈良で人気のキャバクラ求人・ナイトワーク求人を探すならSOSUI GROUP。体験入店OK・未経験歓迎。",

  keywords: [
    "奈良 キャバクラ",
    "奈良 キャバ",
    "奈良 キャバクラ 求人",
    "奈良 ラウンジ",
    "奈良 水商売",
    "奈良 ナイトワーク",
    "奈良 人気 キャバクラ",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://sosui-group.com",
  },

  icons: {
    icon: "/sosui.PNG",
  },

  openGraph: {
    title: "奈良キャバクラ求人｜奈良ラウンジ・水商売求人",
    description:
      "奈良のキャバクラ・ラウンジ・水商売求人を掲載。奈良の人気キャバクラ求人サイト。",
    url: "https://sosui-group.com",
    siteName: "SOSUI GROUP",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "奈良キャバクラ求人 SOSUI GROUP",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "奈良キャバクラ求人",
    description: "奈良のキャバクラ・ラウンジ求人サイト",
    images: ["/ogp.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SOSUI GROUP",
    url: "https://sosui-group.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://sosui-group.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="ja">
      <body>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  );
}