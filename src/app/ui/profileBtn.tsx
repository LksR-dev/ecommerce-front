'use client'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from '@/app/assets/profile-pic-placeholder.png'
import { useState } from 'react'

export default function ProfileButton(){
  const [isUserOn, setIsUserOn] = useState<boolean>(false);

  const userOn = <div className="card-body">
                  <Link href='/'>Mi perfil</Link>
                  <Link href='/'>Mis pedidos</Link>
                  <Link href='/'>Cerrar sesión</Link>
                </div>;
  const userOff = <div className="card-body">
                    <Link href='/login'>Iniciar sesión</Link>
                  </div>;

  return (
    <div className="dropdown dropdown-end mr-4">
      <label className="btn-ghost btn-circle btn">
        <button className="indicator">
          <Image src={profilePic} alt="Profile" />
        </button>
      </label>
        <div tabIndex={0} className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow z-30">
          {isUserOn ? userOn : userOff}
        </div>
    </div>
  )
}