"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

function OrderProduct() {
    const router= useRouter();
    const handle= ()=>{
        console.log("Order placed");
        router.push("/");

    }
  return (
    <div>
        <h1>OrderProduct</h1>
        <button onClick={handle}>Click to Order</button>
        </div>
  )
}

export default OrderProduct