import React from 'react';
import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";
import { Link } from '@material-ui/core';

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
  var linkCount = 0;

  return (
    <section className='booklist'>
      
      <div className='container'>
      <h1 style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '1.6rem' }}>
        {
            
            books.slice(0, 30).map((item, index) => {
              item.id = index;
              return (
                <div><h2> {item['text']} <sup>{item['links'].map((ref, refin) => {
                  linkCount = linkCount + 1;
                  return (
                    <Link href={ref['url']}>{'['+linkCount+']'}</Link>
                  )
                })}</sup> </h2></div>
              )
            })
          }
      </h1>
      </div>
    </section>
  )
}

export default BookList