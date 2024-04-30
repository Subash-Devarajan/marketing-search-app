import React from 'react';
import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const {books, loading, resultTitle, generatedText} = useGlobalContext();
  // const booksWithCovers = books.map((singleBook) => {
  //   return {
  //     ...singleBook,
  //     // removing /works/ to get only id
  //     id: (singleBook.id).replace("/works/", ""),
  //     cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
  //   }
  // });

  if(loading) return <Loading />;

  console.log(generatedText);

  return (
    <section className='booklist'>
      
      <div className='container'>
      <h1 style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '1.6rem' }}>{generatedText}</h1>
      <div className='section-title'>
          <h2 style={{ fontFamily: 'Roboto', fontSize: '2.2rem' }}>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            books.slice(0, 30).map((item, index) => {
              item.id = index;
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList