'use client'

// import { redirect } from 'next/navigation';
// import Link from 'next/link'
// import ShoppingCartButton from './ShopppingCartButton';
// import ProfileIcon from '../../ui/profile.icon'
// import Image from 'next/image';
// import beer from '@/app/assets/beer.svg'


// async function searchProducts(formData: FormData){
//   "use server";

//   const searchQuery = formData.get("searchQuery")?.toString();
//   if(searchQuery) redirect(`search?query=${searchQuery}`);
// }

// export default function Navbar(){
//   return (
//     <div className="bg-base-100">
//       <div className="navbar max-w-7x1 m-auto flex-col sm:flex-row gap-2">
//         <div className="flex-1 ">
//           <Link href="/" className='btn btn-ghost text-xl normal-case'>
//             <Image src={beer} alt="logo" width='24' height='24'/>
//             Craftbeer
//           </Link>
//         </div>
//         <div className='m-auto gap-8 mr-4'>
//           <Link href="/">Inicio</Link>
//           <Link href="/">Productos</Link>
//         </div>
//         <div className='flex-none gap-2'>
//           <form action={searchProducts}>
//             <div className='form-control'>
//               <input type="text" name='searchQuery' placeholder='Search' className='input input-bordered w-full min-w-[100px]' />
//             </div>
//           </form>
//         </div>
//         <ShoppingCartButton cart={2}/>
//         <ProfileIcon/>
//       </div>
//     </div>
//   )
// }

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/assets/craft-beer-logo-with-beer.png'
import ShoppingCartButton from './ShopppingCartButton';
import ProfileButton from '../../ui/profileBtn';
import { redirect } from 'next/navigation';
import HamburgerButton from '@/app/ui/hamburguerBtn'

async function searchProducts(formData: FormData) {
  // "use server";
  const searchQuery = formData.get("searchQuery")?.toString();
  if (searchQuery) redirect(`search?query=${searchQuery}`);
}
export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="bg-base-100">
      <div className="navbar max-w-7x1 m-auto flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <Link href="/" className='btn btn-ghost text-xl normal-case'>
            <Image src={logo} alt="logo" width='70' height='70' />
            Craftbeer
          </Link>
        </div>

        <div className="block max-md:inline">
          <HamburgerButton onClick={() => setShowLinks(!showLinks)} />
        </div>

        <div className={`max-md:hidden gap-8 mr-4`}>
          <Link href="/">Inicio</Link>
          <Link href="/">Productos</Link>
        </div>

        <div className='flex-none gap-2'>
          <form action={searchProducts}>
            <div className='form-control'>
              <input type="text" name='searchQuery' placeholder='Search' className='input input-bordered w-full min-w-[100px]' />
            </div>
          </form>
        </div>

        <div className="flex-none">
          <ShoppingCartButton cart={2} />
        </div>

        <div className="flex-none">
          <ProfileButton />
        </div>
      </div>
    </div>
  );
}