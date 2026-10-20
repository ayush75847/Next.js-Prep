import React from 'react'
import Link from 'next/link'

function F1() {
  return (
    <div className='text-4xl'>
        <h1>F1</h1>
        <Link href="/f1/f2" className='text-blue-600 '>F2</Link><br></br>
        <Link href="/f3" className='text-blue-600 '>F3</Link>
    </div>
  )
}

export default F1