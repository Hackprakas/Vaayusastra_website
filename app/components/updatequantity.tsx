"use client";

import React from 'react';
import { updateQuantity } from '../../actions/route6';

interface PageProps {
    params: {
        id: string;
    };
    datas: {
        id: string;
        name: string;
        Stock: string;
        price: number;
        description: string;
        image: string;
    };
}

export default function UpdateQuantity({ params, datas }: PageProps) {
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        formData.append('id', params.id);

        try {
            const result = await updateQuantity(formData);
            if (result) {
                alert('Updated Successfully');
            } else {
                alert('Failed to update');
            }
        } catch (error) {
            alert('Error updating quantity');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6 text-xl flex">
                <div className="body-2 text-n-2">Quantity:</div>
                <div className="ml-4">
                    <input
                        type="text"
                        name="quantity"
                        defaultValue={datas?.Stock}
                        className="w-full text-md rounded-lg bg-gray-800 px-4 text-n-3"
                    />
                </div>
            </div>
            <button type="submit" className="px-4 py-2 bg-violet-900 text-white rounded">
                Update Quantity
            </button>
        </form>
    );
}
