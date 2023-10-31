import Hero from '@/app/components/hero/Hero'
import AnuncioImg from "@/app/assets/anuncio.png"
import AsesoriaImg from "@/app/assets/asesoria-1.png"
import CBC_smallImg from "@/app/assets/CBC_small.png"
import Tienda3Img from "@/app/assets/tienda-3.png"
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero/>
      <section>
        <h1 className="text-2xl font-bold text-black text-center mt-10 mb-5">Bienvenidos a Craft Beer</h1>
        <div className="w-full flex justify-between p-8 gap-4">
          <div className="card w-full bg-base-100 shadow-xl" >
            <div className="h-72">
              <Image src={AnuncioImg} alt="Anuncio" className="w-full h-full" />
            </div>
            <div className="card-body">
              <p className="text-lime-700 font-bold ">¿Buscas u ofreces trabajo en el sector de la Cerveza?</p>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl" >
            <div className="h-72">
              <Image src={AsesoriaImg} alt="Asesoria" className="w-full h-full"/>
            </div>
            <div className="card-body">
              <p className="text-lime-700 font-bold ">¿Tienes dudas relacionadas con el mundo de la Cerveza Artesana?</p>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl" >
            <div className="h-72">
              <Image src={CBC_smallImg} alt="CBC" className="w-full h-full" />
            </div>
            <div className="card-body">
              <p className="text-lime-700 font-bold ">En nuestro blog encontrarás contenido 100% Craft Beer</p>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl" >
            <div className="h-72"> 
              <Image src={Tienda3Img} alt="Tienda" className="w-full h-full" />
            </div>
            <div className="card-body">
              <p className="text-lime-700 font-bold ">Visita nuestro Craft marketplace con varios vendedores del sector artesanal</p>
            </div>
          </div>
        </div>
      </section>
    </>)
}
