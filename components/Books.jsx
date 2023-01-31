import React from 'react'
import Link from 'next/link';
import {urlFor} from '../lib/client';

const Books = ({books:{image,name,slug,price}}) => {
  return (
    <div >
       <Link href={`/books/${slug.current}`}>
          <div className="product-card">
            <img src={urlFor(image && image[0])} alt="a" width={250} height={350} className="product-image"/>
            <p className="product-name">{name}</p>
            <p className="product-price">{price}</p>
          </div>
       </Link>
    </div>
  )
}

export default Books