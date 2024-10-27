// import React, { useState } from 'react'

// const App = () => {
//   const [user, setuser] = useState("")
//   const [error, seterror] = useState(false)
//   const sumbitHandler = (e) => {

//     e.preventDefault(); //isse page realod n hog
//     console.log(user, "heeyyy");
//     setuser("") //isse input m value di then sumbit kiya input khali ho je h

//   }
//   return (
//     <>
//       <form onSubmit={sumbitHandler} className='w-[80%] mt-10 p-10 bg-zinc-400  mx-auto'>
//         <input onChange={(e) => setuser(e.target.value)} type="text"
//          placeholder='enter the name'
//           name='name'
//            value={user} 
//            onInput={(e)=>e.target.value.length < 5 ? seterror(true):seterror(false)}
//            />
//          {error && (
//           <p className='text-red-500 text-3xl'>must be 5 charater</p>
//          )}

//         <button className='bg-blue-500 py-2 px-5 rounded-md border border-white ml-10'>click</button>
//       </form>
//     </>
//   )
// }

// export default App


import React, { useState, useEffect } from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    }, []);

    const addProduct = (product) => {
        const updatedProducts = [...products, product];
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    const updateProduct = (updatedProduct) => {
        const updatedProducts = products.map(product =>
            product.id === updatedProduct.id ? updatedProduct : product
        );
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    const deleteProduct = (id) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };
 
    return (
        <div>
            <h1 className='m-6 text-blue-500 font-semibold text-2xl'>Inventory Management System</h1>
            <AddProduct addProduct={addProduct} />
            <ProductList products={products} updateProduct={updateProduct} deleteProduct={deleteProduct} />
        </div>
    );
}

export default App;

