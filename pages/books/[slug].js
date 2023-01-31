import React, {useState}from 'react'
import {client, urlFor} from '../../lib/client'
import { AiOutlineMinus , AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Books } from '../../components'
import { useStateContext } from '../../context/StateContext'
const BooksDetails = ({book,books}) => {
    const {image, name, details,price,categoria,slug} = book
    const [index, setIndex] = useState(0);

    const { decQty, incQty, qty, onAdd } = useStateContext();
    return (
    
    <div>
        <div className="product-detail-container">
            <div className="detail_own">
                <div className="image-container">
                    <img src={urlFor(image && image[index])} alt="" width={400} height={550} srcset="" />

                </div>            
                <div className="product-detail-desc">
                    <h1>{name}</h1>
                    <h5>{slug.current}</h5>
                    <div className="reviews">
                        <div>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiOutlineStar />
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                    <h4>Categorias:</h4>
                    { categoria.map((x) => (
                        <p>{x}</p>
                    ))}
                    <p className='price'>${price}</p>
                    <div className="quantity">
                        <h3>Quantity:</h3>
                        <p className="quantity-desc">
                            <span className="minus" onClick={decQty}>
                                <AiOutlineMinus />
                            </span>
                            <span className="num">
                                {qty}
                            </span>
                            <span className="plus" onClick={incQty}>
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>
                    <div className="buttons">
                        <button type="button" onClick={() => onAdd(book, qty)} className="add-to-cart">Add to cart</button>
                        <button type="button" className="buy-now">Buy now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="maylike-products-wrapper">
            <h2>May</h2>
            <div className="marquee">
                <div className="maylike-products-container">
                    {books.map((x) => <Books key={x.id} books={x}/> )}
                </div>
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "book"]{
        slug{
            current
        }
    }`;
    const books = await client.fetch(query);
    const paths = books.map((book ) => ({
      params:{
        slug:book.slug.current
      }  
    }))

    return {
        paths,
        fallback:'blocking'
    }
}
export const getStaticProps = async ({params:{slug}})=>{
    const query = `*[_type=='book' && slug.current == '${slug}'][0]`
    const booksQuery = '*[_type=="book"]'

    const book = await client.fetch(query);
    const books = await client.fetch(booksQuery);
    return {
      props:{book,books}
    }
  }
export default BooksDetails