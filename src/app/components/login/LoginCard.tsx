'use client'
import { useEffect, useState } from 'react';
import logo from '@/app/assets/craft-beer-logo-with-beer.png';
import Image from 'next/image';
import { signUp, sendAuthCode } from '@/app/api'
import { useRouter } from 'next/navigation';
import { useLoginUser } from '@/app/hooks'


export default function LoginCard() {
  const [email, setEmail] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [code, setCode] = useState('');
  const router = useRouter();
  const {logged,error} = useLoginUser({email, code});


  async function onSubmit(e: any) {
    e.preventDefault();
    if (!showCodeInput) {
      setShowCodeInput(true);
      await sendAuthCode(email)
    } else {
      if(error) alert({error, Message: 'hubo un error al loguearse'})
      if(logged) router.push('/')
    }
  }
  const goBack = () => {
    setShowCodeInput(false);
  }

  return (
    <section className="w-full flex justify-center items-center h-screen">
      <div className="card card-normal bg-base-100 shadow-xl w-2/5">
        <figure className="text-center">
          <Image src={logo} alt="Logo" />
        </figure>
        <form className="card-body text-center" onSubmit={onSubmit}>
          {showCodeInput ? (
            <>
              <h2 className="card-title">Ingresa el código:</h2>
              <input
                type="text"
                placeholder="Ingresa el código aquí"
                className="input input-bordered w-full max-w-xs"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <div className="card-actions justify-center mt-4">
                <button className="btn btn-secondary" type="submit" onClick={goBack}>
                  Atrás
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="card-title">Ingresa tu correo:</h2>
              <input
                type="email"
                placeholder="tucorreo@gmail.com"
                className="input input-bordered w-full max-w-xs"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </>
          )}
            <button className="btn btn-primary" type="submit">
              {showCodeInput ? 'Ingresar' : 'Recibir código'}
            </button>
        </form>
      </div>
    </section>
  );
}
