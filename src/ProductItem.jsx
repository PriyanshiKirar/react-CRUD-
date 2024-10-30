import React, { useState } from 'react';

function ProductItem({ product, updateProduct, deleteProduct }) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);

    const handleUpdate = () => {
        updateProduct({ ...product, name, price });
        setIsEditing(false);
    };

    return (
        <li className="flex justify-between items-center border-b py-2">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 p-1 rounded-md border-none"
                    />
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border border-gray-300 p-1 rounded ml-2 outline-none text-1xl text-blue-300"
                    />
                    <button
                        onClick={handleUpdate}
                        className="bg-green-500 text-white p-1 rounded ml-2"
                    >
                        Update
                    </button>
                </>
            ) : (
                <>
                    <span>{product.name} - ${product.price}</span>
                    <div>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => deleteProduct(product.id)}
                            className="bg-red-500 text-white p-1 rounded-md mr-10"
                        >
                            Delete
                        </button>
                    </div>
                </>
            )}
        </li>
 
    );
}

export default ProductItem;
