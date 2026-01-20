import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 space-y-20 text-black">

      {/* ===== ヘッダー ===== */}
      <section className="space-y-4">
        <p className="text-sm tracking-widest text-gray-500">
          PRIVACY POLICY
        </p>
        <h1 className="text-3xl md:text-4xl font-bold">
          プライバシーポリシー
        </h1>
        <p className="text-black/70 leading-relaxed">
          SOSUIGROUP（以下、「当社」といいます。）は、
          キャバクラ・ラウンジ・バー等のナイトエンターテインメント事業、
          並びに教育・IT・EC事業を運営するにあたり、
          お客様および関係者の個人情報を適切に保護・管理することを
          社会的責務と考え、以下のとおりプライバシーポリシーを定めます。
        </p>
      </section>

      {/* ===== 個人情報の取得 ===== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">第1条（取得する個人情報）</h2>
        <p className="text-black/70">
          当社は、以下の情報を適法かつ公正な手段により取得する場合があります。
        </p>
        <ul className="list-disc pl-6 text-black/70 space-y-2">
          <li>氏名、源氏名、ニックネーム</li>
          <li>メールアドレス、電話番号</li>
          <li>SNSアカウント情報</li>
          <li>来店履歴、予約情報</li>
          <li>採用応募・業務連絡に関する情報</li>
        </ul>
      </section>

      {/* ===== 利用目的 ===== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">第2条（利用目的）</h2>
        <ul className="list-decimal pl-6 text-black/70 space-y-2">
          <li>店舗運営およびサービス提供のため</li>
          <li>予約管理、来店確認、連絡対応のため</li>
          <li>キャスト・スタッフの採用および管理のため</li>
          <li>サービス向上および品質改善のため</li>
          <li>不正行為・迷惑行為防止のため</li>
        </ul>
      </section>

      {/* ===== 第三者提供 ===== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">第3条（第三者提供）</h2>
        <p className="text-black/70">
          当社は、以下の場合を除き、個人情報を第三者に提供することはありません。
        </p>
        <ul className="list-disc pl-6 text-black/70 space-y-2">
          <li>本人の同意がある場合</li>
          <li>法令に基づき開示が必要な場合</li>
          <li>店舗運営上、業務委託先に必要最小限の情報を提供する場合</li>
        </ul>
      </section>

      {/* ===== ナイト業特有の注意 ===== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">第4条（ナイトエンターテインメント事業に関する留意事項）</h2>
        <p className="text-black/70 leading-relaxed">
          当社が運営するキャバクラ・ラウンジ・バー等の店舗において取得する
          個人情報は、風俗営業等の規制及び業務の適正化等に関する法律、
          その他関係法令を遵守した上で管理されます。
        </p>
      </section>

      {/* ===== 安全管理 ===== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">第5条（安全管理措置）</h2>
        <p className="text-black/70">
          当社は、個人情報の漏えい・紛失・改ざん等を防止するため、
          組織的・物理的・技術的安全管理措置を講じます。
        </p>
      </section>

      {/* ===== 開示請求 ===== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">第6条（開示・訂正・削除）</h2>
        <p className="text-black/70">
          本人からの個人情報の開示・訂正・削除の請求については、
          法令に従い、適切に対応いたします。
        </p>
      </section>

      {/* ===== Cookie ===== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">第7条（Cookieの利用）</h2>
        <p className="text-black/70">
          当社ウェブサイトでは、利便性向上およびアクセス解析のため、
          Cookieを使用する場合があります。
        </p>
      </section>

      {/* ===== 改定 ===== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">第8条（ポリシーの変更）</h2>
        <p className="text-black/70">
          本ポリシーは、必要に応じて予告なく変更されることがあります。
        </p>
      </section>

      {/* ===== お問い合わせ ===== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">第9条（お問い合わせ窓口）</h2>
        <div className="rounded-2xl border p-6 bg-gray-50 text-sm space-y-2">
          <p>事業者名：SOSUIGROUP</p>
          <p>代表者名：松本 侑大</p>
          <p>メールアドレス：info@sosuigroup.jp</p>
        </div>
      </section>

      {/* ===== 戻る ===== */}
      <div className="pt-10">
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-full border hover:bg-black hover:text-white transition"
        >
          トップページへ戻る
        </Link>
      </div>

    </div>
  );
}
