import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import { useGlobalContext } from '../../context.';
import "./BookDetails.css";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const {books} = useGlobalContext();

  console.log(books);

  return (
    
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size = {22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{books[id]?.text}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'> </span>
              <span>{book?.subjects}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Source: </span>
              <a className='link' href={books[id]?.video_url} target="_blank" rel="noopener noreferrer">AI with Azure</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails