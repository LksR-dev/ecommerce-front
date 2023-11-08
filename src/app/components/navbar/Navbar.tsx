'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/assets/craft-beer-logo-with-beer.png'
import ShoppingCartButton from './ShopppingCartButton';
import ProfileButton from '../../ui/profileBtn';
import HamburgerButton from '@/app/ui/hamburguerBtn'

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
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
          <Link href="/products">Productos</Link>
        </div>

        <div className="flex-none">
          <ShoppingCartButton cart={4} />
        </div>

        <div className="flex-none">
          <ProfileButton />
        </div>
      </div>
  );
}