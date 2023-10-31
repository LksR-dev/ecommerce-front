import Link from 'next/link';
import React, { useState } from 'react';

interface HamburgerButtonProps {
  onClick: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ onClick }) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='dropdown dropdown-end mr-4'>
      <button onClick={() => setShowLinks(!showLinks)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <div className={`md:flex-col ${showLinks ? 'block' : 'hidden'} gap-8 mr-4 card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow z-30`}>
        <Link href="/">Inicio</Link>
        <Link href="/">Productos</Link>
      </div> 
    </div>
  );
}

export default HamburgerButton;
