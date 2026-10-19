import React from 'react'
import Card from '@/components/Card'
import Link from 'next/link'

function Archieved() {
  return (
     <Card>
      <div>
        <h1>Archieved Notifications</h1>
        <Link href="/complex-dash" className='text-blue-500'> Default</Link>
      </div>
    </Card>
  )
}

export default Archieved