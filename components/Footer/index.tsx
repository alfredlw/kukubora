import React from 'react';
import Image from 'next/image'

function Footer() {
    return (
        <footer className='flex justify-center py-3'>
        <p
          className='text-gray-400 text-xs'
        >
          <span className=''>
          Copyright © 2022 KukuboraZta. Tous droits réservés.
          </span>
        </p>
      </footer>
    );
}

export default Footer;