import React from 'react'
import Link from 'next/link'
const HeroBanner = ({data}) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{data.name}</p>
            <h3>{data.slug.current}</h3>
            <img src="" alt="headphones" className='hero-banner-image'/>

            <div>
                <Link href="/books/ID">
                    <button type='button'>BUTTON TEXT</button>
                </Link>
                <div className="desc">
                    <h5>Descripcion</h5>
                    <p>Description</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner