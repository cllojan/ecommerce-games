import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";

import { Books } from "../../components";
import { useStateContext } from "../../context/StateContext";
function SearchResults({ book }) {
  return (
    <div className='products-container'>
      {book.map((x) => (
        <Books key={x.id} books={x} />
      ))}
    </div>
  );
}

export async function getStaticProps({ params: { query } }) {
  const querys = `*[_type == "book" && name match "${query}*"]`;

  const book = await client.fetch(querys);

  return {
    props: {
      book,
    },
  };
}

export async function getStaticPaths() {
  const query = `*[_type == "book"]{
    ...,
    name
}`;
  const books = await client.fetch(query);
  const paths = books.map((book) => ({
    params: {
      query: book.name,
    },
  }));

  return { paths, fallback: "blocking" };
}
export default SearchResults;
