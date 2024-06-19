"use client";
import React, { useState } from "react";
import Button from "../components/Button";
import Image from "../components/assets/products/product8.jpg";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { navigation } from "../constants";
import Section from "../components/Section";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl?: any;
}

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Glider",
      description:
        ' Precision-engineered for effortless flight and stability, inspiring young minds with sleek design and vibrant colors."',
      price: 50,
      quantity: 2,
      imageUrl: Image,
    },
    {
      id: 2,
      name: "Item 2",
      description: "Description for item 2",
      price: 75,
      quantity: 1,
      imageUrl: "https://via.placeholder.com/300",
    },
  ]);

  const incrementQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const shipping = 10;
    const taxes = subtotal * 0.07;
    const total = subtotal + shipping + taxes;
    return { subtotal, shipping, taxes, total };
  };

  const { subtotal, shipping, taxes, total } = calculateTotal();

  return (
    <>
      <div>
        <Navbar position={true} data={navigation} hide={true} admin={false} />
        <Section>
          <div className="container mx-auto pt-24 ">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <section className="flex flex-col lg:flex-row justify-between">
              <div className="lg:w-2/3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center mb-4">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-20 h-30 object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                      <p>{item.description}</p>
                      <div className="flex items-center">
                        <button
                          className="px-2 py-1 bg-gray-800"
                          onClick={() => decrementQuantity(item.id)}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="w-12 text-center mx-2"
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          className="px-2 py-1 bg-gray-800"
                          onClick={() => incrementQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right p-12 ">
                      <p>Rs.{(item.price * item.quantity).toFixed(2)}</p>
                      <button className="text-red-500">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:w-1/3 lg:ml-4">
                <div className="bg-n-8 p-4 shadow-md rounded">
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Order Summary
                  </h2>
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>Rs.{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>Rs.{shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Taxes</span>
                    <span>Rs.{taxes.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>Rs.{total.toFixed(2)}</span>
                  </div>
                  <Button white className="mt-4 w-full py-2 ">
                    Checkout
                  </Button>
                  <button className="mt-4 w-full py-2 bg-gray-800 ">
                    Back to Shopping
                  </button>
                </div>
              </div>
            </section>
          </div>
        </Section>
        <Footer />
      </div>
    </>
  );
};

export default ShoppingCart;
