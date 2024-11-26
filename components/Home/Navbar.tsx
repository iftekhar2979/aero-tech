import React from 'react'
import { BiLogoFacebookSquare } from 'react-icons/bi'
import { FaXTwitter } from 'react-icons/fa6'

export default function Navbar() {
  return (
    <nav className='bg-nav'>
      <div className='flex flex-col md:flex-row justify-around items-center py-2'>
        <div className='flex space-x-4 mx-2'>
          {/* Facebook link */}
          <a href="https://www.facebook.com/aerotechaircraftmaintenanceltd/" target="_blank" rel="noopener noreferrer">
            <BiLogoFacebookSquare color='white' size={26} className='cursor-pointer' />
          </a>

          {/* Twitter link */}
          <a href="https://twitter.com/aerotech_ltd" target="_blank" rel="noopener noreferrer">
            <FaXTwitter color='white' size={26} />
          </a>
        </div>

        <span className='text-white font-serif text-sm mt-2 md:mt-0'>
          024 7630 6888 | enquiries@aerotech-uk.co.uk
        </span>
      </div>
    </nav>
  )
}
