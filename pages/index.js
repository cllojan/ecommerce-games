import React from 'react'
import { Books, FooterBanner,HeroBanner  } from '../components'
import {client} from '../lib/client';

const index = ({booksData}) => {
  return (
    <div>
      <HeroBanner data={booksData[0]} />
      
      <div className='products-heading'>
        <h2>Beset</h2>
        <p>Speacker</p>
      </div>

      <div className='products-container'>
       {booksData?.map((x) => <Books key={x._id} books={x}/>)}
      </div>
      <FooterBanner/>
    </div>
  )
}


export const getServerSideProps = async ()=>{
  const query = "*[_type=='book']"
  const booksData = await client.fetch(query);

  return {
    props:{booksData}
  }
}
export default index

