import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear()    
  return (
    <div className='bg-white border-t-2 border-t-emerald-900 w-full text-center py-4 text-xs text-emerald-800'>© 2001 - {currentYear} Le Nature all rights reserved.</div>
  )
}

export default Footer