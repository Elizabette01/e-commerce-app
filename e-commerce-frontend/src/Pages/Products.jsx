import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import RelatedProducts from '../components/RelatedProducts';

const Products = () => {

  const {productId} = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');


  const fetchProductData = async () => {

    products.map((item) => {
        if (item._id === productId) {
          setProductData(item)
          setImage(item.image[0])
          return null;        
      }
    })
    
  }

  useEffect(()=> {
    fetchProductData();
  }, [productId])

  return productData ? (
    <div className='pt-10 w-[90%] mx-auto'>
      {/* Product data */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="w-full sm:w-1/3 flex flex-col gap-2 ">
          <div className="w-full">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
          <div className="flex overflow-x-auto gap-2 w-full no-scrollbar">
            {
              productData.image.map((item, i) => (
                <img src={item} key={i} className={`w-[15%] flex-shrink-0 cursor-pointer ${item === image ? 'border-gray-500 border-2' : ''}`} onClick={()=>setImage(item)} />
              ))
            }
          </div>
          
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            <BsStarFill className='text-xl text-amber-600'/>
            <BsStarFill className='text-xl text-amber-600'/>
            <BsStarFill className='text-xl text-amber-600'/>
            <BsStarFill className='text-xl text-amber-600'/>
            <BsStarHalf className='text-xl text-amber-600'/> 
            <p className="pl-2">(256)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>

          <p className="mt-5 text-gray-500 text-base">{productData.description}</p>

          <div className="flex flex-col gap-4 my-8">
            <p className="font-medium">Size:</p>
            <div className="flex gap-3">
              {productData.sizes.map((item, i) => (
                <button onClick={() => setSize(item)} className={`border-2 border-gray-200 bg-gray-100 w-10 h-9 cursor-pointer hover:border-gray-500 ${item === size ? 'border-gray-500' : ''}`} key={i}>{item}</button>
              ))}
            </div>
          </div>

          <button className="bg-amber-500 text-white px-10 py-3 text-base active:bg-amber-400 hover:bg-amber-600 rounded-full uppercase font-medium cursor-pointer">Add to cart</button>

          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description and Reviews */}
      <div className='my-20'>
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (256)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p className="">
            Upgrade your wardrobe with our Classic Cotton Crew Neck T-Shirt – the perfect blend of comfort, style, and durability. Made from 100% premium cotton, this everyday essential is soft on the skin, breathable, and designed to keep its shape wash after wash.
            <br/> <br/>
            Whether you're layering it under a jacket or wearing it solo, this tee offers a relaxed fit that works for any occasion. Available in a variety of colors to match your mood and style.
          </p>
          <div className="">
            <p className="font-medium">Features:</p>
            <ul>
              <li>Made from 100% soft, breathable cotton</li>
              <li>Classic crew neck design</li>
              <li>Relaxed fit for all-day comfort</li>
              <li>Pre-shrunk to minimize shrinkage</li>
              <li>Available in sizes S to XXL</li>
              <li>Machine washable</li>
            </ul>
          </div>
          <p className=""><span className="font-medium">Perfect for: </span> Daily wear, casual outings, lounging at home, or dressing up with a blazer for a smart-casual look.</p>
          <p className=""><span className="font-medium">Color Options:</span> Black, White, Navy, Olive, Maroon</p>
          <p className=""><span className="font-medium">Shipping:</span> Free shipping on orders over £50</p>
        </div>
      </div>

      {/* Related Products */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} id={productData._id} />

    </div>
  ) : <div className="">404: Product not found</div>
}

export default Products
