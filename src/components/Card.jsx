import React, { useEffect , useState} from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/CartSlice'

function Card() {
    const dispatch = useDispatch()

    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(result => setProducts(result))
         
    // fetch('https://fakestoreapi.com/products')
    //     .then(data => data.json())
    //     .then(result => setProducts(result))

     },[])

     const handleClick = (product)=>{
         dispatch(add(product))
     }

     const cards = products.map( product=>(
           <div key={product.id} className="card dark:bg-gray-800 dark:border bg-base-100  shadow-xl">
           <figure>
             <img
               src={product.images}
               alt="Shoes" />
           </figure>
           <div className="card-body w-full">
             <h2 className="card-title">
              $ {product.price}
               <div className="badge badge-secondary">NEW</div>
             </h2>
             <p>{product.title}</p>
             
           </div>
           <div className="card-footer -my-2">
              
               <div className="bg-blue-500 font-semibold text-white py-2 px-4 rounded" onClick={()=> handleClick(product)}>Add To Cart</div>
               <button></button>
             </div>
         </div>
        
    
     ))
        
     

  return (
    <div>
         <div className=' px-2 grid lg:grid-cols-4 gap-3 py-4'>
                {cards}
             </div>
            
    </div>
  )
}

export default Card