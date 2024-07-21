import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function ProductPage() {

    const [products, setProducts] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [counter, setCounter] = useState(5);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true); 
      fetch(`https://dummyjson.com/products?limit=${counter}&skip=10`)
        .then(res => res.json())
        .then(data => {
          setProducts(data.products);
          setLoading(false); 
        });
    }, [toggle, counter]);
  
    return (
      <div className=' container mx-auto flex flex-wrap justify-center gap-10 bg-gray-200'>
        {loading ? (
          <h2 className='text-center font-bold text-2xlq
          '>Loading...</h2>
        ) : (
          products.map((product) => (
            <div key={product.id} className='mt-[20px] border dark:border-white border-black p-5 rounded-lg'>
              <img src={product.thumbnail} alt='' />
              <h2>{product.title}</h2>
              <p>{product.price} BAM</p>

              <Link to={`/singleProduct/${product.id}`}className='px-[10px] py-[5px] bg-blue-500 text-white'>Details ...</Link>
            </div>
          ))
        )}
        <button
          onClick={() => {
            setToggle(!toggle);
            setCounter(counter + 5);
          }}
          className='bg-blue-500 text-white font-bold px-4 py-2 rounded-lg mt-5'
        >
          View More Products
        </button>
      </div>
    );
  }

export default ProductPage
