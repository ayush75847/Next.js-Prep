import React from 'react'
import Link from 'next/link'

function F2() {
  return (
    <div className='text-4xl'>
        <h1>F2 Page</h1>
        <Link href="/f4" className='text-blue-500'>F4</Link>
    </div>
  )
}

export default F2