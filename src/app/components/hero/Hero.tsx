import Image from 'next/image'
import heroImg from '@/app/assets/hero.jpg'

export default function Hero(){
  return (
    <section className="hero min-h-screen bg-base-200">
      <Image src={heroImg} alt='Hero' className="w-full h-full" />
      <div className="flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-5xl font-bold text-white">De la Cerveza a tu Puerta: <br/> Calidad Artesanal en Cada Sorbo.</h1>
        </div>
      </div>
    </section>

  )
}