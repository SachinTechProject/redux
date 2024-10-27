// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { remove } from '../store/CartSlice'

// function Cart2() {
//      const dispatch = useDispatch()
//     const products = useSelector(state => state.cart)

//        const handleClick = (id)=>{
//            dispatch(remove(id))
//        }

//     const cards = products.map( product=>(
//         <div key={product.id} className="card dark:bg-gray-800 dark:border bg-base-100  shadow-xl">
//         <figure>
//           <img
//             src={product.image}
//             alt="Shoes" />
//         </figure>
//         <div className="card-body w-full">
//           <h2 className="card-title">
//            $ {product.name}
//             <div className="badge badge-secondary">NEW</div>
//           </h2>
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum?
//           </p>
          
//         </div>
//         <div className="card-footer -my-2">
           
//             <div className="bg-red-500 font-semibold text-white py-2 px-4 rounded" onClick={()=> handleClick(product.id)}>Remove</div>
  
//           </div>
//       </div>
     
 
//   ))

//   return (
//     <div className='max-w-[1200px] h-screen mt-3 gap-3 ml-2 mx-auto grid lg:grid-cols-3'>
//           {cards}
//     </div>
//   )
// }

// export default Cart2