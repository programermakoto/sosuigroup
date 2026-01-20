import StarBorder from '@/components/StarBorder'
import Link from 'next/link'
import React from 'react'

export default function Recruit() {
    return (
        <section className='bg-black py-10 text-white w-full text-center space-y-7'>
            <div>
                <h2 className='text-4xl font-bold'>STAFF RECRUIT</h2>
                <p className='text-sm'>スタッフ求人情報</p>
            </div>
            <p className="text-sm text-gray-300">
                未経験からでも一流へ。
                洗練された空間で、自分史上最高のステージを。
            </p>
            <Link href="/" className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-white transition">スタッフ募集</Link>
        </section>
        
    )
}
