'use client'

import { useEffect } from 'react'

export default function SocialFeed() {

  useEffect(() => {
    const igScript = document.createElement('script')
    igScript.src = 'https://www.instagram.com/embed.js'
    igScript.async = true
    document.body.appendChild(igScript)

    const ttScript = document.createElement('script')
    ttScript.src = 'https://www.tiktok.com/embed.js'
    ttScript.async = true
    document.body.appendChild(ttScript)
  }, [])

  return (
    <section className="w-full bg-[#f4f2ee] py-14 md:py-24 overflow-hidden">

      {/* 横幅コンテナ */}
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-12">

        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-[0.2em] md:tracking-[0.3em]">
            SOCIAL MEDIA
          </h2>
        </div>

        {/* 3カラム（SP=1列） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {/* Instagram */}
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 flex justify-center">
  <div className="w-full max-w-[420px] sm:max-w-[540px] lg:max-w-[700px]">
    <div className="w-full overflow-hidden rounded-xl">
      <blockquote
        className="instagram-media w-full !max-w-full"
        data-instgrm-permalink="https://www.instagram.com/p/DOBCUX4CZ0c/"
        data-instgrm-version="14"
        style={{ margin: 0 }}
      />
    </div>
  </div>
</div>

          {/* TikTok 1 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex justify-center overflow-hidden">
            <div className="w-full max-w-[420px]">
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@gloria.nara/video/7607766315675241749"
                data-video-id="7607766315675241749"
                style={{ width: '100%', margin: 0 }}
              >
                <section></section>
              </blockquote>
            </div>
          </div>

          {/* TikTok 2 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex justify-center overflow-hidden">
            <div className="w-full max-w-[420px]">
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@gloria.nara2/video/7539872801587596552"
                data-video-id="7539872801587596552"
                style={{ width: '100%', margin: 0 }}
              >
                <section></section>
              </blockquote>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}