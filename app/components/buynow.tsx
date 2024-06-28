"use client"
import React from 'react'
import Button from './Button'
import { useRouter } from 'next/navigation'
import CartContext from './context'
import { useContext } from 'react'
interface BuynowProps {
    productid: string
}
export default function Buynow({ productid }: BuynowProps) {
    const { cartIds, setCartIds } = useContext(CartContext);
    const router = useRouter();

    function handleclick() {
        setCartIds(productid);
        router.push(`${productid}/Checkout`);
    }
        return (
            <Button white onClick={handleclick}  >
                Buy Now
            </Button>
        )
    
}
