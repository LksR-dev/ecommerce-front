'use client'
import {ProductItem}  from '@/app/ui/addProductBtn'
import Image from 'next/image'
import Link from 'next/link'
import {useGetCartCookies} from '@/app/hooks/index'


export default function MyOrders(){
  const cartItems = useGetCartCookies().cartItems;
  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-center mb-8 text-2xl">Mis Pedidos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cartItems.map((item: ProductItem ) => (
          <div key={item.id} className="bg-white p-4 shadow rounded">
            <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
            <p className="font-bold text-xl mt-3 mb-3">Precio: ${item.unit_price}</p>
            <Link href={'/product/'+item.id}>
              <figure className="px-10 pt-10">
                <Image src={item.img} width='200' height='60' alt={item.title} className="rounded-xl object-cover" />
              </figure>
            </Link>
            <button className='btn-circle bg-red-500 text-sm font-semibold justify-end w-full'>Remover producto</button>
          </div>
        ))}
      </div>
      <Link href='/pay'>
        <button className='btn-circle bg-blue-600 w-96 mt-11 mx-auto'>Comprar ahora</button>
      </Link>
    </div>
  );


}