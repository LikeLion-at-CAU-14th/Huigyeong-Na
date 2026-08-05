import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';

const BookDetail = () => {
    const params = useParams();
    const id = params.id;

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async() => {
          const response = await axios.get("/databases/book.json");
          setBooks(response.data);
        }
        fetchBooks();
      }, [])

      const book = books.find((b) => b.id === parseInt(id));

      const [likes, setLikes] = useState(0);

      const updateLikes = () => {
        setLikes(likes + 1);
      };

      useEffect(() => {
        setLikes(0);
      }, [id])

      // 예외처리
      if (!book) {
        return <div>찾는 책이 없습니다.</div>
      }

  return (
    <div>
      <h1>{book.title}</h1>
      <h3>{book.author}</h3>
      <p>{book.description}</p>  
      <button className="bg-[#75b5f5] text-white border-none rounded-[25px] py-[5px] px-[15px] text-[16px] cursor-pointer flex items-center justify-center transition-colors duration-300 ease-[ease] hover:bg-[#9ecfff] active:bg-[#3d9dfd]" onClick={updateLikes}>
        <span className="mr-[8px] text-[20px]">👍🏻</span> {likes}
      </button>
    </div>
  )
}

export default BookDetail