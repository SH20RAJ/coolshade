import DisqusComment from '@/components/DisqusComments';
import { BuyLocalProductsCard } from '@/components/explore/BuyLocalProducts';
import React from 'react';

export default function page() {
  const product = {
    name: "Shiv Bhagwan Murti",
    description: "Description 1",
    price: 240,
    rating: 5.0,
    image:
      "https://svastika.in/cdn/shop/files/8_Silver_shiva_04_1.jpg?v=1704460039",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 flex flex-col md:flex-row">
        <BuyLocalProductsCard product={product} />
        <div className="mt-4 md:mt-0 md:ml-6">
            <h1 className="text-2xl font-bold mb-2">Shiv Bhagwan Murti</h1>
            
            <p className="text-lg font-semibold mb-1">Price: ₹240</p>
            <p className="text-lg font-semibold mb-4">Rating: 5.0</p>
            <p className="text-gray-700">Shiv Bhagwan Murti is a beautiful and intricate statue of Lord Shiva, the Hindu god of destruction and creation. It is made of silver and is a symbol of the power and wisdom of Lord Shiva. It is a popular item for worship and is believed to bring good luck and prosperity to the wearer.</p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <DisqusComment />
      </div>
    </div>
  );
}
